var a =http.get('https://raw.githubusercontent.com/james-ng4321/test/refs/heads/master/mi5_11');
var b=a.body.string();
var c=b.split(',');

//home();
//sleep(1000);
///launchApp('WireGuard');
//sleep(6000);

home();
sleep(1100); 
launchApp('SmartPLAY');
sleep(8000);
//className("android.view.View").desc("歡迎來到SmartPLAY").waitFor();
className("android.widget.Button").desc("登入").findOne().click();
sleep(11000);
setClip(c[0]);
sleep(1500);
click(502,618);
sleep(1100);
click(125,1196);
sleep(1100);
setClip(c[1]);
sleep(1100); 
click(504,934);
sleep(1100);
click(125,1196);
sleep(1100);
click(497,770);
sleep(1100);

home();
sleep(1000);
launchApp('Auto Clicker');
sleep(4000);
//className("android.widget.TextView").text("Auto Clicker 🎯 (Free)").waitFor();
id("enable_multi_mode_button").findOne().click();
sleep(2000);
click(518,1077);
sleep(1000);

home();
sleep(2000); 
launchApp('SmartPLAY');

sleep(3000); 
let now = new Date();
let hour = now.getHours();
let min = now.getMinutes();
let sec = now.getSeconds();
let msUntilNextHour = ((60 - min - 1) * 60 * 1000) + (60 - sec) * 1000;
//let ms = ["15001","15001","15001","15002","15002","15002","15003","15003"];
//let ms = ["15001","15001","15001","15002","15002","15002","15003","15003"];
//let ms = ["4100","4200","4100","4200","4150","4250","4100","4200"];
let ms = ["2010","2020","2030","2010","2010","2020","2030","2010"];
//let ms = ["1400","1400","1400","1400","1450","1450","1400","1400"];
//let ms = ["3002","3002","3001","3001","3001","3002","3003","3003"];
//let ms = ["5100","5200","5300","5400","5150","5250","5350","5450"];
//let ms = ["3002","3002","3001","3001","3001","3002","3003","3003"];
//let ms = ["3000","3000","3001","3001","3001","3000","3000","3001"];
let ms1=Math.floor(Math.random() * 8);
let msUntilNextHour2= msUntilNextHour  - ms[ms1];

setTimeout(function() {
    click(63,627);
    sleep(30000);
    click(63,627);
   //book2();
}, msUntilNextHour2);


setTimeout(function() {
  click(250,1155);
}, msUntilNextHour);

function book2(){
  // sleep(1000);
  // className("android.widget.Button").desc("虛擬等候室").findOne();
  // sleep(1000);
  //  click(63,627);
    sleep(1000);
     className("android.view.View").desc("你的日程表").findOne();
     sleep(1000);
     click(372,1807);
     className("android.view.View").desc("最遠可預約的日期").findOne();
     sleep(1800);
         swipe(778,1685,778,1276,1000);
         sleep(500);
         click(778,1452);
         sleep(1100);
             if(!(className("android.view.View").desc("檢視並付款").exists())){
               click(702,1163); //  click(530,1165);
             sleep(200);
             if((!(className("android.view.View").desc("注視列表").exists()))&&(!(className("android.view.View").desc("檢視並付款").exists()))){
               sleep(1500);
               click(702,1163); //  click(530,1165);
               sleep(200);};
           swipe(885,1365,52,1385,1000);
           sleep(500);
           click(715,1458);
           sleep(1100);
             if(!(className("android.view.View").desc("檢視並付款").exists())){
               click(702,1163); //  click(530,1165);
             sleep(200);
             if((!(className("android.view.View").desc("注視列表").exists()))&&(!(className("android.view.View").desc("檢視並付款").exists()))){
               sleep(1500);
               click(702,1163); //  click(530,1165);
               sleep(200);};
           click(967,1458);
         }}
  }
