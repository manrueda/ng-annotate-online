#!/bin/bash
./node_modules/browserify/bin/cmd.js js/ng-annotate-online.js | ./node_modules/uglify-js/bin/uglifyjs -c > js/ng-annotate-online.dist.js
