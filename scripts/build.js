
({
    baseUrl: ".",
    paths: {
        jquery: 'lib/jquery',
        underscore: 'lib/underscore'
    },
    shim: {
        underscore: {
            exports: '_'
        }
    },
    name: "main",
    out: "main-built.js"
})