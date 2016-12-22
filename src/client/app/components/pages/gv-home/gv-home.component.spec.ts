// angular
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

// libs
import { MultilingualModule } from '../../../frameworks/i18n/multilingual.module';
import { ConfigService } from 'ng2-config';

// app
import { t } from '../../../frameworks/test/index';
import { ILang, WindowService, ConsoleService } from '../../../frameworks/core/index';
import { CoreModule } from '../../../frameworks/core/core.module';

// mocks
import { ConfigMock } from '../../../frameworks/core/testing/mocks/ng2-config.mock';

// modules & components
import { GvHomeComponent } from './gv-home.component';

// test module configuration for each test
const testModuleConfig = () => {
  TestBed.configureTestingModule({
    imports: [
      CoreModule.forRoot([
        { provide: WindowService, useValue: window },
        { provide: ConsoleService, useValue: console },
        { provide: ConfigService, useClass: ConfigMock },
      ]),
      RouterTestingModule,
      MultilingualModule],
    declarations: [GvHomeComponent, TestComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  });
};

export function main() {
  t.describe('@Component: GvHomeComponent', () => {

    t.be(testModuleConfig);

    t.it('should work',
      t.async(() => {
        TestBed.compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            let aboutDOMEl = fixture.debugElement.children[0].nativeElement;

            t.e(aboutDOMEl.querySelectorAll('h2')[0].textContent).toContain('GV_HOME_TITLE');
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  template: '<gv-home></gv-home>'
})
class TestComponent { }
