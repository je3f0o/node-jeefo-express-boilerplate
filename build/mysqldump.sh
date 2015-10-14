#!/bin/bash

mysqldump -u root -R -E --triggers --single-transaction ineg > ineg.sql
