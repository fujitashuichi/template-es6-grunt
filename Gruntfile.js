// this is old gruntfile using load-grunt-config part of...

module.exports = function(grunt, options) {

	require('time-grunt')(grunt);

	require('load-grunt-config')(grunt);

	Grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			styles: {
				files: [{
					src: './src/scss/main.scss',
					dest: './src/dist/css/main.css'
				}]
			}
		},
		autoprefixer: {
			styles: {
				options: {
					browsers: ['last 2 version', 'ie 8']
				},
				files: [{
					src: './src/dist/css/main.css',
					dest: './main/css/main.css'
				}]
			}
		},
		babel: {
			options: {
				sourceMap: false
			},
			dist: {
				files: [{
					src: './src/es6/**/*.js',
					dest: './src/dist/js/<%= pkg.name %>.js'
				}]
			}
		},
		// watch
		watch: {
			sass: {
				files: ['./src/scss/**/*.scss'],
				tasks: 'sass: styles'
			}
		}
	});

	// test task
	grunt.registerTask('default', ['watch']);
};
