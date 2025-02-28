var a =http.get('https://raw.githubusercontent.com/james-ng4321/test/refs/heads/master/oppo2');
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

home();
sleep(1000);
click('Auto Clicker');
sleep(2000);
id("enable_multi_mode_button").findOne().click();
sleep(1000);
click(297,781);
sleep(1000);

home();
sleep(1000); 
click('SmartPLAY');

sleep(3000); 
let now = new Date();
let hour = now.getHours();
let min = now.getMinutes();
let sec = now.getSeconds();
let msUntilNextHour = ((60 - min - 1) * 60 * 1000) + (60 - sec) * 1000;
let ms = ["1400","1100","1600","1900","2000","1500","1000","1200"];
let ms1=Math.floor(Math.random() * 8);
let msUntilNextHour2= msUntilNextHour - ms[ms1];
setTimeout(function() {
    click(42,498);
        setTimeout(function() {
        click(42,498);
        }, 40000);
}, msUntilNextHour2);
