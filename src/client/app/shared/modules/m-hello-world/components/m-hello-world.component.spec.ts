// angular
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BaseRequestOptions, Http, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

// app
import { t } from '../../../test/index';
import { ILang, WindowService, ConsoleService } from '../../../core/index';
import { CoreModule } from '../../../core/core.module';
import { TEST_CORE_PROVIDERS } from '../../../core/testing/index';

// mocks
import { ConfigMock } from '../../../core/testing/mocks/ng2-config.mock';

// modules & components
import { MHelloWorldComponent } from './m-hello-world.component';


// test module configuration for each test
const testModuleConfig = () => {
  TestBed.configureTestingModule({
    imports: [
      CoreModule.forRoot([
        { provide: WindowService, useValue: window },
        { provide: ConsoleService, useValue: console },
      ]),
      RouterTestingModule],
    declarations: [MHelloWorldComponent, TestComponent],
    providers: [
      {
        provide: Http,
        useFactory: (mockBackend: MockBackend, options: BaseRequestOptions) => {
          return new Http(mockBackend, options);
        },
        deps: [MockBackend, BaseRequestOptions]
      },
      MockBackend,
      BaseRequestOptions
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  });
};

export function main() {
  t.describe('@Component: MHelloWorldComponent', () => {

    t.be(testModuleConfig);

    t.it('should work',
      t.async(() => {
        TestBed.compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            let aboutDOMEl = fixture.debugElement.children[0].nativeElement;

            t.e(aboutDOMEl.querySelectorAll('p')[0].textContent).toContain('hello');
            t.e(aboutDOMEl.querySelectorAll('p')[0].textContent).toContain('world');
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  template: '<m-hello-world></m-hello-world>'
})
class TestComponent { }
