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
  /*
  Added onDelete emitter for deleting record from list
  */
   @Output() onDelete = new EventEmitter()
  
  /*
  Added CaluculateAge to display age of each user 
  */
  public calculateAge(): number
     {
     let newDate = new Date(this.user.dob);
         if(newDate){
         
            let timeDiff = Math.abs(Date.now() - newDate);
            //Used Math.floor instead of Math.ceil
            //so 26 years and 140 days would be considered as 26, not 27.
            return Math.floor((timeDiff / (1000 * 3600 * 24))/365);
        }
    }
}