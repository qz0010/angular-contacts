import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MainLayoutComponent} from '../../layouts/main-layout/main-layout.component';
import {ContactsComponent} from './contacts.component';
import {ContactsFeedModule} from '../../modules/contacts-feed/contacts-feed.module';
import {AuthGuard} from '../../guards/auth.guard';


@NgModule({
  declarations: [
    ContactsComponent,
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: MainLayoutComponent, children: [
          {path: '', component: ContactsComponent},
        ],
        canActivate: [AuthGuard]
      }
    ]),
    ContactsFeedModule,
  ],
  exports: [RouterModule]
})
export class ContactsModule {

}
