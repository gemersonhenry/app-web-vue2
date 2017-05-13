var gulp = require("gulp");
var pug = require("gulp-pug");
var sass = require("gulp-sass");
var gulpIf = require("gulp-if");

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

gulp.task("default", ["pug", "sass"])

gulp.task("pug", function () {
	gulp.src( path.src + path.srcDir.pug )
		.pipe( pug({
			pretty: true
		}) )
		.pipe( gulp.dest( path.public ) );
})

gulp.task("sass", function () {
	gulp.src( path.src + path.srcDir.sass )
		.pipe( sass() )
		.pipe( gulp.dest( path.public + path.srcPublic.css ) );
})