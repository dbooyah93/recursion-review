// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:



// get elements by class name should return an array
// recursion starts by being called on the document.body
var getElementsByClassName = function(className) {
  // declare variables

  let result = [];
  let body = document.body;

  // work on the dom
  let search = function(node) {
    let children = node.childNodes; // if node has more nodes contained <node>
    // this is the stop and push
    if ( node.classList.contains(className) ) { // if <node class = 'className multipule '>
      result.push(node);
    }
    // this is the recursion
    if ( children ) {
      children.forEach( element => search(element));
    }
    // collection.forEach starts
    // if (stop) { result.push }
    // if (childNodes > 0) { collection.forEach recursion }
  };



  // [some, thing, here]
  // classList.forEach(function( some ) { className === some return tag })
  // if childNodes.length > 0 { recursion }





  search(body);
  return result;
};
