var a =http.get('https://raw.githubusercontent.com/james-ng4321/test/refs/heads/master/mi5_7');
var b=a.body.string();
var c=b.split(',');

home();
sleep(1000);
launchApp('WireGuard');
//className("android.widget.TextView").text("WireGuard").waitFor()
sleep(6000);

home();
sleep(1000); 
launchApp('SmartPLAY');
sleep(6000);
//className("android.view.View").desc("歡迎來到SmartPLAY").waitFor();
className("android.widget.Button").desc("登入").findOne().click();
sleep(6000);
setClip(c[0]);
sleep(1000);
click(502,618);
sleep(1000);
click(125,1196);
sleep(2000);
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

home();
sleep(1000); 
launchApp('SmartPLAY');

sleep(3000); 
let now = new Date();
let hour = now.getHours();
let min = now.getMinutes();
let sec = now.getSeconds();
let msUntilNextHour = ((60 - min - 1) * 60 * 1000) + (60 - sec) * 1000;
let ms = ["14000","14500","13500","15000","15500","13000","12500","12000"];
let ms1=Math.floor(Math.random() * 8);
let msUntilNextHour2= msUntilNextHour - ms[ms1];
setTimeout(function() {
    click(63,627);
    book2();
}, msUntilNextHour2);


function book2(){
  var autoclick =0;
 setTimeout(function() {
   if(autoclick ==0){
     click(63,627);
     autoclick =1;};
   }, 40000);
// sleep(1000);
// className("android.widget.Button").desc("虛擬等候室").findOne();
// sleep(1000);
//  click(63,627);
   className("android.view.View").desc("你的日程表").findOne();
   sleep(1000);
   click(372,1807);
   className("android.view.View").desc("最遠可預約的日期").findOne();
   sleep(1000);
       swipe(891,1329,891,1029,500);
       sleep(100);
       click(786,1536);
       sleep(1100);
           if(!(className("android.view.View").desc("檢視並付款").exists())){
             click(702,1163); //  click(530,1165);
           sleep(100);
           if((!(className("android.view.View").desc("注視列表").exists()))&&(!(className("android.view.View").desc("檢視並付款").exists()))){
             sleep(1500);
             click(702,1163); //  click(530,1165);
             sleep(100);};
         swipe(1034,1184,164,1184,500);
         sleep(100);
         click(647,1528);
         sleep(1100);
           if(!(className("android.view.View").desc("檢視並付款").exists())){
             click(702,1163); //  click(530,1165);
           sleep(100);
           if((!(className("android.view.View").desc("注視列表").exists()))&&(!(className("android.view.View").desc("檢視並付款").exists()))){
             sleep(1500);
             click(702,1163); //  click(530,1165);
             sleep(100);};
         click(1004,1528);
       }}
}