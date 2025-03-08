var a =http.get('https://raw.githubusercontent.com/james-ng4321/test/refs/heads/master/oppo1');
var b=a.body.string();
var c=b.split(',');

home();
sleep(1000);
click('WireGuard');
sleep(1000);

home();
sleep(1000); 
click('SmartPLAY');
sleep(2000);
className("android.widget.Button").desc("登入").findOne().click();
sleep(2000);
setClip(c[0]);
sleep(1000);
click(325,405);
sleep(1000);
click(86,911);
sleep(1000);
setClip(c[1]);
sleep(1000);
click(350,609);
sleep(1000);
click(86,911);
sleep(1000);
click(346,506);
sleep(1000);

let now = new Date();
let hour = now.getHours();
let min = now.getMinutes();
let sec = now.getSeconds();
let msUntilNextHour = ((60 - min - 1) * 60 * 1000) + (60 - sec) * 1000;
let ms = ["1500","1100","1050","1500","1000","1500","1001","2000"];
let ms1=Math.floor(Math.random() * 8);
let msUntilNextHour2= msUntilNextHour - 50;
setTimeout(function() {
book1();
}, msUntilNextHour2);

function book1(){
const myInterval = setInterval(function() {
        if(className("android.view.View").desc("我的收件箱").exists()){
          click(45,90);
          } else if(!(className("android.widget.Button").desc("智方便登入").exists()) && !(className("android.widget.Button").desc("超过99條通知 我的收件箱").exists())) {
          className("android.widget.Button").findOne().click();
      } else if(className("android.widget.Button").desc("智方便登入").exists() && !(className("android.widget.Button").desc("超过99條通知 我的收件箱").exists())){
      click(365,731);
      } else if((className("android.widget.Button").desc("虛擬等候室").exists()) || (className("android.widget.Button").desc("超过99條通知 我的收件箱").exists())){ 
          clearInterval(myInterval);
      }
  }, 40);
  setTimeout(() => { clearInterval(myInterval); }, 30000);

  const myInterval2 = setInterval(function() {
    if(className("android.widget.Button").desc("超过99條通知 我的收件箱").exists()){
        book2();
    clearInterval(myInterval2);
    }
    }, 500);
}
  
  function book2(){
   if(className("android.widget.Button").desc("超过99條通知 我的收件箱").exists()){
          click(243,1339);
            sleep(2100);
            click(624,1184);
            sleep(900);
            if(!(className("android.view.View").desc("檢視並付款").exists())){
              click(355,828);
              sleep(100);
              if (!(className("android.widget.Button").desc("超过99條通知 我的收件箱").exists())){sleep(1100);};
            click(355,828);
            sleep(500);
            swipe(666,1023,43,1023,500);
            click(438,1190);
            sleep(900);
            if(!(className("android.view.View").desc("檢視並付款").exists())){
              click(355,828);
              sleep(100);
              if (!(className("android.widget.Button").desc("超过99條通知 我的收件箱").exists())){sleep(1100);};
            click(355,828);
            sleep(500);
            click(630,1190);
          }}
        }
  } 
