cp    = require 'child_process'

task 'test', ->
    assets = '/test/assets/'

    phantomjs = cp.spawn 'phantomjs', [".#{assets}phantomjs.coffee", ".#{assets}index.html"]
    phantomjs.stdout.pipe process.stdout
    phantomjs.on 'exit', (code) ->
        process.exit(code)