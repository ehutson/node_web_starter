module.exports = function(grunt) {
	require('jit-grunt')(grunt);

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
				files: ['less/**/*.less'],
				tasks: ['less'],
				options: {
					nospawn: true
				}	
			}
		}
	});

	grunt.registerTask('default', ['less', 'watch']);
};
