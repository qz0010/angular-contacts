import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {IContact} from '../../interfaces/api';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsComponent implements OnInit {
  public data$: BehaviorSubject<IContact[]> = new BehaviorSubject<IContact[]>([]);

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.getContacts().subscribe(data => {
      this.data$.next(data);
    });
  }
}
