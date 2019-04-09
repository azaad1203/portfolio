


//const request = new XMLHttpRequest();
let url = 'http://35.189.40.102/api/TempHums';
request.onreadystatechange = function () {
    if (request.readyState == 4) {
        if (request.status == 200) {
            let data = JSON.parse(request.responseText);
            console.log(data.length);
            let nextMonth = new Date().getMonth() + 2;
            if ((new Date().getMonth() + 2) == 13) {
                nextMonth == 1;
            }
            let list = [];
            for (let i = 0; i < data.length; i++) {
                if (data[i].Month == nextMonth) {
                    let red = RedGumCalculation(nextMonth, data[i].Temperature, data[i].Humidity);
                    let grey = GreyBoxCalculation(nextMonth, data[i].Temperature, data[i].Humidity);
                    let yellow = YellowGumCalculation(nextMonth, data[i].Temperature, data[i].Humidity);
                    let messmate = Messmate(nextMonth, data[i].Temperature);
                    let ybox = yellowBox(nextMonth, data[i].Temperature, data[i].Humidity);

                    if (list == null) {
                        list[0] = { Location: idName[data[i].SiteID], flower: "Red Gum", value: red };
                        list[1] = { Location: idName[data[i].SiteID], flower: "Grey Box", value: grey };
                        list[2] = { Location: idName[data[i].SiteID], flower: "Yellow Gum", value: yellow };
                        list[3] = { Location: idName[data[i].SiteID], flower: "Messmate", value: messmate };
                        list[4] = { Location: idName[data[i].SiteID], flower: "Yellow Box", value: ybox };
                    } else {
                        let l = list.length;
                        list[l] = { Location: idName[data[i].SiteID], flower: "Red Gum", value: red };
                        list[l + 1] = { Location: idName[data[i].SiteID], flower: "Grey Box", value: grey };
                        list[l + 2] = { Location: idName[data[i].SiteID], flower: "Yellow Gum", value: yellow };
                        list[l + 3] = { Location: idName[data[i].SiteID], flower: "Messmate", value: messmate };
                        list[l + 4] = { Location: idName[data[i].SiteID], flower: "Yellow Box", value: ybox };
                    }
                }
            }
            let sorted = list.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 5);
            let mLoc1 = ""; let mLoc2 = ""; let mLoc3 = ""; let mLoc4 = ""; let mLoc5 = "";
            let mFl1 = ""; let mFl2 = ""; let mFl3 = ""; let mFl4 = ""; let mFl5 = "";
            let mPrb1 = ""; let mPrb2 = ""; let mPrb3 = ""; let mPrb4 = ""; let mPrb5 = "";
            for (let arr = 0; arr < sorted.length; arr++) {
                // for monthly
                mLoc1 = sorted[0].Location;
                mLoc2 = sorted[1].Location;
                mLoc3 = sorted[2].Location;
                mLoc4 = sorted[3].Location;
                mLoc5 = sorted[4].Location;

                mFl1 = sorted[0].flower;
                mFl2 = sorted[1].flower;
                mFl3 = sorted[2].flower;
                mFl4 = sorted[3].flower;
                mFl5 = sorted[4].flower;

                mPrb1 = sorted[0].value + "%";
                mPrb2 = sorted[1].value + "%";
                mPrb3 = sorted[2].value + "%";
                mPrb4 = sorted[3].value + "%";
                mPrb5 = sorted[4].value + "%";
                // document.getElementById("resultNextMonth").innerText += sorted[arr].Location + ": " + sorted[arr].flower + ", " + sorted[arr].value + "%" + "\r\n";

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
        if (request.status == 404) {
            console.log("Resource not found");
        }
    }
};
request.open("GET", url, true);
request.send();

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
function Messmate(month, temperature) {
    let constant = -12.202065;
    let vT = 0.243236;
    let vM = 0.654547;

    let result;
    if (month >= 4 && month <= 7) {
        let mid = constant + vT * temperature + (13 - 2 * month) * vM;
        result = (1 / (1 + Math.exp(-mid))) * 100;
    } else if (month >= 8 && month <= 11) {
        let mid = constant + vT * temperature + (2 * month - 14) * vM;
        result = (1 / (1 + Math.exp(-mid))) * 100;
    } else if (month == 2 && month == 3) {
        let mid = constant + vT * temperature + (month + 7) * vM;
        result = (1 / (1 + Math.exp(-mid))) * 100;
    } else {
        let mid = constant + vT * temperature + ((133 - month) / 11) * vM;
        result = (1 / (1 + Math.exp(-mid))) * 100;
    }
    return result.toPrecision(3);
}
function yellowBox(month, temperature, humidity) {
    let constant = -23.153499;
    let vT = 0.256121;
    let vM = 1.092943;
    let vH = 0.134306;
    let result;
    if (month == 1 || month == 3) {
        let mid = constant + vT * temperature + ((3 * month + 13) / 2) * vM + vH * humidity;
        result = (1 / (1 + Math.exp(-mid))) * 100;
    } else if (month == 2 || month == 4 || month == 5 || month == 6) {
        let mid = constant + vT * temperature + (13 - 2 * month) * vM + vH * humidity;
        result = (1 / (1 + Math.exp(-mid))) * 100;
    } else if (month == 10) {
        let mid = constant + vT * temperature + (month - 3) * vM + vH * humidity;
        result = (1 / (1 + Math.exp(-mid))) * 100;
    } else if (month == 7 || month == 8 || month == 9 || month == 11 || month == 12) {
        let mid = constant + vT * temperature + (2 * month - 12) * vM + vH * humidity;
        result = (1 / (1 + Math.exp(-mid))) * 100;
    }
    return result.toPrecision(3);
}
let idName = {
    90171: 'Cashmore Airport', 90194: 'Dartmoor', 86375: 'Cranbourne', 86338: 'Olympic Park', 83083: 'Eddi Upper',
    84145: 'Orbost', 90176: 'Mortlake', 83024: 'Mount Buller', 80128: 'Charlton', 76064: 'Walpeup', 79028: 'Longerenong'
};