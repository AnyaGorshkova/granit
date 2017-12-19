'use strict';

module.exports = function() {
  $.gulp.task('sass', function() {
    return $.gulp.src('./source/style/app.scss')
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sass()).on('error', $.gp.notify.onError({ title: 'Style' }))
      .pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
      .pipe($.gp.cssnano({
        discardComments: {
            removeAll: true
        },
        discardDuplicates: true,
        discardEmpty: true,
        minifyFontValues: true,
        minifySelectors: true
      }))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gp.size({gzip: true, showFiles: true}))
      .pipe($.gulp.dest($.config.root + '/assets/css'))
      .pipe($.browserSync.stream());
  })
};
