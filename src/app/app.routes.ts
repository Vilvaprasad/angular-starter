import { Routes } from '@angular/router'
import { HomeComponent } from './home'
import { NoContentComponent } from './no-content'
import { AboutComponent } from './about/about.component'
import { UsersComponent } from './users'
import { DataResolver } from './app.resolver'

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'about',    component: AboutComponent },
]
