function Student(name) {
    this.name = name;
    this.hello = function () {
        console.log('Hello, ' + this.name + '!');
    }
}
var xiaoming = new Student('小明');
console.log(xiaoming.name); // '小明'
xiaoming.hello(); // Hello, 小明!
var add = function (x,y) {
    return x+y
}
console.log(add(1,2))