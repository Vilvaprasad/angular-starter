/*
Initial code for about site page
*/

import { Component } from '@angular/core'

@Component({
  selector: 'about',
  template: `
  <md-card>
    <div align = "center">
      <h1>ABout Site Page</h1>
      
      <h5>
      We use the component approach in our starter. This is the new standard for 
      developing Angular apps and a great way to ensure maintainable code by encapsulation of our behavior logic. A component is basically a self contained app usually in a single file or a folder with each concern as a file: style, template, specs, e2e, and component class. Here's how it looks:
      
      
      </h5>
    </div>
    </md-card>
  `
})
export class AboutComponent {

}
