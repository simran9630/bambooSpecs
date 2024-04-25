module.exports = function(grunt) {
    // Configure grunt
    grunt.initConfig({
      mochaTest: {
        test: {
          options: {
            reporter: 'spec', // Use 'spec' reporter for Mocha
            timeout: 5000 // Set test timeout (optional)
          },
          src: ['test/**/*.js'] // Specify test files or directories
        }
      }
    });
  
    // Load the grunt-mocha-test plugin
    grunt.loadNpmTasks('grunt-mocha-test');
  
    // Register default task to run tests
    grunt.registerTask('default', ['mochaTest']);
  };
  