#!/bin/bash

watch_dir=ng_modules/site/templates
output_dir=public/templates

jade $watch_dir -o $output_dir -H && jeefo-jade-watcher -w $watch_dir -o $output_dir
