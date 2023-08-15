cd docs/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push --set-upstream git@github.com-repo-0:frozen5293/blog.git master
# git push -f git@github.com-repo-0:frozen5293/blog.git