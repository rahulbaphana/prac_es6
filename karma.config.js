module.exports = function(config) {
    config.set({

        basePath: '',
        frameworks: ['browserify', 'jasmine','chai-as-promised', 'chai'],

        files: [
            'src/**/*.js',
            'test/**/*.js'
        ],

        exclude: [
        ],

        preprocessors: {
            'src/**/*.js': ['browserify'],
            'test/**/*.js': ['browserify']
        },

        browserify: {
            debug: true,
            transform: [ 'babelify' ]
        }

        // define reporters, port, logLevel, browsers etc.
    });
};