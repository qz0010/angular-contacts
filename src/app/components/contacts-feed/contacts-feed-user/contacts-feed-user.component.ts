import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {IContact} from '../../../interfaces/api';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-contacts-feed-user',
  templateUrl: './contacts-feed-user.component.html',
  styleUrls: ['./contacts-feed-user.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsFeedUserComponent implements OnInit {
  @Output() openEdit: EventEmitter<IContact> = new EventEmitter<IContact>();
  @Output() editSave: EventEmitter<IContact> = new EventEmitter<IContact>();
  @Output() editCancel: EventEmitter<IContact> = new EventEmitter<IContact>();
  @Output() remove: EventEmitter<IContact> = new EventEmitter<IContact>();
  @Input() user: IContact;

  @ViewChild('form', {static: false}) formRef: NgForm;

  public editing = false;
  public editingMd: IContact | any;

  constructor() { }

  ngOnInit() {
  }

  onEditClick() {
    this.editingMd = {...this.user};
    this.editing = true;
    this.openEdit.emit(this.user);
  }

  onEditSave() {
    if (this.formRef.valid) {
      this.editing = false;
      this.editSave.emit({...this.user, ...this.editingMd});
    }
  }

  onEditCancel() {
    this.editing = false;
    this.editCancel.emit(this.user);
  }

  onRemove() {
    this.remove.emit(this.user);
  }
}
