#!/usr/bin/env bash

set -e

paths=(
    "/education"
    "/experiences"
    "/resume"
    "/contact"
)

for p in "${paths[@]}"
do
    dir=".$p"

    mkdir -p "$dir"
    ln -s ./index.html "$dir/index.html"
done

ln -s ./index.html ./404.html
