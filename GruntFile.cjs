module.exports = function(grunt) {
    // Configure grunt
    require('@babel/register')({
      // Load Babel configuration from .babelrc file
      babelrc: true
    });
    grunt.initConfig({
      mochaTest: {
        test: {
          options: {
            reporter: 'spec', // Use 'spec' reporter for Mocha
            timeout: 5000,
            require: 'esm' // Set test timeout (optional)
          },
          src: ['test.js'] ,
         
        }
      }
    });
   
  
  
    // Load the grunt-mocha-test plugin
    grunt.loadNpmTasks('grunt-mocha-test');
  
    // Register default task to run tests
    grunt.registerTask('default', ['mochaTest']);
  };
  