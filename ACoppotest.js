
    sleep(7200);
    book2();


function book(){
  click(42,498);
    sleep(7500);
    click(42,498);
   book2();
};

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
};
  
  function book2(){
   // sleep(1000);
   // className("android.widget.Button").desc("虛擬等候室").findOne();
   // sleep(1000);
   // click(42,498);
   //sleep(1000);
    className("android.view.View").desc("你的日程表").findOne();
    sleep(200);
      click(243,1339);
             sleep(200);
        className("android.view.View").desc("最遠可預約的日期").findOne();
     sleep(1500);
  //71
            swipe(666,1023,666,1230,1500);
              sleep(100);
   //71   
   click(476,1190);
        sleep(1500);
            if(!(className("android.view.View").desc("檢視並付款").exists())){
              click(475,828);// click(355,828);
              sleep(200);
              if((!(className("android.view.View").desc("注視列表").exists()))&&(!(className("android.view.View").desc("檢視並付款").exists()))){
                sleep(1100);
                click(475,828);// click(355,828);
                sleep(200); //}  else { sleep(1000);
                                      if((!(className("android.view.View").desc("注視列表").exists()))&&(!(className("android.view.View").desc("檢視並付款").exists()))){
                sleep(1100);
                click(475,828);// click(355,828);
                sleep(200);} }
            swipe(666,1023,73,1023,1200);
            sleep(500);
            click(438,1190);
            sleep(1500);
            if(!(className("android.view.View").desc("檢視並付款").exists())){
              click(475,828);// click(355,828);
              sleep(200);
              if((!(className("android.view.View").desc("注視列表").exists()))&&(!(className("android.view.View").desc("檢視並付款").exists()))){
              sleep(1100);
              click(475,828);// click(355,828);
              sleep(200); //} else { sleep(1000);
                                      if((!(className("android.view.View").desc("注視列表").exists()))&&(!(className("android.view.View").desc("檢視並付款").exists()))){
                sleep(1100);
                click(475,828);// click(355,828);
                sleep(200);} }
            click(530,1190);
          }}
  }
