import { join } from 'path';
import { SeedAdvancedConfig } from './seed-advanced.config';
// import { ExtendPackages } from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedAdvancedConfig {

  public ELECTRON_DEPENDENCIES_SRC: Array<string> = [];   // depends on code added to tools/tasks/project/desktop.libs.ts

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  FONTS_DEST = `${this.APP_DEST}/font-awesome/fonts`;
  FONTS_SRC = ['node_modules/font-awesome/fonts/**'];

  constructor() {
    super();
    this.APP_TITLE = 'Observatório SUAS (formulários)';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      {src: 'bootstrap/dist/css/bootstrap.css'/*bootstrap.min.css ? maybe not because they will get minified when build for production*/, inject: true},
      {src: 'primeng/resources/primeng.css',                inject: true},
      {src: 'primeng/resources/themes/cupertino/theme.css', inject: true},
      {src: 'font-awesome/css/font-awesome.css',            inject: true},
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      ...this.APP_ASSETS,
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];

    // Add packages (e.g. ng2-translate)
    // ng2-translate is already added with the advanced seed - here for example only
    // let additionalPackages: ExtendPackages[] = [{
    //   name: 'ng2-translate',
    //   // Path to the package's bundle
    //   path: 'node_modules/ng2-translate/bundles/ng2-translate.umd.js'
    // }];
    //
    // this.addPackagesBundles(additionalPackages);

    /* Add to or override NPM module configurations: */
    // this.mergeObject(this.PLUGIN_CONFIGS['browser-sync'], { ghostMode: false });

    // additional packages as instructed in the previous comments above used to not work
    // but now should be retested since the comment has changed

    // @ng-bootstrap/ng-bootstrap
    this.SYSTEM_BUILDER_CONFIG.packages['@ng-bootstrap/ng-bootstrap'] = {main: 'ng-bootstrap.js', defaultExtension : 'js'};
    this.SYSTEM_BUILDER_CONFIG.paths   ['@ng-bootstrap/ng-bootstrap'] = `${this.APP_BASE}node_modules/@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js`;
    this.SYSTEM_CONFIG_DEV    .paths   ['@ng-bootstrap/ng-bootstrap'] = `${this.APP_BASE}node_modules/@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js`;
    this.SYSTEM_CONFIG        .paths   ['@ng-bootstrap/ng-bootstrap'] = `${this.APP_BASE}node_modules/@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js`;
    this.ELECTRON_DEPENDENCIES_SRC.push('node_modules/@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js');

    // primeng
    this.SYSTEM_BUILDER_CONFIG.packages['primeng'] = {main: 'primeng.js', defaultExtension : 'js'};
    this.SYSTEM_BUILDER_CONFIG.paths   ['primeng'] = `${this.APP_BASE}node_modules/primeng`;
    this.SYSTEM_CONFIG_DEV    .paths   ['primeng'] = `${this.APP_BASE}node_modules/primeng`;
    this.SYSTEM_CONFIG        .paths   ['primeng'] = `${this.APP_BASE}node_modules/primeng`;
    this.ELECTRON_DEPENDENCIES_SRC.push('node_modules/primeng/**/*');

  }

}
