'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: ['<%= pkg.name %>.js'],
        },
        clean: {
          src: '<%= pkg.name %>.min.js'
        },
        uglify: {
            main: {
                files: {
                    '<%= pkg.name %>.min.js': ['<%= pkg.name %>.js']
                }
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        },
        watch: {
            hint: {
                files: ['<%= pkg.name %>.js'],
                tasks: ['jshint']
            },
            test: {
              files: ['<%= pkg.name %>.js', 'test/**/*.spec.js'],
              tasks: ['karma']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-notify');

    grunt.registerTask('test', ['karma']);
    grunt.registerTask('build', ['clean', 'uglify']);
    grunt.registerTask('default', ['watch:test', 'watch:hint']);
};
