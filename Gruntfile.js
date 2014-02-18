module.exports = function (grunt) {
  grunt.initConfig({
    simplemocha: {
      options: {
        timeout: 3000,
        ignoreLeaks: false,
        reporter: 'tap'
      },
      all: { src: ['test/**/*.js'] }
    },
    watch: {
      views: {
        files: ['app/views/**'],
        options: {
          livereload: true
        }
      },
      scripts: {
        files: ['public/js/**'],
        options: {
          livereload: true
        }
      },
      sass: {
        files: ['styles/**'],
        tasks: ['sass'],
        options: {
          livereload: true
        }
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'styles',
          src: ['*.scss'],
          dest: './public/css',
          ext: '.css'
        }]
      }
    }
  });
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', ['watch', 'sass']);
  grunt.registerTask('test', 'simplemocha');
};