# Database Queries (Find, Sort, Delete, Update, etc)

## Resource: [link](https://mongoosejs.com/docs/api/query.html)
## Youtube Resource: [link](https://www.youtube.com/watch?v=4yqu8YF29cU)


### Find
We need to call find() methods with Model Instances unlike save(), means like userModel.find() is valid.

Syntax:- find(conditions, [projection], [options], [callback])

```
var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var con ;
var userSchema= new Schema({
  userid: {type:String, required:true, trim:true,index:true,unique:true},
  chips: {type:Number}
});

var userModel = mongoose.model('users',userSchema);
var alex = new userModel({userid:'Alex',chips:10000,regdate:Date.now});
var mark = new userModel({userid:'Mark',chips:15000,regdate:Date.now});

var cb = function(err){
  if(!err){
    console.log("connection opened \t"+con.readyState);
  }else{
    console.log(err);
  }
};

mongoose.connect("mongodb://localhost/tutorialtous",cb);
con = mongoose.connection;
 
var echoRecords =function(err,log){
  console.log("Total Records Found:"+log.length);
  for(var i=0;i<log.length;i++){
    console.log((i+1)+"\t"+log[i]._id+"\t"+log[i].userid+"\t"+log[i].chips);
  }
};

var saveResponse =function(err){
  if(err){
  console.log("save Failed");
  }else{
  console.log("save success");
  }
};

alex.save(saveResponse);
mark.save(saveResponse);

userModel.find(echoRecords);
userModel.find({userid:"Alex"},echoRecords);
userModel.find({userid:"Alex"},{_id:0},echoRecords);
```
### Update
Updates documents in the database without returning them.
Syntax:-
   update(conditions, doc, [options], [callback])
```
userModel.update({userid:"Alex"},{chips:25000},function(err,log){
console.log("Number of Records Effected"+log);
});

userModel.update({chips:{$lt:20000}},{chips:35000},{multi:true},function(err,log){
console.log("Number of Records Effected"+log);
});
```
It will returns number of documents updated count.

### Remove
Removes document/s from the collection.

Syntax:-
   <code>remove(conditions, [callback])</code>
*Note: If condition not passed or empty then all the records will be removed.*


Remove the document having userid "Alex"
```
userModel.remove({userid:"Alex"})
```
Remove all documents of users collection
```
userModel.remove()
```
###  findByIdAndUpdate()
Finds a matching document, updates it according to the update arg, passing any options, and returns the found document (if any) to the callback. The query executes immediately if callback is passed else a Query object is returned.

Syntax:-
   <code>findByIdAndUpdate(id, [update], [options], [callback])</code>

Reset the chips for the id "5797137d0856a7c41299e099"
```
userModel.findByIdAndRemove("5797137d0856a7c41299e099",
{chips:0},function(err,data){if(!err) console.log(data);});
```
### Sort
To sort documents in MongoDB, you need to use sort() method. The method accepts a document containing a list of fields along with their sorting order. To specify sorting order 1 and -1 are used. 1 is used for ascending order while -1 is used for descending order.

Syntax: <code>db.COLLECTION_NAME.find().sort({KEY:1})</code>

Example
Consider the collection myycol has the following data.
```
{_id : ObjectId("507f191e810c19729de860e1"), title: "MongoDB Overview"}
{_id : ObjectId("507f191e810c19729de860e2"), title: "NoSQL Overview"}
{_id : ObjectId("507f191e810c19729de860e3"), title: "Syllabus"}
```

Following example will display the documents sorted by title in the descending order.
```
>db.mycol.find({},{"title":1,_id:0}).sort({"title":-1})
{"title":"Syllabus"}
{"title":"NoSQL Overview"}
{"title":"MongoDB Overview"}
>
```
Please note, if you don't specify the sorting preference, then sort() method will display the documents in ascending order.

