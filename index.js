function linkedList() {
  let list = { value: null, nextNode: null };

  function append(value) {
    if (list.value === null) {
      list.value = value;
    } else {
      function addToEnd(currentList) {
        if (currentList.nextNode) {
          addToEnd(currentList.nextNode);
        } else {
          currentList.nextNode = node(value);
        }
      }
      addToEnd(list);
    }
  }

  function prepend(value) {
    const currentNode = node(list.value, list.nextNode);

    if (list.value === null) {
      list.value = value;
    } else {
      list.value = value;
      list.nextNode = currentNode;
    }
  }

  function size(currentList = list) {
    if (currentList.nextNode) {
      return 1 + size(currentList.nextNode);
    } else {
      return 1;
    }
  }

  function head() {
    return ({ value, nextNode } = list);
  }

  function tail(currentList = list) {
    if (currentList.nextNode) {
      return tail(currentList.nextNode);
    } else {
      return currentList;
    }
  }

  function at(index) {
    if (index < 0 || index >= size()) {
      throw new Error("Index out of bounds");
    }

    function getNode(currentList, currentIndex) {
      if (currentIndex === index) {
        return currentList;
      } else {
        return getNode(currentList.nextNode, currentIndex + 1);
      }
    }

    return getNode(list, 0);
  }

  function pop() {
    const lastButOne = at(size() - 2);
    return (lastButOne.nextNode = null);
  }

  function contains(value) {
    function getNode(currentList, currentValue) {
      if (currentValue === currentList.value) {
        return true;
      } else if (currentList.nextNode === null) {
        return false;
      } else {
        return getNode(currentList.nextNode, currentValue);
      }
    }

    return getNode(list, value);
  }

  function find(value) {
    function getNode(currentList, currentValue, currentIndex) {
      if (currentValue === currentList.value) {
        return currentIndex;
      } else if (currentList.nextNode === null) {
        return null;
      } else {
        return getNode(currentList.nextNode, currentValue, currentIndex + 1);
      }
    }

    return getNode(list, value, 0);
  }

  function toString(currentList) {
    let output = `(${currentList.value})`;
    if (currentList.nextNode) {
      return (output += `-> ${toString(currentList.nextNode)}`);
    } else {
      return (output += `-> (null)`);
    }
  }

  return {
    list,
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
  };
}

function node(value = null, nextNode = null) {
  return { value, nextNode };
}

const myList = linkedList();
myList.append("1"); // add 1 to the end of the list
myList.append("2"); // add 2 to the end of the list
myList.append("3"); // add 3 to the end of the list
myList.prepend("0"); // add 0 to the start of the list
console.log(myList.size()); // log the size of the list
console.log(myList.head()); // log the first element in the list
console.log(myList.tail()); // log the last element in the list
console.log(myList.at(2)); // log the element at index 2 (starting from 0)
console.log(myList.pop()); // remove the last element in the list
console.log(myList.contains("1")); // check if the value exists in the list;
console.log(myList.find("2")); // returns the index of the node containing value, or null if not found.
console.log(myList.toString(myList.list)); // prints the list in the console
console.log(myList.list);
