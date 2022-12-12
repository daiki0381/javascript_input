/*
  ・1つのインスタンスに対して、連続した処理を行う際は「チェーンメソッド」を使用する。
	・戻り値がインスタンス化した際に作成されたオブジェクトであれば「チェーンメソッド」を使用できる。
*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  hello(person) {
    //  インスタンス化した際に作成されたオブジェクトが「this」の参照先となる。
    console.log(`${this.name} says hello ${person.name}`);
    return this;
  }
  introduce() {
    //  インスタンス化した際に作成されたオブジェクトが「this」の参照先となる。
    console.log(`Hi, I'm ${this.name}, ${this.age} years old.`);
    return this;
  }
  shakeHands(person) {
    //  インスタンス化した際に作成されたオブジェクトが「this」の参照先となる。
    console.log(`${this.name} shake hands with ${person.name}.`);
    return this;
  }
  bye(person) {
    //  インスタンス化した際に作成されたオブジェクトが「this」の参照先となる。
    console.log(`Goodbye, ${person.name}.`);
  }
}

const bob = new Person('Bob', 23);
const tim = new Person('Tim', 33);

//  戻り値がインスタンス化した際に作成されたオブジェクトであれば「チェーンメソッド」を使用できる。
bob.hello(tim).introduce().shakeHands(tim).bye(tim);
