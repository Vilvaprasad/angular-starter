import {
  Component,
  OnInit
} from '@angular/core'
import { MdDialog, MdDialogRef } from '@angular/material'
import { Http } from '@angular/http'
import config from '../../config'
import { IUser } from './user.interface'
import { UserEditComponent } from './user-edit.component'
const template = require('./users.html')

@Component({
  selector: 'users',
  template
})
export class UsersComponent implements OnInit {
  dialogRef: MdDialogRef<UserEditComponent> = null
  users: Array<IUser> = null
  filteredUsers: Array<IUser> = []
  /*
  Added lastName property for filter
  */
  filter = {
    firstName: '', lastName:''
  }
   
  constructor(
    private dialog: MdDialog,
    private http: Http
  ) {

  }

  /**
   * Initialoses collection
   */
  ngOnInit() {
    this.http
      .get(`${config.apiUrl}/users`)
      .subscribe(response => {
        this.users = response.json()
        this.filteredUsers = this.users
      })
  }

   /**
   * Filters the users collection for  firstname 
   */
  filterUsers() {
  
	  if (this.filter.firstName != null && this.filter.firstName != '') {
	   	this.filteredUsers = this.users.filter(user => user.firstName.toString().toLowerCase().match(this.filter.firstName.toString().toLowerCase()))
	   	
	  } else if (this.filter.lastName != null && this.filter.lastName != '') {
	  	this.filterLastUsers();
	  	
	  } else {
	  	this.filteredUsers = this.users
	  }
  }
   /**
   * Filters the users collection for  lastName 
   */
  filterLastUsers() {
  
	  if (this.filter.lastName != null && this.filter.lastName != '') {
	   	this.filteredUsers = this.users.filter(user => user.lastName.toString().toLowerCase().match(this.filter.lastName.toString().toLowerCase()))
	   	
	  } else if (this.filter.firstName != null && this.filter.firstName != '') {
	  	this.filterUsers();
	  	
	  } else {
	 	 this.filteredUsers = this.users
	  }
  }

  /**
   * Opens an edit dialog
   * @param user The user object which has been selected to edit
   */
  editUser(user: IUser) {
    this.dialogRef = this
      .dialog
      .open(UserEditComponent)
      this.dialogRef.componentInstance.user = user
      /*
      After updating from user-edit page want to refresh the list again
      */
     this.dialogRef.afterClosed().subscribe((result: string) => {
      this.ngOnInit();
    });
  }
  
  /*
  Added deleteUser function to delete user form API
  */
  deleteUser(user: IUser) {
   let val = confirm('Are you sure want to delete this user '+ user.firstName+'?')
   
   if (val) {
    this.http.delete(`${config.apiUrl}/users/` + user.id) .subscribe(response => {this.ngOnInit()});
   }
  }
  
}