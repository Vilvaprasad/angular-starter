import { NO_ERRORS_SCHEMA } from '@angular/core'
import {
  inject,
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing'
import { Component } from '@angular/core'
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http
} from '@angular/http'
import { MockBackend } from '@angular/http/testing'

class MdDialog {

}

/**
 * Load the implementations that should be tested.
 */
import { UsersComponent } from './users.component'


describe(`Home`, () => {
  let comp: UsersComponent
  let fixture: ComponentFixture<UsersComponent>

  /**
   * async beforeEach.
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        BaseRequestOptions,
        MockBackend,
        {
          provide: Http,
          useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions)
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        MdDialog
      ]
    })
    /**
     * Compile template and css.
     */
    .compileComponents()
  }))

  /**
   * Synchronous beforeEach.
   */
  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent)
    comp = fixture.componentInstance

    /**
     * Trigger initial data binding.
     */
    fixture.detectChanges()
  })



})
