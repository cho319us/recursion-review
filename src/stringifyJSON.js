// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //if a number or boolean, return value w/out quotes
  if(typeof(obj)=== 'number' || typeof(obj)=== 'boolean') {
    return obj.toString();
  }
  //if string, include quotes ""
  if(typeof(obj)=== 'string') {
    return '"' + obj.toString() + '"';
  }
  //if null or NaN or Infinity, list as null
  if(obj=== NaN|| obj=== Infinity || obj=== null) {
    return "null";
  }
  //If undefined/function/symbol, skip
  if(typeof(obj)=== 'function' || obj=== undefined || typeof(obj)=== 'symbol') {
    return undefined;
  }
  //if array, iterate over array (recursion)
  if(Array.isArray(obj) === true){
    var result = [];
    for (var i = 0; i < obj.length; i++) {
      // check if current element is equal undefined/function/symbol, return null
      if(typeof(obj[i])=== 'function' || obj[i]=== undefined || typeof(obj[i])=== 'symbol') {
        result.push(null);
      } else {
        result.push(stringifyJSON(obj[i]));
      }
    }
    return "[" + result.join(',') + "]";
  // else if object
  } else if(typeof(obj) === 'object') {
    var objArray = [];
    for (var keys in obj){
      if(typeof(obj[keys])=== 'function' || obj[keys]=== undefined || typeof(obj[keys])=== 'symbol') {
        continue;
      }
      objArray.push('"'+keys.toString() + '"' + ':' + stringifyJSON(obj[keys]));
    }
    return '{'+objArray.join(',')+'}';


  }
};


/*
JSON.stringify({});                    // '{}'
JSON.stringify(true);                  // 'true'
JSON.stringify('foo');                 // '"foo"'
JSON.stringify([1, 'false', false]);   // '[1,"false",false]'
JSON.stringify([NaN, null, Infinity]); // '[null,null,null]'
JSON.stringify({ x: 5 });              // '{"x":5}'
*/

/*
* If the value has a toJSON() method, it's responsible to define what data will be serialized.
* Boolean, Number, and String objects are converted to the corresponding primitive values during stringification, in accord with the traditional conversion semantics.
* undefined, Functions, and Symbols are not valid JSON values. If any such values are encountered during conversion they are either omitted (when found in an object) or changed to null (when found in an array). JSON.stringify() can return undefined when passing in "pure" values like JSON.stringify(function(){}) or JSON.stringify(undefined).
* The numbers Infinity and NaN, as well as the value null, are all considered null.
*/

//create result string
//iterate over obj
//process value based on type
//if string, include quotes ""
//if null or NaN or Infinity, list as null
//If undefined in array return null or if in object skip
//if a boolean, return value w/out quotes
//if an object, iterate over object (recursion)
//if array, iterate over array (recursion)
//add to result string with a comma (,)

