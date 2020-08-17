// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  var output = '';
  var array = Array.isArray(obj);
  var object = typeof obj === 'object';



  if ( obj === true ) {
    return 'true';
  }

  if ( obj === false ) {
    return 'false';
  }

  if ( typeof obj === 'string' ) {
    return output += `"${obj}"`;
  }
  if ( typeof obj === 'number' ) {
    return output += obj;
  }

  if ( obj === null ) {
    return 'null';
  }


  if ( object ) {
    let keys = Object.keys(obj);
    let values = Object.values(obj);

    if (array && obj.length === 0) {
      output += '[]';
    }


    if ( array ) {
      output = '[';
    } else {
      output = '{';
    }

    for (let o = 0; o < values.length; o++ ) {
      let value = values[o];

      stringifyJSON(values[o]);

      if ( value === undefined || typeof value === 'function') {
        continue;
      }

      if ( !array ) {
        output += `${stringifyJSON( keys[o] )}:`;
      }

      output += `${stringifyJSON( value )}`;
      if ( o < keys.length - 1 ) {
        output += ',';
      }
    }

    if ( output[output.length - 1] === ',') {
      output = output.slice( 0, output.length - 1 );
    }

    if ( array ) {
      output += ']';
      return output;
    } else {
      output += '}';
    }

    return output;
  }

  return output;
};
