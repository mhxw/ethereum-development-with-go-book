rm -rf .git
git init
git add .
git commit -m 'first commit'
git branch -M gh-pages
git remote add origin https://github.com/mhxw/ethereum-development-with-go-book.git
git push -u -f origin gh-pages