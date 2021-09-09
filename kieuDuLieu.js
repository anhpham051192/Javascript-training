/*
Kiểu dữ liệu trong Javascript

1. Dữ liệu nguyên thủy - Primitive Data
    - Number
    - String
    - Boolean
    - Underfined
    - Null
    - Symbol : 2015 JavaScript ES6

2. Dữ liệu phức tạp - Complex Data
    - Function
    - Object
*/
//Number type
var a = 1;
var b = 1.5;
//String type
var name = 'PHAM DUC ANH';
//Boolean
var isSuccess = true;
//Undefined type
var age;
//Null type
var isNull = null;
//Symbol type
var id = Symbol('id');//unique : Tính duy nhất
var id2 = Symbol('id');
console.log(id === id2);

//Function
//function tự định nghĩa , alert() là function built in được xây dựng sẵn
var myFunction = function(){
    alert('Hi.Xin chào các bạn!')
}
myFunction();

//Object types
var myObject = {
    name: 'Pham Duc Anh',
    age: 28,
    address: 'Japan'
};
console.log('myObject', myObject);
//Lấy từng dữ liệu riêng trong object
console.log('myName',myObject.name);
//Array
var myArray = [
    'Java',
    'JavaScript',
    'HTML5',
    'CSS3'
];
console.log(myArray);
console.log(myArray[1]);
//Kiểm tra là kiểu dữ liệu gì
console.log(typeof myFunction);