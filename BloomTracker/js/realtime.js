$(document).ready(function () {
    let key = "4776b61c8c0511023d4948cf5d766248";
    let cordinate = [];
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position);
        cordinate[0] = position.coords.latitude;
        cordinate[1] = position.coords.longitude;
        //console.log(cordinate[0] +" "+cordinate[1]);
        let latitude = cordinate[0];
        let longtitude = cordinate[1];
        let connect = "http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longtitude+"&units=metric"+"&APPID="+key;
        $.ajax({
          url:connect,
          type:"GET",
          datatype:"jsonp",
          success:function (data) {
            //let widget = show(data);
            let month = new Date().getMonth()+1;
            let hum = data.main.humidity;
            let temp = (data.main.temp_min+data.main.temp_max)/2;
            console.log(hum+"\r\n"+temp+"\r\n"+month);
            let red = RedGumCalculation(month,temp,hum);
            let grey = GreyBoxCalculation(month,temp,hum);
            let yellow = YellowGumCalculation(month,temp,hum);
            let mess = Messmate(month,temp);
            let ybox = yellowBox(month,temp,hum);
            console.log("red"+red+", grey:"+grey+"yellow: "+yellow);
              let finalResult = "Red gum: " + red + "%  " + "&nbsp; Yellow gum: " + yellow + "%  " + "&nbsp; Grey box: " + grey + "%  " + "&nbsp; Messmate: " + mess + "%  " +"&nbsp; Yellow Box: "+ybox+"%";
            $("#weatherinfo").html(finalResult);
          }
        });
      })
    }

  });

  function show(data) {
    return "<h3><strong>Weather</strong>: "+data.weather[0].description +"</h3>"
  }
  function GreyBoxCalculation(month,temperature,humidity){
    let constant = -41.1166;
    let vT = 0.238816;
    let vM = 3.13709;
    let vH = 0.030019;
    let result;
    if(month>=1 && month<=4){
      let mid = constant+vT*temperature+(month+8)*vM+vH*humidity;
      result = (1/(1+Math.exp(-mid)))*100;
    }else if(month>=5 && month<=10){
      let mid = constant+vT*temperature+(16-month)*vM+vH*humidity;
      result = (1/(Math.exp(-mid)))*100;
    }else {
      let mid = constant+vT*temperature+(month-4)*vM+vH*humidity;
      result = (1/(Math.exp(-mid)))*100;
    }
    return result.toPrecision(3);
  }
  function YellowGumCalculation(month,temperature,humidity) {
    let constant = -15.38678;
    let vT = 0.35194;
    let vM = 0.82605;
    let vH = 0.05133;
    let result;
    if(month>=1 && month<=4){
      let mid = constant+vT*temperature+month*vM+vH*humidity;
      result = (1/(1+Math.exp(-mid)))*100;
    }else if(month>=5 && month<=12){
      let mid = constant+vT*temperature+(17-month)*vM+vH*humidity;
      result = (1/(1+Math.exp(-mid)))*100;
    }
    return result.toPrecision(3);
  }
  function RedGumCalculation(month,temperature,humidity) {
    let constant = -25.941623;
    let vT = 0.118353;
    let vM = 1.941184;
    let vH = 0.053391;
    let result;
    if(month>=1 && month<=5){
      let mid = constant+vT*temperature+(12-month*2)*vM+vH*humidity;
      result = (1/(1+Math.exp(-mid)))*100;
    }else if(month>=6 && month<=11){
      let mid = constant+vT*temperature+(2*month-11)*vM+vH*humidity;
      result = (1/(1+Math.exp(-mid)))*100;
    }else {
      let mid = constant+vT*temperature+(month)*vM+vH*humidity;
      result = (1/(1+Math.exp(-mid)))*100;
    }
    return result.toPrecision(3);
  }
  function Messmate(month,temperature){
    let constant = -12.202065;
    let vT = 0.243236;
    let vM = 0.654547;

    let result;
    if(month>=4 && month<=7){
      let mid = constant+vT*temperature+(13-2*month)*vM;
      result = (1/(1+Math.exp(-mid)))*100;
    }else if(month>=8 && month<=11){
      let mid = constant+vT*temperature+(2*month-14)*vM;
      result = (1/(1+Math.exp(-mid)))*100;
    }else if (month==2 && month==3){
      let mid = constant+vT*temperature+(month+7)*vM;
      result = (1/(1+Math.exp(-mid)))*100;
    }else {
      let mid = constant+vT*temperature+((133-month)/11)*vM;
      result = (1/(1+Math.exp(-mid)))*100;
    }
    return result.toPrecision(3);
  }
  function yellowBox(month,temperature,humidity){
    let constant = -23.153499;
    let vT = 0.256121;
    let vM = 1.092943;
    let vH = 0.134306;
    let result;
    if(month==1 || month==3){
      let mid = constant+vT*temperature+((3*month+13)/2)*vM+vH*humidity;
      result = (1/(1+Math.exp(-mid)))*100;
    }else if(month==2 || month==4 || month==5 || month==6){
      let mid = constant+vT*temperature+(13-2*month)*vM+vH*humidity;
      result = (1/(1+Math.exp(-mid)))*100;
    }else if (month==10){
      let mid = constant+vT*temperature+(month-3)*vM+vH*humidity;
      result = (1/(1+Math.exp(-mid)))*100;
    } else if (month==7 || month==8 || month==9 || month==11 || month==12){
      let mid = constant+vT*temperature+(2*month-12)*vM+vH*humidity;
      result = (1/(1+Math.exp(-mid)))*100;
    }
    return result.toPrecision(3);
  }

