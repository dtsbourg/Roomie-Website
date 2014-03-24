module.exports = function(grunt) {
  grunt.initConfig({
	pkg: grunt.file.readJSON('../package.json'),
    sass: {
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'stylesheets/app.css': 'stylesheets/app.scss'
        }        
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build','watch']);
}
