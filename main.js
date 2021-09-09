// 変数宣言
var fullName = 'Pham Duc Anh';
var katakana_Name ='ファン　ドゥックアン';
var age = 28;
var isSuccess = true;
/*
I.Giới thiệu một số function built-in
    1.Alert
    2.Console:log,warn,error
    3.Confirm
    4.Prompt
    5.Set timeout
    6.Set interval
 */
// alert(fullName + " " +age +"歳");
// console.log(fullName)
// console.log(isSuccess)
// confirm('年齢確認')
// prompt('年齢確認')
//Sau 1 khoảng thời gian(1000ms=1 giây )sẽ hiện thông báo
// setTimeout(function () {
//     alert('Thong bao')
// }, 1000)
//Chạy 1 đoạn code sau 1 khoảng thời gian và nó sẽ lặp đi lặp lại
// setInterval(function () {
//     console.log('Day la log '+ Math.random())
// }, 1000)

/*
II.Giới thiệu về toán tử trong Javascript
    1.Toán tử số học - Arithmetic
    2.Toán tử gán - Asignment
    3.Toán tử so sánh - Comparison
    4.Toán tử logic - Logical
*/
var a = 1;
console.log(a)
var b = 2
if (a < b ){
    alert('正しい')
}
else  {
    alert('正しくない')
}
if (a >0 && b >0 ) {
    console.log('a & b > 0')
}