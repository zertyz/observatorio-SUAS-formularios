// angular
import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, Http } from '@angular/http';

// app
import { Config } from '../core/index';
import { MHelloWorldComponent } from './components/index';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [
    MHelloWorldComponent
  ],
  exports: [
    MHelloWorldComponent,
  ],
  providers: []
})
export class MHelloWorldModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MHelloWorldModule,
      providers: []
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: MHelloWorldModule) {
    if (parentModule) {
      throw new Error('MHelloWorldModule already loaded; Import in root module only.');
    }
  }
}
