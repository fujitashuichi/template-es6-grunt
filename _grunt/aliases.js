module.exports = function(grunt, options) {
	return {
		'watch': [
			'sass: styles',
			'autoprefixer: styles'
		],
		'default': ['watch']
	}
}
