// libs
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Config, LogService, ILang } from '../../../core/index';
import { Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'm-hello-world',
  templateUrl: 'm-hello-world.component.html',
  styleUrls: ['m-hello-world.component.css']
})
export class MHelloWorldComponent {

  @Input() hello: string;
  @Input() world: string;

  constructor() {
    this.hello = 'hello';
    this.world = 'my default world';
  }

}
