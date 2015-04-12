module.exports = function(grunt){
	grunt.initConfig({
		  less: {
	            development: {
	                options: {
	                    paths: ["less"]
	                },
	                files: {
	                    "css/main.css": "less/*.less"
	                }
	            }
	        },
		  cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'css/styles.min.css': 'css/main.css'
                }
            }
	      },
	      watch: {
            less: {
                files: ['less/*.less'],
                tasks: ['less']
            },
            css: {
                files: ['css/main.css'],
                tasks: ['cssmin']
            }
          }
	});
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['watch']);
}