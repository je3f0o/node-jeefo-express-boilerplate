#!/bin/bash

requireng_module_dir=ng_modules/app
watch_dir="${requireng_module_dir}/src"
dist_dir=public/js

watch "requireng-concat -i ${requireng_module_dir} -o ${dist_dir}" "${watch_dir}" -du
