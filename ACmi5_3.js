var a =http.get('https://raw.githubusercontent.com/james-ng4321/test/refs/heads/master/mi5_3');
var b=a.body.string();
var c=b.split(',');

//home();
//sleep(1000);
///launchApp('WireGuard');
//sleep(6000);

home();
sleep(1000); 
launchApp('SmartPLAY');
sleep(6000);
//className("android.view.View").desc("歡迎來到SmartPLAY").waitFor();
className("android.widget.Button").desc("登入").findOne().click();
sleep(8000);
setClip(c[0]);
sleep(1000);
click(502,618);
sleep(1000);
click(125,1196);
sleep(1000);
setClip(c[1]);
sleep(1000); 
click(504,934);
sleep(1000);
click(125,1196);
sleep(1000);
click(497,770);
sleep(1000);

home();
sleep(1000);
launchApp('Auto Clicker');
sleep(4000);
//className("android.widget.TextView").text("Auto Clicker 🎯 (Free)").waitFor();
id("enable_multi_mode_button").findOne().click();
sleep(2000);
click(518,1077);
sleep(1000);
click(76,1287);
sleep(1000);

home();
sleep(1000); 
launchApp('SmartPLAY');

sleep(8100);
click(555,1200);
sleep(4100); 
   click(1000,1500);

let now = new Date();
let hour = now.getHours();
let min = now.getMinutes();
let sec = now.getSeconds();
let msUntilNextHour = ((60 - min - 1) * 60 * 1000) + (60 - sec) * 1000 - 150;

//let ms = ["3910","3920","3930","3910","3910","3920","3930","3910"];
//let ms = ["2510","2520","2530","2510","2510","2500","2530","2510"];
//let ms = ["1910","1920","1930","1910","1910","1920","1930","1910"];
//let ms = ["2734","2745","2776","2778","2712","2779","2734","2712"];
let ms = ["2110","2120","2130","2110","2110","2120","2130","2110"];
//let ms = ["2010","2020","2030","2010","2010","2020","2030","2010"];
//let ms = ["3100","3200","3300","3400","3150","3250","3350","3450"];
//let ms = ["3002","3003","3004","3005","3006","3007","3003","3005"];
//let ms = ["4100","4200","4300","4400","4150","4250","4350","4450"];
let ms1=Math.floor(Math.random() * 8);
let msUntilNextHour2= msUntilNextHour  - ms[ms1];

// 1. Define the task to be repeated
function myScript() {
  click(555,1200);
    sleep(100);
   click(1000,1500);
    // Add your code here
}

// 2. Start the interval (e.g., every 1000ms = 1s)
const intervalId = setInterval(myScript, 100);

// 3. Stop the interval after 8 seconds (8000ms)
setTimeout(() => {
    clearInterval(intervalId);
}, 8000);


setTimeout(function() {
 //   click(63,627);
    sleep(8000);
 //   click(63,627);
    sleep(200);
 //   book2();
}, msUntilNextHour2);

setTimeout(function() {
const startTime = Date.now();
const interval = setInterval(() => {
  click(555,1200);
    sleep(60);
   click(1000,1500);
  if (Date.now() - startTime >= 8000) { // 8 seconds
    clearInterval(interval);
 //   console.log("Stopped after 10 seconds");
  }
}, 80); // runs every 80 ms
}, msUntilNextHour2);

setTimeout(function() {
  click(250,1155);
}, msUntilNextHour);

function book2(){
  // sleep(1000);
  // className("android.widget.Button").desc("虛擬等候室").findOne();
  // sleep(1000);
  //  click(63,627);
   //  sleep(1200);
     className("android.view.View").desc("你的日程表").findOne();
    sleep(200);
     //sleep(1000);
     click(372,1807);
         sleep(200);
     className("android.view.View").desc("最遠可預約的日期").findOne();
     sleep(1200);
         swipe(778,1685,778,1276,1100);
         sleep(200);
         click(778,1452);
         sleep(1200);
             if(!(className("android.view.View").desc("檢視並付款").exists())){
               click(702,1163); //  click(530,1165);
             sleep(200);
             if((!(className("android.view.View").desc("注視列表").exists()))&&(!(className("android.view.View").desc("檢視並付款").exists()))){
               sleep(1000);
               click(702,1163); //  click(530,1165);
               sleep(200);} else { sleep(1000);
             if((!(className("android.view.View").desc("注視列表").exists()))&&(!(className("android.view.View").desc("檢視並付款").exists()))){
               sleep(1000);
               click(702,1163); //  click(530,1165);
               sleep(200);}}  
           swipe(885,1365,52,1385,1100);
         sleep(200);
           click(715,1458);
           sleep(1100);
             if(!(className("android.view.View").desc("檢視並付款").exists())){
               click(702,1163); //  click(530,1165);
             sleep(200);
             if((!(className("android.view.View").desc("注視列表").exists()))&&(!(className("android.view.View").desc("檢視並付款").exists()))){
               sleep(1100);
               click(702,1163); //  click(530,1165);
               sleep(200);} else { sleep(1000);
             if((!(className("android.view.View").desc("注視列表").exists()))&&(!(className("android.view.View").desc("檢視並付款").exists()))){
               sleep(1000);
               click(702,1163); //  click(530,1165);
               sleep(200);}}      
           click(967,1458);
         }}
  }
