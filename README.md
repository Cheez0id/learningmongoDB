# learningmongoDB
A repo to play around with mongo/mongoDB

1. Installed Mongo using https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb
    - this also installed compass, but I installed it previously not realizing that I needed to install mongo PATH
2. Reviewing youtube tutorial to get started
    - reviewing structure/syntax of **JSON** object.
    - briefly used mongoDB Compass UI to create *documents* / **REVIEW verbage: documents and collections**
3. Reviewing mongo shell commands
    - show dbs: list of dbs in this system *if nothing is in the db, it will NOT show up on the list of dbs under show dbs*
    - show collections: shows the collections/*documents*inside the checked out db
    - db.collectionName.find(): shows all the objects in the colletion
    - - *db.collectionName.find().pretty(): makes that data easier to read!*
    - db.collectionName.find({key:'value'}): show objects in collection that match object information written in the paramater
    - - *db.collectionName.find({key:'value'}).pretty(): makes that data easier to read!*
     - db.collectionName.find().sort({key:1 or -1}): show objects in collection and sorts them by the field we want to sort by, and put 1 or -1 for ascending and descending
    - - *db.collectionName.find({key:'value'}).pretty(): makes that data easier to read!*
    - use dbs: checks out from db list OR creates a new db and checks it out *if nothing is in the db, it will NOT show up on the list of dbs under show dbs*
    - use dbname: checks out a db
    - db.dropDatabase(): deletes the database you have checked out
    - db.insert({object}): inserts an object
    - db.insertMany({{},{},{}}): inserts many objects at once *because this is a NON-RELATIONAL system, we can put whatever we want in any document (as opposed to a reational database with a strict data model)
