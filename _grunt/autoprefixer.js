modele.exports = {
	// autoprefixer
	styles: {
		options: {
			browsers: ['last 2 version', 'ie 8']
		},
		files: [{
			src: './src/dist/css/main.css',
			dest: './main/css/main.css'
		}]
	}
}
