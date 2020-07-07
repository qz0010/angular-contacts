import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'contacts', loadChildren: () => import('./pages/contacts/contacts.module').then(m => m.ContactsModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
