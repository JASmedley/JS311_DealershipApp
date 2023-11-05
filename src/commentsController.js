//To get started, create a database of the comments by linking to the "comments.js" file
let db = require("../data/comments")

//A.  Return all comments
let getComments = function(req,res){
  // literally just return the comments in the database.
  // you could just put "require('../data/comments)" here, but since we need to use that for items B and C, it's easier to just store it in a variable to be used later and then reference it here.
  res.json(db);
};

//B. Return a comment with a matching ID 
let getComment = function(req,res){
  //1. create a variable for the id you're requesting
  let id = req.params.id;
  //2. create an empty variable to identify found (matching) queries 
  let found;
  //3. loop throught the database
  for(let i=0;i<db.length;i++){
    //4. to find a query (item) with a matching id
      let item = db[i];
      //5. and if the ID matches, 
      if(item._id == id){
        //6. mark it as found 
          found = item;
      }
  }
  //7. and then make sure that you return that it's found
  res.json(found)
};

//C. Add a comment 
let addComment = function(req,res){
  //storing the "body" from comments.js in a variable called "comment"
  // (the body of the comment, the primary text)
  let comment = req.body;
  // creating a variable called "next" that is equivalent to the length of the database +1 
  //this is going to be used to update the id, so since you're adding a comment, if you already have 4 comments
  // then this ensures that the id is 4 + 1, so 5, the fifth comment
  let next = db.length+1;
  //here you could put req.body._id, but since you'll be reusing req.body we are just appending comment
  //what this is doing is literally setting the id in the body as the "next" variable, which i just explained
  comment._id= next;
  //this is then setting the postId to 1 
  comment.postId = 1; 
  //so then add the comment 
  db.push(comment);
  //and then return the comment 
  res.json(comment);
};

module.exports = {
  getComments,
  getComment,
  addComment
}