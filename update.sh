#!/bin/bash +xe
bundle exec jekyll build
bundle exec s3_website push
