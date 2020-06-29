// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  //define the body
  var htmlBody = document.body;
  //define a result array
  var result = [];
  //create a recursion function
  var classFound = function(doc) {
    // check if the current element has class, and the class name is matching our input className
    if(doc.classList && doc.classList.contains(className)) {
      //push it to our defined array
      result.push(doc);
    }
    // check if the current element has child nodes, and iterate the child nodes
    if(doc.HasChildNodes) {
      for(var i=0; i < doc.childNodes[i]; i++) {
        // call recursion function with input current child node
        classFound(doc.childNodes[i]);
      }
    }
  };
  //call recursion function with input body document
  classFound(htmlBody);
  //return the result!!
  return result;
};

