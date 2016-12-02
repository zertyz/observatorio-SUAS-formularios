import { BaseComponent, Config, LogService, ILang } from '../../core/index';
import { Input } from '@angular/core';

@BaseComponent({
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
