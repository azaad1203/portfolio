  function storeM() {
    let value = document.getElementById("chooseMonth").value;
    return value;
  }
  function storeL() {
    let value = document.getElementById("chooseLocation").value;
    return value;
  }
  let url = 'http://35.189.45.139/api/TempHums';
  let flowerRequest = new XMLHttpRequest();
  flowerRequest.open("GET",url,true);
  flowerRequest.send();
  function getData(){//This function calculate the results based on the selected month and location
    let chooseL = storeL();
    let chooseM = storeM();
    let select;
    if(flowerRequest.status==200 && flowerRequest.readyState==4){
      let tempH = JSON.parse(flowerRequest.responseText);
      for(let index=0;index<tempH.length;index++){
        if(tempH[index].Month == chooseM && tempH[index].SiteID==chooseL){
          select = tempH[index];
        }
      }
    }
    if (select!=null){
      return select;
    }
  }

  function report() {
    let data = getData();
    //console.log(data.Month +","+data.Humidity+","+data.Temperature+","+data.SiteID);
    let eqVariable = {
      constant:-41.1166,
      vxtemp:0.238816,
      vymonth:3.13709,
      vzhumid:0.030019
    };
    let constant = -41.1166;
    let vx = 0.238816;
    let vy = 3.13709;
      let vz = 0.030019;
      var resSite = "";
      var resMonth = "";
      var resPredic = "";
    if(data.Month>=1 && data.Month<=4) {
      //console.log(data.Month +","+data.Humidity+","+data.Temperature+","+data.SiteID);
      let mid = constant+vx*data.Temperature+vy*(data.Month+8)+vz*data.Humidity;
      let result = (1/(1+Math.exp(-mid)))*100;
        console.log(result.toPrecision(3) + "%");
        resSite += data.SiteID;
        resMonth += storeM();
        resPredic += result.toPrecision(3) + "%";
        document.getElementById("ResultSite").innerText = resSite;
        document.getElementById("ResultMonth").innerText = resMonth;
        document.getElementById("ResultPredic").innerText = resPredic;
      // document.getElementById("FlowerResult").innerText=data.SiteID+ ": "+"Selected Month: "+storeM()+ "Probability of flower:"+result.toPrecision(3)+"%";
    }else if(data.Month>=5 && data.Month<=10){
      //console.log(data.Month +","+data.Humidity+","+data.Temperature+","+data.SiteID);
      let mid = constant+vx*data.Temperature+vy*(16-data.Month)+vz*data.Humidity;
      let result = (1/(Math.exp(-mid)))*100;
        console.log(result.toPrecision(3) + "%");
        resSite += data.SiteID;
        resMonth += storeM();
        resPredic += result.toPrecision(3) + "%";
        document.getElementById("ResultSite").innerText = resSite;
        document.getElementById("ResultMonth").innerText = resMonth;
        document.getElementById("ResultPredic").innerText = resPredic;
      // document.getElementById("FlowerResult").innerText=data.SiteID+ ": "+"Selected Month: "+storeM()+ "Probability of flower:"+result.toPrecision(3)+"%";
    }else{
      //console.log(data.Month +","+data.Humidity+","+data.Temperature+","+data.SiteID);
      let mid = constant+vx*data.Temperature+vy*(data.Month-4)+vz*data.Humidity;
      let result = (1/(Math.exp(-mid)))*100;
        console.log(result.toPrecision(3) + "%");
        resSite += data.SiteID;
        resMonth += storeM();
        resPredic += result.toPrecision(3) + "%";
        document.getElementById("ResultSite").innerText = resSite;
        document.getElementById("ResultMonth").innerText = resMonth;
        document.getElementById("ResultPredic").innerText = resPredic;
      // document.getElementById("FlowerResult").innerText=data.SiteID+ ": "+"Selected Month: "+storeM()+ "Probability of flower:"+result.toPrecision(3)+"%";
    }

  }

  function drawBar() {
    let idName = {
      90171:'Cashmore Airport',90194:'Dartmoor',86375:'Cranbourne',86338:'Olympic Park',83083:'Eddi Upper',
      84145:'Orbost',90176:'Mortlake',83024:'Mount Buller',80128:'Charlton',76064:'Walpeup',79028:'Longerenong'
    };
    //Compare the probability in this month with other locations
    //Try to draw in a new connection
    let thisMonth = storeM();
    let xLocation = [];
    let probabilityList =[];
    let newbarData = JSON.parse(flowerRequest.responseText);
    for (let l=0;l<newbarData.length;l++){
      if(newbarData[l].Month == thisMonth){
        let temp = equationF1(newbarData[l].Month,newbarData[l].Temperature,newbarData[l].Humidity);
        if(probabilityList==null){
          probabilityList[0]=temp;
          xLocation[0] = idName[newbarData[l].SiteID];
        }else {
          probabilityList[probabilityList.length]=temp;
          xLocation[xLocation.length] = idName[newbarData[l].SiteID];
        }
      }
    }
    var data = {
      labels:xLocation,
      series:probabilityList
    };
    var options = {
      distributeSeries: true,
      width: 750,
      height: 350
    };
    new Chartist.Bar('#chart2',data,options);
  }

  function dataforLine() {
    //compare the probability with other months at current location
    let thisLocation = storeL();
    let collection = [];
    let xMonth = [];
    let lineData = JSON.parse(flowerRequest.responseText);
    for(let i=0;i<lineData.length;i++){
      if(lineData[i].SiteID == thisLocation){
        let temp = equationF1(lineData[i].Month,lineData[i].Temperature,lineData[i].Humidity);
        if (collection == null){
          collection[0] = temp;
          xMonth[0] = lineData[i].Month;
        }else {
          collection[collection.length]=temp;
          xMonth[xMonth.length] = lineData[i].Month;
        }
      }
    }
      //Data is in collection now, draw the linechart using chartist.
    var data = {
      labels:xMonth,
      series:[collection]
    };
    var options = {
      width: 500,
      height: 300,
      showArea:true
    };
    new Chartist.Line('#chart1',data,options);
  }

  function equationF1(month,temperature,humidity) {
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
      result = (1/(1+Math.exp(-mid)))*100;
    }else {
      let mid = constant+vT*temperature+(month-4)*vM+vH*humidity;
      result = (1/(1+Math.exp(-mid)))*100;
    }
    return result;
  }

  function dataForPie() {
    let monthtoString = {
      1: 'January',
      2: 'February',
      3: 'March',
      4: 'April',
      5: 'May',
      6: 'June',
      7: 'July',
      8: 'August',
      9: 'September',
      10: 'October',
      11: 'November',
      12: 'December'
    };
    let pieData = JSON.parse(flowerRequest.responseText);
    let pdata = [];
    let monthList = [];
    for (let i = 0; i < pieData.length; i++) {
      if (pieData[i].SiteID == storeL()) {
        //The data for all months at this location is collected now
        let temp = equationF1(pieData[i].Month, pieData[i].Temperature, pieData[i].Humidity);
        if (pdata == null) {
          pdata[0] = temp;
          monthList[0] = monthtoString[pieData[i].Month];
        } else {
          pdata[pdata.length] = temp;
          monthList[monthList.length] = monthtoString[pieData[i].Month];
        }
      }
    }
    var ctx = document.getElementById("chart3").getContext('2d');
    var myPie = new Chart(ctx,{
      type:'pie',
      data:{
        labels:monthList,
        datasets:[{
          label:'points',
          backgroundColor:['#f1c40f','#e67e22','#16a085','#2980b9','#00ff00','#104E8B','#484d46','#4d4dff','#5e2d79','#660000','#777733'],
          data:pdata,
        }]
      },
      options:{
        height:50,
        width:50,
        responsive:true,
        maintainAspectRatio:false,
        animation:{
          animateScale:true,
          animateRotate:true
        },
        title:{
          display:true,
          text:"Compare monthly probability"
        }
      }
    });
  }