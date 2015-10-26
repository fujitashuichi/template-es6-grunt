module.exports = function(grunt, options) {
	var path = require('path');

	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

	require('load-grunt-config')(grunt, {
		// folder path
		configPath: path.join(process.cwd(), '_grunt'),
		init: true,
		// task load
		loadGruntTasks: {
			config: require('./package.json'),
			scope: 'devDependencies',
			pattern: ['grunt-*']
		}
	});

	// test task
	//grunt.registerTask('default', ['watch']);
};
