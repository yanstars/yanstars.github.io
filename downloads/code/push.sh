#!/bin/bash

echo "start-----------"
git add .
git commit -m $1
git push
echo "done------------"