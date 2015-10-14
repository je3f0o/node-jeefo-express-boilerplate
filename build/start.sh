#!/bin/bash

export NODE_ENV='production'
export PORT=80

DATE=`date +%Y-%m-%d_%H:%M:%S`
stdout="logs/stdout_${DATE}.log"
stderr="logs/stderr_${DATE}.log"

mkdir -p logs
node server >> $stdout 2>> $stderr
