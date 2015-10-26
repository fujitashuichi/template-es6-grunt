// this is old gruntfile using load-grunt-config part of...
// but it can be running

module.exports = function(grunt) {

	require('time-grunt')(grunt);

	require('load-grunt-config')(grunt);

	Grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// sass compile
		sass: {
			dist: {
				files: [{
					src: './src/scss/main.scss',
					dest: './src/dist/css/main.css'
				}]
			}
		},
		// add prefix
		autoprefixer: {
			styles: {
				options: {
					browsers: ['last 2 version', 'ie 8']
				},
				files: [{
					src: './src/dist/css/main.css',
					dest: './htdocs/css/main.css'
				}]
			}
		},
		// es6 files compile to es5
		babel: {
			options: {
				sourceMap: false
			},
			dist: {
				files: {
					src: ['./src/es-six/**/*.js'],
					dest: './src/dist/js'
				}
			}
		},
		// use 'require' on browser
		browserify: {
			dist: {
				files: {
					files: ['./src/dist/js/core.js'],
					dist: './htdocs/js/core.js'
				}
			}
		}

		// watch
		watch: {
			sass: {
				files: ['./src/scss/**/*.scss'],
				tasks: 'sass: dist'
			},
			autoprefixer: {
				files: ['./src/dist/css/main.css'],
				tasks: 'autoprefixer: styles'
			},
			babel: {
				files: ['./src/es-six/**/*.js'],
				tasks: 'babel'
			},
			browserify: {
				files: ['./htdocs/js/core.js'],
				tasks: 'browserify'
			}
		}
	});

	// test task
	grunt.registerTask('default', ['watch']);
};
