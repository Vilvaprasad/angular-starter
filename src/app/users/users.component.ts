import {
  Component,
  OnInit
} from '@angular/core'
import { MdDialog, MdDialogRef } from '@angular/material'
import { Http } from '@angular/http'
import config from '../../config'
import { IUser } from './user.interface'
import { UserEditComponent } from './user-edit.component'

@Component({
  selector: 'users',
  template: require('./users.html')
})
export class UsersComponent implements OnInit {
  dialogRef: MdDialogRef<UserEditComponent> = null
  users: Array<IUser> = null
  filteredUsers: Array<IUser> = []
  filter = {
    lastName: ''
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
   * Filters the users collection
   */
  filterUsers() {
    const fieldNames = Object.keys(this.filter)
    this.filteredUsers = this.users.filter(user => user.firstName.match(this.filter.lastName))
  }

  /**
   * Opens an edit dialog
   * @param user The user object which has been selected to edit
   */
  editUser(user: IUser) {
    this.dialogRef = this
      .dialog
      .open(UserEditComponent)

    Object.assign(this.dialogRef.componentInstance, { user })
  }
}