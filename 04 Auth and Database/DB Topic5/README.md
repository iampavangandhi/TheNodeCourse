# MongoDB Limit and Join Keywords

### The Limit() Method
To limit the records in MongoDB, you need to use limit() method. The method accepts one number type argument, which is the number of documents that you want to be displayed.

Syntax: 
The basic syntax of limit() method is as follows −
```
>db.COLLECTION_NAME.find().limit(NUMBER)
```
### Example:
Consider the collection myycol has the following data.
```
{_id : ObjectId("507f191e810c19729de860e1"), title: "MongoDB Overview"},
{_id : ObjectId("507f191e810c19729de860e2"), title: "NoSQL Overview"},
{_id : ObjectId("507f191e810c19729de860e3"), title: "Syllabus"}
```
Following example will display only two documents while querying the document.
```
>db.mycol.find({},{"title":1,_id:0}).limit(2)
{"title":"MongoDB Overview"}
{"title":"NoSQL Overview"}
>
```
If you don't specify the number argument in limit() method then it will display all documents from the collection.

### Join Keywords
See youtube video [here](https://www.youtube.com/watch?v=6be6aEOHk3w).

