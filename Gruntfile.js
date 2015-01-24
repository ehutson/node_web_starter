module.exports = function(grunt) {
	grunt.initConfig({
		less: {
			development: {
				options: {
					compress: false,
					optimization: 2
				},
				files: {
					'assets/css/style.css': 'assets/less/style.less'
				}
			}
		},
		autoprefixer: {
			dist: {
				files: {
					'assets/css/style.css': 'assets/css/style.css'
				}
			}
		},
		watch: {
			styles: {
				files: ['assets/less/**/*.less'],
				tasks: ['less', 'autoprefixer'],
				options: {
					livereload: true
				}	
			}
		}
	});

	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['less', 'autoprefixer', 'watch']);
};

