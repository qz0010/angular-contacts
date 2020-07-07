import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input, ChangeDetectorRef,
} from '@angular/core';
import {IContact} from '../../../interfaces/api';

@Component({
  selector: 'app-contacts-feed-controls-form',
  templateUrl: './contacts-feed-controls-form.component.html',
  styleUrls: ['./contacts-feed-controls-form.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsFeedControlsFormComponent implements OnInit {
  @Output() addSubmit: EventEmitter<IContact | any> = new EventEmitter<IContact | any>();
  @Output() addCancel: EventEmitter<void> = new EventEmitter<void>();

  public md: IContact | any = {};

  constructor(
    private cd: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.cd.markForCheck();
    }, 1);
  }

  onAddSubmit() {
    this.addSubmit.emit({...this.md});
  }

  onAddCancel() {
    this.addCancel.emit();
  }
}
