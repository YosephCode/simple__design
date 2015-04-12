module.exports = function(grunt){
	grunt.initConfig({
		  sass: {
		    dist: {
		      files: {
		        'css/main.css': 'scss/main.scss'
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
            sass: {
                files: ['scss/*.scss'],
                tasks: ['sass']
            },
            css: {
                files: ['css/main.css'],
                tasks: ['cssmin']
            }
          }
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['sass', 'watch']);
}