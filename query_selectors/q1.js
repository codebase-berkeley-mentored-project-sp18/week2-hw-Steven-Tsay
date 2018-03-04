/*
Question 1
================
Query Selectors

Implement the functionality of document.getElementsByClassName(str); that is,
construct a function that, when given a string class name, returns an array consisting
of all elements in the DOM tree that contain that class in their classname.

You can test your function by opening index.html in your browser and viewing the console output.
*/

function getElementsByClassName(strClassName) {
  //=====================
  var elements = [];

  helper(document.body , elements);
  return elements;
  function helper(node, listofclasses){
    if (node.getElementsByClassName == strClassName){
      elements.append(node);
    }
      document.write(node.hasChildNodes());
      if (node.hasChildNodes()) {


      var children = node.childNodes;

      for (var i = 0; i < children.length; i++) {
        helper(children[i], elements);

      }
    }


  }





  // YOUR CODE HERE
  //=====================

}







// ------TESTING----------
// Don't touch me.
function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  a = Array.from(a);
  b = Array.from(b);

  a.sort();
  b.sort();

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
function assert(statement, err) {
  if (!statement) {
    throw err;
  }
}
window.addEventListener("load", function() {
  console.log("Testing getElementsByClassName...");
  try {
    assert(arraysEqual(document.getElementsByClassName("link"), getElementsByClassName("link")), "FAILED link");
    assert(arraysEqual(document.getElementsByClassName("item"), getElementsByClassName("item")), "FAILED item");
    assert(arraysEqual(document.getElementsByClassName("herolink"), getElementsByClassName("herolink")), "FAILED herolink");
    assert(arraysEqual(document.getElementsByClassName("nonexistent"), getElementsByClassName("nonexistent")), "FAILED nonexistent class");
    console.log("All test cases passed!");
  } catch (e) {
    throw e;
  }
})
