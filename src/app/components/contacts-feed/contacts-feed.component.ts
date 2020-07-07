import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IContact} from '../../interfaces/api';
import {BehaviorSubject, of} from 'rxjs';
import {delay, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-contacts-feed',
  templateUrl: './contacts-feed.component.html',
  styleUrls: ['./contacts-feed.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsFeedComponent implements OnInit, OnChanges {
  @Input() data: IContact[];
  public data$: BehaviorSubject<IContact[]> = new BehaviorSubject<IContact[]>([]);
  public searchSource: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public search$ = this.searchSource.asObservable().pipe(
    switchMap((str) => of(str).pipe(delay(300)))
  );

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data) {
      this.data$.next([...this.data]);
    }
  }

  ngOnInit() {
  }

  onEditSave(user: IContact) {
    const data = this.data$.getValue();
    const idx = data.findIndex(u => u.id === user.id);
    if (idx >= 0) {
      data[idx] = {...data[idx], ...user};
    }
    this.data$.next([...data]);
  }

  onRemove(user: IContact) {
    const data = this.data$.getValue();
    const idx = data.findIndex(u => u.id === user.id);
    if (idx >= 0) {
      data.splice(idx, 1);
    }
    this.data$.next([...data]);
  }

  onAdd(user: IContact) {
    const data = this.data$.getValue();
    data.unshift({id: `${Date.now()}`, ...user});
    this.data$.next([...data]);
  }

  onSearchChange(str: string) {
    this.searchSource.next(str);
  }
}
