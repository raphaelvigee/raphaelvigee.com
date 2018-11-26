#!/usr/bin/env bash

git config --global user.email $GH_EMAIL
git config --global user.name $GH_NAME

git clone $CIRCLE_REPOSITORY_URL out

cd out
git checkout $TARGET_BRANCH || git checkout --orphan $TARGET_BRANCH
cp ./CNAME /tmp/CNAME
git rm -rf .
cp /tmp/CNAME ./CNAME
cd ..

yarn build

cp -a build/. out/.

mkdir -p out/.circleci && cp -a .circleci/. out/.circleci/.
cd out

git add -A
git commit -m "Automated deployment to GitHub Pages: ${CIRCLE_SHA1}" --allow-empty

git push origin $TARGET_BRANCH
cd ..

cd aws
cat >./secrets.json <<EOF
{
  "NODE_ENV": "prod",
  "EMAIL": "contact@raphaelvigee.com",
  "DOMAIN": "$DOMAIN"
}
EOF
cat ./secrets.json

serverless deploy
cd ..
