#!/bin/bash

REMOVE=`which rm`

$REMOVE -rf logs # logs folder

# Application module
$REMOVE -rf public/js/app.js
$REMOVE -rf public/js/app.development.js
$REMOVE -rf public/js/app.min.js

# Site module
$REMOVE -rf public/js/site.js
$REMOVE -rf public/js/site.development.js
$REMOVE -rf public/js/site.min.js

# Site module
$REMOVE -rf public/js/shared.js
$REMOVE -rf public/js/shared.development.js
$REMOVE -rf public/js/shared.min.js

# Site module
$REMOVE -rf public/js/lbc.js
$REMOVE -rf public/js/lbc.development.js
$REMOVE -rf public/js/lbc.min.js

echo 'Cleaned House! :)'
