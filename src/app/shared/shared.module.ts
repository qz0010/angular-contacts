import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from '../services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {SearchPipe} from '../pipes/search.pipe';

@NgModule({
  declarations: [
    SearchPipe
  ],
  exports: [
    SearchPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    AuthService
  ]
})
export class SharedModule { }
