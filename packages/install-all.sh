#!/bin/sh

projs=$(find . -maxdepth 1 -type d)
for v in $projs; do
  if [ -f "$v/package.json" ]; then
    cd "$v" && npm install
    cd ..
  fi
done
