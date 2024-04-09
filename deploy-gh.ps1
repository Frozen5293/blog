
cd docs/.vuepress/dist
git init
git remote add origin git@github.com:frozen5293/blog.git
git add *
git commit -m 'deploy'
git push -f --set-upstream origin master
cd ../../../
# git push -f git@github.com-repo-0:frozen5293/blog.git