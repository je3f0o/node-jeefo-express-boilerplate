#!/bin/bash

sass_filename='main'
watch_dir="./vendors/sass/${sass_filename}.sass:./public/css/${sass_filename}.css"

sass --compass --watch $watch_dir --sourcemap=inline --style expanded
