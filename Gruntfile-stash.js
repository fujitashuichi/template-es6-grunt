module.exports = function(grunt, options) {

	require('time-grunt')(grunt);

	var path = require('path');

	require('load-grunt-config')(grunt, {
		configPath: path.join(process.cwd(), '_grunt'),
		init: true,
		loadGruntTasks: {
			config: require('./package.json'),
			scope: ['devDependencies'],
			pattern: ['grunt-*']
		}
	});
	
	// test task
	grunt.registerTask('default', function() {
		console.log('Test');
	});
};
