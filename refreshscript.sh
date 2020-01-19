# this script starts a nodemon server that watches for file changes, and also auto reloads the browser on file change 
sudo killall node
nodemon -e js,css,ejs & watchme . views web -e "osascript /users/liampower/refresh.applescript" -q