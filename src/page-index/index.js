require("normalize.css/normalize.css");
require("./index.css");

class Foo {
  constructor() {
    this.value = "gizay eroglu";
  }

  static instance() {
    return new Foo();
  }

  getValue() {
    return this.value;
  }
}

console.log(Foo.instance().getValue());
