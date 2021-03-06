# Project help you setup mongodb in vue 1 minute (MEVN)

```
npm install -g vue-cli
npm install --save body-parser cors morgan
npm install mongodb
npm install nodemon

```

# To run the project

```
npm run start 
npm run dev // auto update when you save
```

## To submit project to git

```
git add -u &
git commit -m "update: `date +'%Y-%m-%d %H:%M:%S'`"
git push origin master
```

### GH deploy
```
cd server && cd public
git init
git add .
git commit -m 'deploy to gh'
git remote add gh-pages https://github.com/shijiezhou1/vue-vuepress.git
git push -f https://github.com/shijiezhou1/vue-vuepress master:gh-pages
```

## API for this vuepress

### Setup Express - USING HEROKU

```
cd $HOME
brew install heroku/brew/heroku
```

### Create Heroku App Deployment

```
heroku login
heroku create
```

### Git Push to Heroku

```
git init
git add .
git commit -am "make it better"
heroku git:remote -a XXXXX
git status
git push heroku master

```

### View Deployment

```
heroku open
```