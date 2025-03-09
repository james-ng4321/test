var a =http.get('https://raw.githubusercontent.com/james-ng4321/test/refs/heads/master/mi5_1');
var b=a.body.string();
var c=b.split(',');

home();
sleep(1000);
launchApp('WireGuard');
className("android.widget.TextView").text("WireGuard").waitFor()
sleep(3500);

home();
sleep(1000); 
launchApp('SmartPLAY');
className("android.view.View").desc("歡迎來到SmartPLAY").waitFor();
className("android.widget.Button").desc("登入").findOne().click();
sleep(2000);
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
className("android.widget.TextView").text("Auto Clicker 🎯 (Free)").waitFor();
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
    setTimeout(function() {
        click(63,627);
        }, 60000);
}, msUntilNextHour2);