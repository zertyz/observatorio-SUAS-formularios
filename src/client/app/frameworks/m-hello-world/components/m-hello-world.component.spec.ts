// angular
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

// app
import { t } from '../../../frameworks/test/index';
import { MHelloWorldComponent } from './m-hello-world.component';

import { CoreModule } from '../../../frameworks/core/core.module';

// test module configuration for each test
const testModuleConfig = () => {
  TestBed.configureTestingModule({
    imports: [CoreModule, RouterTestingModule],
    declarations: [MHelloWorldComponent, TestComponent],
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
