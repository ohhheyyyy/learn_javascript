var repeat = function(string, num) {
    var output = "";
    for (var i = 0; i < num; i++) {
        output += string;
    }
    return output;
};

console.log("this is the output: " + repeat("yo", 3));

var join = function(collection, delimiter) {
    // create empty string
    var output = "";
    // if collection is empty, return empty string
    if (collection.length === 0) {
        return output;
    }
    // loop over entire collection
    for (var i = 0; i < collection.length; i++) {
        // loop over every character in each item in collection
        for (var j = 0; j < collection[i].length; j++) {
            // add each character to the collection
            output += collection[i][j];
        }
        // if a delimiter is specified
        if (delimiter !== undefined) {
            // and i doesn't equal collection's length - 1
            if (i !== collection.length - 1) {
                // add delimiter to output
                output += delimiter;
            }
        }
    }
    return output;
};

console.log(join(['apple', 'banana', 'cherry'], '/'));

var sum = function(collection) {
    var tally = 0;
    for (var i = 0; i < collection.length; i++) {
        tally += collection[i];
    }
    return tally;
};

console.log(sum([1, 2, 3]));

var paramify = function(obj) {
    var containerArray = [];
    for (var key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            containerArray.push(key + "=" + obj[key]);
        } 
    }
    containerArray.sort();
    return join(containerArray, "&");
};

var factorial = function(num){
  if(num === 0 || num === 1){
    return 1;
  } else if (num < 0){
    return -1;
  } else {
    return num * factorial(num - 1);
  }

};
