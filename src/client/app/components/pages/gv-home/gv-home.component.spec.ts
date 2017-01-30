// angular
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

// libs
import { MultilingualModule } from '../../../shared/i18n/multilingual.module';

// app
import { t } from '../../../shared/test/index';
import { ILang, WindowService, ConsoleService } from '../../../shared/core/index';
import { CoreModule } from '../../../shared/core/core.module';

// mocks
import { ConfigMock } from '../../../shared/core/testing/mocks/ng2-config.mock';

// modules & components
import { GvHomeComponent } from './gv-home.component';

// test module configuration for each test
const testModuleConfig = () => {
  TestBed.configureTestingModule({
    imports: [
      CoreModule.forRoot([
        { provide: WindowService, useValue: window },
        { provide: ConsoleService, useValue: console },
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
