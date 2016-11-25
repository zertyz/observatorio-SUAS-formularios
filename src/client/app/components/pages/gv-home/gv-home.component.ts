import { Injector } from '@angular/core';
import { BaseComponent, Config, RouterExtensions } from '../../../frameworks/core/index';

@BaseComponent({
  moduleId: module.id,
  selector: 'gv-home',
  templateUrl: 'gv-home.component.html',
  styleUrls: ['gv-home.component.css']
})
export class GvHomeComponent {

  // Just one way you could handle the {N} `ui/page` Page class
  // in a shared component...
  private _page: any;
  private get page() {
    if (Config.PageClass) {
      if (!this._page) {
        this._page = this.injector.get(Config.PageClass);
      }

      return this._page;
    }
  }

  constructor(private injector: Injector, public routerext: RouterExtensions) {
    // This is here as an example
    // if (this.page) {
    //   this.page.actionBarHidden = true;
    // }
  }

  gotoStart() {
    this.routerext.navigate(['/about'], {
      transition: {
        duration: 1000,
        name: 'slideTop',
      }
    });
  }
}
