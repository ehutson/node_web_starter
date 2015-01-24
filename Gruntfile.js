module.exports = function(grunt) {
	grunt.initConfig({
		less: {
			development: {
				options: {
					compress: false,
					optimization: 2
				},
				files: {
					"assets/css/style.css": "assets/less/style.less"	
				}
			}
		},
		watch: {
			styles: {
				files: ['assets/less/**/*.less'],
				tasks: ['less'],
				options: {
					livereload: true
				}	
			}
		}
	});

        grunt.loadNpmTasks('grunt-contrib-less');
        grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['less', 'watch']);
};
