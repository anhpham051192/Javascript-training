/**I. Toán tử số học 
 +          --> Cộng
 -          --> Trừ
 *          --> Nhân
 **         --> Lũy thừa
 /          --> Chia
 %          --> Chia lấy số dư
 ++         --> Tăng 1 giá trị số
 --         --> Giảm 1 giá trị số
 */

 var a = 8;
//  a++;
// a--;
//   console.log(a)
 var b = 3;

//  var c = a + b;
//  var c = b - a;
//  var c = a * b;
//  var c = a / b;
 var c = a % b;
 console.log(c);
/**
 *  II.Toán tử gán
 * 
Toán tử     Ví dụ           Tương đương
=           x = y           x = y
+=          x += y          x = x + y
-=          x -= y          x = x - y
*=          x *= y          x = x * y
/=          x /= y          x = x / y
**=         x **= y         x = x ** y

*/
var x = 1;
x /= 2;
console.log('x = ' + x)
/**
 * III.Toán tử chuỗi - String operator
*/
var firstName = 'Duc Anh';
var lastName = "Pham";
console.log(lastName +' '+ firstName)