// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {

  let result = [];
  let body = document.body;

  let search = function(node) {

    let children = node.childNodes;
    if ( node.classList && node.classList.contains(className) ) {
      result.push(node);
    }
    if ( children ) {
      children.forEach( element => search(element));
    }

  };

  search(body);
  return result;
};
