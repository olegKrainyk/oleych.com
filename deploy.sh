echo "Switching  to branch master"
# git checkout master

echo "Building app ..."
npm run build

echo "Deploying files to server ..."
scp -r ./out/* whyiamthere@10.241.104.202:/var/www/oleych.com/ 

echo "done."