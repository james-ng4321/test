var a =http.get('https://raw.githubusercontent.com/james-ng4321/test/refs/heads/master/oppo2');
var b=a.body.string();
var c=b.split(',');

//home();
//sleep(1000);
//click('WireGuard');
//sleep(6000);

home();
sleep(1000); 
click('SmartPLAY');
sleep(6000);
className("android.widget.Button").desc("登入").findOne().click();
sleep(6000);
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

home();
sleep(1000);
click('Auto Clicker');
sleep(4000);
id("enable_multi_mode_button").findOne().click();
sleep(4000);
click(297,781);
sleep(1000);

home();
sleep(1000); 
click('SmartPLAY');

let now = new Date();
let hour = now.getHours();
let min = now.getMinutes();
let sec = now.getSeconds();
let msUntilNextHour = ((60 - min - 1) * 60 * 1000) + (60 - sec) * 1000;
//let ms = ["4100","4200","4300","4400","4150","4250","4350","4450"];
let ms = ["4100","4200","4300","4400","4150","4250","4350","4450"];
let ms1=Math.floor(Math.random() * 8);
let msUntilNextHour2= msUntilNextHour - ms[ms1];
setTimeout(function() {
  book();
}, msUntilNextHour2);

function book(){
  click(42,498);
    sleep(65000);
       click(42,498);
//   book2();
};

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
  }, 20);
  setTimeout(() => { clearInterval(myInterval); }, 50000);

  const myInterval2 = setInterval(function() {
    if(className("android.widget.Button").desc("超过99條通知 我的收件箱").exists()){
        book2();
    clearInterval(myInterval2);
    }
  }, 900);
}
  
function book3(){
  const myInterval3 = setInterval(function() {
if((className("android.widget.Button").desc("虛擬等候室").exists()) ){ 
  click(42,498);
  clearInterval(myInterval3);
        } 
    }, 50);

    const myInterval4 = setInterval(function() {
if(className("android.widget.Button").desc("超过99條通知 我的收件箱").exists()){
               book2();
                clearInterval(myInterval4);
              };
          }, 50);
  }

  function book2(){
   // sleep(1000);
   // className("android.widget.Button").desc("虛擬等候室").findOne();
   // sleep(1000);
   // click(42,498);
   sleep(1000);
    className("android.view.View").desc("你的日程表").findOne();
    sleep(1000);
      click(243,1339);
        className("android.view.View").desc("最遠可預約的日期").findOne();
        sleep(1800);
        click(476,1190);
        sleep(1500);
            if(!(className("android.view.View").desc("檢視並付款").exists())){
              click(475,828);// click(355,828);
              sleep(200);
              if((!(className("android.view.View").desc("注視列表").exists()))&&(!(className("android.view.View").desc("檢視並付款").exists()))){
                sleep(1100);
                click(475,828);// click(355,828);
                sleep(200);};
            swipe(666,1023,43,1023,1000);
            sleep(200);
            click(438,1190);
            sleep(1500);
            if(!(className("android.view.View").desc("檢視並付款").exists())){
              click(475,828);// click(355,828);
              sleep(200);
              if((!(className("android.view.View").desc("注視列表").exists()))&&(!(className("android.view.View").desc("檢視並付款").exists()))){
              sleep(1100);
              click(475,828);// click(355,828);
              sleep(200);};
            click(530,1190);
          }}
  }