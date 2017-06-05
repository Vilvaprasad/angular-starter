import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  Input
} from '@angular/core'
import { IUser } from './user.interface'


@Component({
  selector: 'user-info',
  template: require('./user.html'),
  styleUrls: ['./user.scss']
})
export class UserComponent {
  @Input() user: IUser
  @Output() onEdit = new EventEmitter()
}