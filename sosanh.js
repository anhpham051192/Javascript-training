/**Toán tử so sánh
 ==         --> Bằng
 !=         --> Không bằng
 >          --> Lớn hơn 
 <          --> Nhỏ hơn
 >=         --> Lớn hơn hoặc bằng
 <=         -->Nhỏ hơn hoặc bằng

 */
var a = 1 ;
var b = 2 ;

if(a <= b) {
    console.log('Điều kiện 1 Đúng');
}else {
    console.log('Điều kiện 1 Sai');
}
var name1 = 'PHAM DUC ANH';
var name2 = 'NGOC NA';

if(name1 != name2) {
    console.log('Điều kiện 2 Đúng');
}else {
    console.log('Điều kiện 2 Sai');
}
/**Toán tử logic
 &&     And
 ||     Or
 !      Not
 */
var a = 1;
var b = 2;
var c = 3;
if (a > 0 && b > 0 && c > 0) {
    console.log('Điều kiện 3 đúng');
}
if (a > 0 || b < 0 || c >0 ){
    console.log('Điều kiện 4 đúng')
}
// !(a < 0 ) = !(1 < 0 ) = !false = true
if (!(a < 0)) {
    console.log('Điều kiện 5 đúng')
}