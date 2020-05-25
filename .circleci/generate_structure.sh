#!/usr/bin/env bash

set -e

paths=(
    "/education"
    "/experiences"
    "/hacks"
    "/resume"
    "/contact"
    "/x"
)

for p in "${paths[@]}"
do
    dir=".$p"
    file="$dir.html"

    if [[ -f ${file} ]]; then
        rm ${file}
    fi

    ln -s ./index.html ${file}
done

ln -s ./index.html ./404.html
