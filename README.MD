Built using postgres, Angular, and Angular-Material, this is a team and region tracker.
Can add and remove users and their associated regions. Responsively designed.

In order to run:

npm install
bower install

will need to have postgres installed. For now the connection port is hardcoded to 5433. Tables will be created on start, however the database will need to be created locally.

In order to create the database locally within the Postgres CLI run: CREATE DATABASE 'nw-sales' -u postgres;

Once the database is set up point your browser to localhost:3000 - all set after that.


TODO: create config file for postgres that gets loaded on init. Add ability to create database programmatically. 
