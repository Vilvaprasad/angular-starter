import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  Input
} from '@angular/core'
import { IUser } from './user.interface'

@Component({
  selector: 'user-edit',
  template: require('./user-edit.html')
})
export class UserEditComponent {
  @Input() user: IUser

}