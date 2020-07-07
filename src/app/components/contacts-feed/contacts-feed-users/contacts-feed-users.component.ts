import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, DoCheck} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IContact} from '../../../interfaces/api';

@Component({
  selector: 'app-contacts-feed-users',
  templateUrl: './contacts-feed-users.component.html',
  styleUrls: ['./contacts-feed-users.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsFeedUsersComponent implements OnInit {
  @Output() openEdit: EventEmitter<IContact> = new EventEmitter<IContact>();
  @Output() editSave: EventEmitter<IContact> = new EventEmitter<IContact>();
  @Output() editCancel: EventEmitter<IContact> = new EventEmitter<IContact>();
  @Output() remove: EventEmitter<IContact> = new EventEmitter<IContact>();
  @Input() data: IContact[] = [];

  constructor() { }

  ngOnInit() {
  }
}
