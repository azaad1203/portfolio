let url = 'http://35.189.40.102/api/TempHums';
        let newRequest = new XMLHttpRequest();
        newRequest.open("GET", url, true);
        newRequest.send();
        function flowers() {

            if (newRequest.readyState == 4 && newRequest.status == 200) {
                let jsondata = JSON.parse(newRequest.responseText);
                let calculationLists = [];
                for (let i = 0; i < jsondata.length; i++) {
                    let greyb = GreyBoxCalculation(jsondata[i].Month, jsondata[i].Temperature, jsondata[i].Humidity);
                    let red = RedGumCalculation(jsondata[i].Month, jsondata[i].Temperature, jsondata[i].Humidity);
                    let yellow = YellowGumCalculation(jsondata[i].Month, jsondata[i].Temperature, jsondata[i].Humidity);
                    if (i == 0) {
                        //This means the calculationList is empty now
                        calculationLists[i] = { location: idName[jsondata[i].SiteID], month: jsondata[i].Month, flowername: "Grey Box", value: greyb };
                        calculationLists[i + 1] = { location: idName[jsondata[i].SiteID], month: jsondata[i].Month, flowername: "Red Gum", value: red };
                        calculationLists[i + 2] = { location: idName[jsondata[i].SiteID], month: jsondata[i].Month, flowername: "Yellow Gum", value: yellow };
                    } else {
                        calculationLists[i * 3] = { location: idName[jsondata[i].SiteID], month: jsondata[i].Month, flowername: "Grey Box", value: greyb };
                        calculationLists[i * 3 + 1] = { location: idName[jsondata[i].SiteID], month: jsondata[i].Month, flowername: "Red Gum", value: red };
                        calculationLists[i * 3 + 2] = { location: idName[jsondata[i].SiteID], month: jsondata[i].Month, flowername: "Yellow Gum", value: yellow };
                    }
                }

                //This is top 5 locations of all year.
                let sortedResults = calculationLists.sort(function (a, b) {
                    return b.value - a.value;
                }).slice(0, 5);
                for (let i = 0; i < sortedResults.length; i++) {
                    sortedResults[i].month = Mname[sortedResults[i].month];
                }

                let nextMonth = new Date().getMonth() + 1;
                let nextMonthList = [];
                for (let n = 0; n < jsondata.length; n++) {
                    if (jsondata[n].Month == nextMonth) {
                        let grey = GreyBoxCalculation(nextMonth, jsondata[n].Temperature, jsondata[n].Humidity);
                        let red = RedGumCalculation(nextMonth, jsondata[n].Temperature, jsondata[n].Humidity);
                        let yellow = YellowGumCalculation(nextMonth, jsondata[n].Temperature, jsondata[n].Humidity);
                        if (nextMonthList == null) {
                            nextMonthList[0] = { location1: idName[jsondata[n].SiteID], fName: "Grey Box", value: grey };
                            nextMonthList[1] = { location1: idName[jsondata[n].SiteID], fName: "Red Gum", value: red };
                            nextMonthList[2] = { location1: idName[jsondata[n].SiteID], fName: "Yellow Gum", value: yellow };
                        } else {
                            let len = nextMonthList.length;
                            nextMonthList[len] = { location1: idName[jsondata[n].SiteID], fName: "Grey Box", value: grey };
                            nextMonthList[len + 1] = { location1: idName[jsondata[n].SiteID], fName: "Red Gum", value: red };
                            nextMonthList[len + 2] = { location1: idName[jsondata[n].SiteID], fName: "Yellow Gum", value: yellow };
                        }
                    }
                }
                // This is the result of top 5 list in next month
                let sortedNextMonth = nextMonthList.sort(function (a, b) {
                    return b.value - a.value;
                }).slice(0, 5);
                console.dir(sortedNextMonth);

                let yLoc1 = ""; let yLoc2 = ""; let yLoc3 = ""; let yLoc4 = ""; let yLoc5 = "";
                let yMon1 = ""; let yMon2 = ""; let yMon3 = ""; let yMon4 = ""; let yMon5 = "";
                let yFl1 = ""; let yFl2 = ""; let yFl3 = ""; let yFl4 = ""; let yFl5 = "";
                let yPrb1 = ""; let yPrb2 = ""; let yPrb3 = ""; let yPrb4 = ""; let yPrb5 = "";

                let mLoc1 = ""; let mLoc2 = ""; let mLoc3 = ""; let mLoc4 = ""; let mLoc5 = "";
                let mFl1 = ""; let mFl2 = ""; let mFl3 = ""; let mFl4 = ""; let mFl5 = "";
                let mPrb1 = ""; let mPrb2 = ""; let mPrb3 = ""; let mPrb4 = ""; let mPrb5 = "";

                for (let ind = 0; ind < sortedNextMonth.length; ind++) {
                    // for yearly
                    yLoc1 = sortedResults[0].location;
                    yLoc2 = sortedResults[1].location;
                    yLoc3 = sortedResults[2].location;
                    yLoc4 = sortedResults[3].location;
                    yLoc5 = sortedResults[4].location;


                    yMon1 = sortedResults[0].month;
                    yMon2 = sortedResults[1].month;
                    yMon3 = sortedResults[2].month;
                    yMon4 = sortedResults[3].month;
                    yMon5 = sortedResults[4].month;


                    yFl1 = sortedResults[0].flowername;
                    yFl2 = sortedResults[1].flowername;
                    yFl3 = sortedResults[2].flowername;
                    yFl4 = sortedResults[3].flowername;
                    yFl5 = sortedResults[4].flowername;

                    yPrb1 = sortedResults[0].value +"%";
                    yPrb2 = sortedResults[1].value + "%";
                    yPrb3 = sortedResults[2].value + "%";
                    yPrb4 = sortedResults[3].value + "%";
                    yPrb5 = sortedResults[4].value + "%";

                    // for monthly
                    mLoc1 = sortedNextMonth[0].location1;
                    mLoc2 = sortedNextMonth[1].location1;
                    mLoc3 = sortedNextMonth[2].location1;
                    mLoc4 = sortedNextMonth[3].location1;
                    mLoc5 = sortedNextMonth[4].location1;

                    mFl1 = sortedNextMonth[0].fName;
                    mFl2 = sortedNextMonth[1].fName;
                    mFl3 = sortedNextMonth[2].fName;
                    mFl4 = sortedNextMonth[3].fName;
                    mFl5 = sortedNextMonth[4].fName;

                    mPrb1 = sortedNextMonth[0].value + "%";
                    mPrb2 = sortedNextMonth[1].value + "%";
                    mPrb3 = sortedNextMonth[2].value + "%";
                    mPrb4 = sortedNextMonth[3].value + "%";
                    mPrb5 = sortedNextMonth[4].value + "%";
                }
                // for yearly
               /* document.getElementById('yLoc1').innerText = yLoc1;
                document.getElementById('yLoc2').innerText = yLoc2;
                document.getElementById('yLoc3').innerText = yLoc3;
                document.getElementById('yLoc4').innerText = yLoc4;
                document.getElementById('yLoc5').innerText = yLoc5;

                document.getElementById('yMon1').innerText = yMon1;
                document.getElementById('yMon2').innerText = yMon2;
                document.getElementById('yMon3').innerText = yMon3;
                document.getElementById('yMon4').innerText = yMon4;
                document.getElementById('yMon5').innerText = yMon5;

                document.getElementById('yFl1').innerText = yFl1;
                document.getElementById('yFl2').innerText = yFl2;
                document.getElementById('yFl3').innerText = yFl3;
                document.getElementById('yFl4').innerText = yFl4;
                document.getElementById('yFl5').innerText = yFl5;

                document.getElementById('yPrb1').innerText = yPrb1;
                document.getElementById('yPrb2').innerText = yPrb2;
                document.getElementById('yPrb3').innerText = yPrb3;
                document.getElementById('yPrb4').innerText = yPrb4;
                document.getElementById('yPrb5').innerText = yPrb5;*/

                // for monthly
                document.getElementById('mLoc1').innerText = mLoc1;
                document.getElementById('mLoc2').innerText = mLoc2;
                document.getElementById('mLoc3').innerText = mLoc3;
                document.getElementById('mLoc4').innerText = mLoc4;
                document.getElementById('mLoc5').innerText = mLoc5;

                document.getElementById('mFl1').innerText = mFl1;
                document.getElementById('mFl2').innerText = mFl2;
                document.getElementById('mFl3').innerText = mFl3;
                document.getElementById('mFl4').innerText = mFl4;
                document.getElementById('mFl5').innerText = mFl5;

                document.getElementById('mPrb1').innerText = mPrb1;
                document.getElementById('mPrb2').innerText = mPrb2;
                document.getElementById('mPrb3').innerText = mPrb3;
                document.getElementById('mPrb4').innerText = mPrb4;
                document.getElementById('mPrb5').innerText = mPrb5;
            }
        }

        function GreyBoxCalculation(month, temperature, humidity) {
            let constant = -41.1166;
            let vT = 0.238816;
            let vM = 3.13709;
            let vH = 0.030019;
            let result;
            if (month >= 1 && month <= 4) {
                let mid = constant + vT * temperature + (month + 8) * vM + vH * humidity;
                result = (1 / (1 + Math.exp(-mid))) * 100;
            } else if (month >= 5 && month <= 10) {
                let mid = constant + vT * temperature + (16 - month) * vM + vH * humidity;
                result = (1 / (Math.exp(-mid))) * 100;
            } else {
                let mid = constant + vT * temperature + (month - 4) * vM + vH * humidity;
                result = (1 / (Math.exp(-mid))) * 100;
            }
            return result.toPrecision(3);
        }
        function YellowGumCalculation(month, temperature, humidity) {
            let constant = -15.38678;
            let vT = 0.35194;
            let vM = 0.82605;
            let vH = 0.05133;
            let result;
            if (month >= 1 && month <= 4) {
                let mid = constant + vT * temperature + month * vM + vH * humidity;
                result = (1 / (1 + Math.exp(-mid))) * 100;
            } else if (month >= 5 && month <= 12) {
                let mid = constant + vT * temperature + (17 - month) * vM + vH * humidity;
                result = (1 / (1 + Math.exp(-mid))) * 100;
            }
            return result.toPrecision(3);
        }

        function RedGumCalculation(month, temperature, humidity) {
            let constant = -25.941623;
            let vT = 0.118353;
            let vM = 1.941184;
            let vH = 0.053391;
            let result;
            if (month >= 1 && month <= 5) {
                let mid = constant + vT * temperature + (12 - month * 2) * vM + vH * humidity;
                result = (1 / (1 + Math.exp(-mid))) * 100;
            } else if (month >= 6 && month <= 11) {
                let mid = constant + vT * temperature + (2 * month - 11) * vM + vH * humidity;
                result = (1 / (1 + Math.exp(-mid))) * 100;
            } else {
                let mid = constant + vT * temperature + (month) * vM + vH * humidity;
                result = (1 / (1 + Math.exp(-mid))) * 100;
            }
            return result.toPrecision(3);
        }
        let idName = {
            90171: 'Cashmore Airport', 90194: 'Dartmoor', 86375: 'Cranbourne', 86338: 'Olympic Park', 83083: 'Eddi Upper',
            84145: 'Orbost', 90176: 'Mortlake', 83024: 'Mount Buller', 80128: 'Charlton', 76064: 'Walpeup', 79028: 'Longerenong'
};
let Mname = {1:'January',2:'February',3:'Mar',4:'April',5:'May',6:'June',7:'July',8:'August',9:'September',10:'October',11:'November',12:'December'};

