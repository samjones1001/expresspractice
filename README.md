### Mongo DB Setup and Basic Commands

To install, pass the following commands in the terminal:

```
brew update
brew install mongodb
```

Then set up the directory to which the `mongodb` procress will write data. By default, this is the `/data/db` directory. Therefore, pass the following commands in the terminal:

```
mkdir -p /data/db
```

N.B. You may need to `sudo` in front of the above command if restricted.

Then make sure the `data/db` directory has the right permissions in it by passing the following commands in the terminal:

```
sudo chown -R `id -un` /data/db
> # Enter your password
```

Then run the Mongo daemon which should start the Mongo server by passing the following command in the terminal:

```
mongod
```
To run the Mongo shell with the Mongo daemon running in one terminal, type `mongo` in another termnal window. This will run the Mongo shell which is an application to access data in MongoDB.

To exit the Mongo shell run `quit()`.

To stop the Mongo daemon hit `ctrl-c`.
