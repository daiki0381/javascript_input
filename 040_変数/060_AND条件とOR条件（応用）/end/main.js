function hello(name) {
  name = name || 'Tom';
  console.log('Hello ' + name);
}

hello()

let name;

name && hello(name);
