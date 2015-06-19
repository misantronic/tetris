module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			options: {
				mangle: true
			},

			all: {
				files: {
					'dist/bricks.min.js' : ['src/bricks.js'],
					'dist/game.min.js' : ['src/game.js']
				}
			}
		},

		concat: {
			options: {
				separator: ""
			},

			all: {
				src: [
					'./dist/bricks.min.js',
					'./dist/game.min.js'
				],
				dest: './dist/tetris.js'
			}
		}
	});

	// load tasks
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');

	// tasks
	grunt.registerTask('default', ['uglify', 'concat']);
};