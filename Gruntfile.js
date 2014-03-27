
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    watch: {
      compass: {
        files: ['**/*.{scss,sass,css}'],
        tasks: ['compass:dev', 'autoprefixer']
      }
    },

    sass: {
      dev: {
        options: {
          sassDir: ['assets/css/sass'],
          cssDir: ['assets/css'],
          environment: 'development'
        }
      },
      
      prod: {
        options: {
          sassDir: ['assets/css/sass'],
          cssDir: ['assets/css'],
          environment: 'production'
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 versions'],
        cascade: true
      },
      single_file: {
        src: 'assets/images/lab-banner.css',
        dest: 'assets/images/lab-banner.css'
      },
    }

  });

  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.registerTask('default', ['watch', 'compass:dev',  'autoprefixer']);


};