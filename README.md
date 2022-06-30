# learningmongoDB
A repo to play around with mongo/mongoDB

# Process
1. Installed Mongo using https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb
    - this also installed compass, but I installed it previously not realizing that I needed to install mongo PATH
2. Reviewing youtube tutorial to get started
    - reviewing structure/syntax of **JSON** object.
    - briefly used mongoDB Compass UI to create *documents* / **REVIEW verbage: documents and collections**
3. Reviewing mongo shell commands


## Shell Commands 
Shell Command Notes

### Viewing Data

        - show dbs: list of dbs in this system *if nothing is in the db, it will NOT show up on the list of dbs under show dbs

        - show collections: shows the collections/*documents*inside the checked out db
        - db.collectionName.find(): shows all the objects in the colletion
            - .pretty(): makes that data easier to read!*

        - db.collectionName.findOne(): shows the first objects in the colletion

        - db.collectionName.find({key:'value'}): show objects in collection that match object information written in the paramater
            
        - db.collectionName.find().sort({key:1 or -1}): show objects in collection and sorts them by the field we want to sort by, and put 1 or -1 for ascending and descending *alphabetically*

        - db.collectionName.find({key:'value';}).count(): shows number of objects with that value

        -db.collectionName.find().limit(#): shows list of objects limited to the number specified in the limit method

        - db.collectionName.find().sort({key:1 or -1}).limit(): show objects in collection and sorts them by the field we want to sort by, and put 1 or -1 for ascending and descending *alphabetically*; limited to the number specified in the limit method

        - db.collectionName.find().forEach(function(pikachu){print('string'+ pikachu.title)}): prints out a list of the specified values.  NOTE: the 'string' at the beginning is an option but could be useful when printing
                Ex: `db.posts.find().forEach(function(pikachu){print('pikachu2 '+ pikachu.category)})`
                will print: pikachu 2 news
                            pikachu 2 technology
                            pikachu 2 news
                            pikachu 2 entertainment
                
### Manipulating Data

 `use dbs`: checks out from db list OR creates a new db and checks it out *if nothing is in the db, it will NOT show up on the list of dbs under show dbs*

 `use dbname`: checks out a db

 `db.dropDatabase()`: deletes the database you have checked out

 `db.insert({object})`: inserts an object

 `db.insertMany({{},{},{}})`: inserts many objects at once because this is a NON-RELATIONAL system, we can put whatever we want in any document - as opposed to a reational database with a strict data model

 `db.collectionName.update({key:'value'}`,
                {
                    key:'value',
                    key:'value'
                })`
                
         : will replace the entire thing; usually you want to use the ID
            -add `{
                    upsert:true
                }`
         : will insert the object if it's not already there

`db.collectionName.update({key:'value'}`
                {
                    $set: {key:'value',
                    key:'value'
                    }
                })`
                
          : will update the key/value specified or add a key/value; usually you want to use the ID; Note that `$set` is really important here

`db.collectionName.update({key:'value'}, {$inc: {key: integer}})` :will incriment a number value - this is great for something like "likes" on posts

`db.collectionName.update({key:'value'}, {$remame: { originalKey: 'newKey'}})` : you can rename 

`db.collectionName.remove({key:'value'})` :removes a thingy

### Manipulating Data - Sub-Documents