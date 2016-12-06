/**
 * Created by luiz on 12/6/16.
 */

import * as gulp from 'gulp';
import Config from '../../config';

export = () => {
  return gulp.src(Config.FONTS_SRC)
    .pipe(gulp.dest(Config.FONTS_DEST));
};
