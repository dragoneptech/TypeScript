var uname: string = "Runoob"; 
var score1: number = 50;
var score2: number = 42.50
var sum = score1 + score2 
console.log("名字: "+uname) 
console.log("第一个科目成绩: "+score1) 
console.log("第二个科目成绩: "+score2) 
console.log("总成绩: "+sum)

var str = '1';
var str2: number = <number> <any> str;   //str、str2 是 string 类型
console.log(str2);

var num = 2;    // 类型推断为 number
console.log("num 变量的值为 "+num); 
// num = "12";    // 编译错误
console.log(num);


var global_num = 12          // 全局变量
class Numbers { 
   num_val = 13;             // 实例变量
   static sval = 10;         // 静态变量
   
   storeNum():void { 
      var local_num = 14;    // 局部变量
      console.log("局部变量: " + local_num);
   } 
} 
console.log("全局变量为: "+global_num)  
console.log(Numbers.sval)   // 静态变量
var obj = new Numbers(); 
console.log("实例变量: "+obj.num_val)
obj.storeNum()