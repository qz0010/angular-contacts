import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactsFeedComponent} from '../../components/contacts-feed/contacts-feed.component';
import {ContactsFeedControlsComponent} from '../../components/contacts-feed/contacts-feed-controls/contacts-feed-controls.component';
import {ContactsFeedUserComponent} from '../../components/contacts-feed/contacts-feed-user/contacts-feed-user.component';
import {ContactsFeedUsersComponent} from '../../components/contacts-feed/contacts-feed-users/contacts-feed-users.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import {ContactsFeedControlsFormComponent} from '../../components/contacts-feed/contacts-feed-controls-form/contacts-feed-controls-form.component';


@NgModule({
  declarations: [
    ContactsFeedComponent,
    ContactsFeedControlsComponent,
    ContactsFeedUserComponent,
    ContactsFeedUsersComponent,
    ContactsFeedControlsFormComponent
  ],
  exports: [
    ContactsFeedComponent,
    ContactsFeedControlsComponent,
    ContactsFeedUserComponent,
    ContactsFeedUsersComponent,
    ContactsFeedControlsFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ]
})
export class ContactsFeedModule {
}
