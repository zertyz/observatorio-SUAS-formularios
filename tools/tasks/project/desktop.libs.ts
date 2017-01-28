import * as gulp from 'gulp';
import { relative, join } from 'path';
import Config from '../../config';
var newer = require('gulp-newer');

export = () => {
  let src = [
    'node_modules/@angular/**/*',
    'node_modules/rxjs/**/*',
    'node_modules/angulartics2/**/*',
    'node_modules/lodash/**/*',
    'node_modules/ng2-translate/**/*',
    'node_modules/@ngrx/**/*',
    'node_modules/ngrx-store-freeze/**/*',
    'node_modules/deep-freeze-strict/**/*'
  ];

  src.push(...Config.NPM_DEPENDENCIES.map(x => relative(Config.PROJECT_ROOT, x.src)));

  // angular-seed-advanced-spikes
  src = src.concat(Config.ELECTRON_DEPENDENCIES_SRC);   // code to allow 'src' to be extended by tools/config/project.config.ts

  return gulp.src(src, { base: 'node_modules' })
    .pipe(newer({
      dest: join(Config.APP_DEST + '/node_modules'),
      map: function(path: String) { return path.replace('.ts', '.js').replace('.scss', '.css'); }
    }))
    .pipe(gulp.dest(join(Config.APP_DEST + '/node_modules')));
};
