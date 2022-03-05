yarn build
cd build
rm -rf .git
git init
git config --global user.name "mhxw"
git config --global user.email "32643286+mhxw@users.noreply.github.com"
git add .
git commit -m "first commit"
git branch -M dev
git remote add origin https://github.com/mhxw/ethereum-development-with-go-book.git
git push -u -f origin dev
cd ../
rm -rf build