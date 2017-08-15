function say(word) {
  console.log(word);
console.log(__filename);
}

function execute(someFunction, value) {
  someFunction(value);
}

execute(say, "Hello");
