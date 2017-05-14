var gulp = require("gulp");
var pug = require("gulp-pug");
var sass = require("gulp-sass");
var gulpIf = require("gulp-if");
var postcss = require("gulp-postcss");
var cssnano = require("cssnano");
var autoprefixer = require("autoprefixer");
var gulpAutoprefixer = require("gulp-autoprefixer");
var gulpCssnano = require("gulp-cssnano");

var path = {
	public: "./app/",
	srcPublic: {
		css: "css/"
	},
	src: "./src/",
	srcDir: {
		pug: "index.pug",
		sass: "styles.scss"
	}
}

gulp.task("default", ["html", "css"])

gulp.task("html", function () {
	return gulp.src( path.src + path.srcDir.pug )
		.pipe( pug({
			pretty: true
		}) )
		.pipe( gulp.dest( path.public ) );
})

gulp.task("css", function () {
	return gulp.src( path.src + path.srcDir.sass )
		.pipe( sass() )
		.pipe( gulp.dest( path.public + path.srcPublic.css ) );
})

gulp.task("css-min", function () {
	return gulp.src( path.src + path.srcDir.sass )
		.pipe( sass() )
		.pipe( gulpCssnano({
			discardComments: {
				removeAll: true
			}
		}) )
		.pipe( gulp.dest( path.public + path.srcPublic.css ) );
})

gulp.task("postcss", function () {
	var plugins = [
		autoprefixer(),
		cssnano({
			discardComments: true
		})
	];
	return gulp.src( path.src + path.srcDir.sass )
		.pipe( sass() )
		.pipe( postcss( plugins ) )
		.pipe( gulp.dest( path.public + path.srcPublic.css ) )
})