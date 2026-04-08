- launch mongodb: ``sudo docker compose up -d``
- connect to mongodb:
   - (option1): connect to the mongo shell (mongosh) inside the container: 
       Logs into the test db:
       `sudo docker exec -it mongolia mongosh`
       Once inside, you can load a script to mongodb:
       `load( "/scripts/script-to-load.js" )`
   - (option2): connect to mongodb from outside the container with this connection string:
       Logs into a db or creates it if it does not exist: 
       `mongodb://localhost/insert-database-name-here`
       Logs into the admin db: 
       ``mongodb://genghis:pw@localhost:27017``
- show the databases: ``show dbs``
- create or change the database: ``use insert-database-name``
- create collection: ``db.createCollection("insert-collection-name")``
- insert a document to collection:
```
  db.insert-collection-name.insertOne({
  stringkey1: "string value 1",
  stringkey2: "string value 2",
  stringkey3: "string value 3",
  integerkey: 1,
  arraykey: ["value1", "value2"],
  datekey: Date()
})
```
- insert multiple documents to collection:
```
db.insert-collection-name.insertMany([  
  {
    title: "Post Title 2",
    body: "Body of post.",
    category: "Event",
    likes: 2,
    tags: ["news", "events"],
    date: Date()
  },
  {
    title: "Post Title 3",
    body: "Body of post.",
    category: "Technology",
    likes: 3,
    tags: ["news", "events"],
    date: Date()
  },
  {
    title: "Post Title 4",
    body: "Body of post.",
    category: "Event",
    likes: 4,
    tags: ["news", "events"],
    date: Date()
  }
])

```

- to list all collections:
 `db.getCollectionNames()`
- to drop the database:
 `db.dropDatabase()`
