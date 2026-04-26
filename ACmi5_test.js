
home();
sleep(1000); 
launchApp('SmartPLAY');

    sleep(2000);
    book2();


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
     sleep(1500);
         swipe(778,1685,778,1550,1000);
         sleep(200);
         click(778,1452);
         sleep(1200);
             if(!(className("android.view.View").desc("檢視並付款").exists())){
               click(702,1163); //  click(530,1165);
             sleep(200);
             if((!(className("android.view.View").desc("注視列表").exists()))&&(!(className("android.view.View").desc("檢視並付款").exists()))){
               sleep(1000);
               click(702,1163); //  click(530,1165);
               sleep(200);  //} else { sleep(1000);
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
               sleep(200);//} else { sleep(1000);
             if((!(className("android.view.View").desc("注視列表").exists()))&&(!(className("android.view.View").desc("檢視並付款").exists()))){
               sleep(1000);
               click(702,1163); //  click(530,1165);
               sleep(200);}}      
           click(967,1458);
         }}
  }
