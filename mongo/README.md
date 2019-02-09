# Installing MongoDB on Mac OSX 10.14.2 Mojave

```
brew update
brew install mongodb
```

```
/usr/local/Cellar/mongodb
```

## For older version: 
```
/usr/local/var/Cellar/mongodb/
```

## Check if it is installed
```
mongo -version
mongo -help
```

## Next 
```
$ sudo mkdir -p /data/db
$ whoami //check your username
jesus
$ sudo chown agabardo /data/db
```

```
$ cd ~
$ pwd
/Users/jesus
$ touch .bash_profile
$ vim .bash_profile
```

```
export MONGO_PATH=/usr/local/mongodb
export PATH=$PATH:$MONGO_PATH/bin
```

```
sudo mongod
mongo
```
