/*
Added required imports and added update function
*/
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  Input
} from '@angular/core'
import { IUser } from './user.interface'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import config from '../../config'
import { MdDialog, MdDialogRef } from '@angular/material'

@Component({
  selector: 'user-edit',
  template: require('./user-edit.html')
})
export class UserEditComponent {
  @Input() user: IUser
  /*
  This constructor is to get MdDialogRef and Http
  */
  constructor (public dialogRef: MdDialogRef<UserEditComponent>,private http: Http) {}
  
  /*
  This update method is used to update records to API
  */
  update() {
	  this.http.put(`${config.apiUrl}/users/`+this.user.id,this.user).subscribe(response => {this.dialogRef.close()});
  }
}