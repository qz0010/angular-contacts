import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {IContact} from '../../../interfaces/api';

@Component({
  selector: 'app-contacts-feed-controls',
  templateUrl: './contacts-feed-controls.component.html',
  styleUrls: ['./contacts-feed-controls.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsFeedControlsComponent implements OnInit {
  @Output() add: EventEmitter<IContact> = new EventEmitter<IContact>();
  @Output() searchChange: EventEmitter<string> = new EventEmitter<string>();

  public adding = false;

  constructor(
  ) { }

  ngOnInit() {
  }

  onAdd() {
    this.adding = true;
  }

  onAddSubmit(user: IContact) {
    this.adding = false;
    this.add.emit(user);
  }

  onAddCancel() {
    this.adding = false;
  }

  onSearchChange(str) {
    this.searchChange.emit(str);
  }
}
