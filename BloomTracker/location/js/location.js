let httpRequest = new XMLHttpRequest();
let url = "http://35.189.45.139/api/Locations1";
//let url = "http://localhost:59945/api/Locations";
httpRequest.open("GET", url, true);
httpRequest.send();
function report() {
    let pos = listLocation();
    var month = {
        1: "January", 2: "Feburary", 3: "March", 4: "April", 5: "May", 6: "June", 7: "July", 8: "August", 9: "September", 10: "Octobor", 11: "November",
        12: "December"
    };
    var formula = {
        "v1": -11.95632, "v2": 0.23121, "v3": 0.72970
    };
    var conclusionLoc = "";
    var conclusionMon = "";
    var conclusionTmp = "";
    var conclusionPrb = "";
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        var data = JSON.parse(httpRequest.responseText);
        var datalocation;
        if (data.length > 0) {
            for (let index = 0; index < data.length; index++) {
                if (data[index].Loc_name == pos) {
                    datalocation = data[index];
                }
            }
        }
        //console.log("data:"+datalocation.Loc_name);
        for (let m = 1; m <= 12; m++) {
            console.log(datalocation[month[m]]);
            if (m >= 1 && m <= 4) {
                var middle = formula.v1 + formula.v2 * datalocation[month[m]] + formula.v3 * (m + 8);
                var result = (1 / (1 + Math.exp(-middle))) * 100;
                conclusionLoc += pos + "\r\n";
                conclusionMon += month[m] + "\r\n";
                conclusionTmp += datalocation[month[m]] + " celsius " + "\r\n";
                conclusionPrb += result.toPrecision(2) + "%" + "\r\n";
            } else if (m >= 5 && m <= 10) {
                var middle = formula.v1 + formula.v2 * datalocation[month[m]] + formula.v3 * (16 - m);
                var result = (1 / (1 + Math.exp(-middle))) * 100;
                conclusionLoc += pos + "\r\n";
                conclusionMon += month[m] + "\r\n";
                conclusionTmp += datalocation[month[m]] + " celsius " + "\r\n";
                conclusionPrb += result.toPrecision(2) + "%" + "\r\n";
            } else if (m >= 11 && m <= 12) {
                var middle = formula.v1 + formula.v2 * datalocation[month[m]] + formula.v3 * (m - 4);
                var result = (1 / (1 + Math.exp(-middle))) * 100;
                conclusionLoc += pos + "\r\n";
                conclusionMon += month[m] + "\r\n";
                conclusionTmp += datalocation[month[m]] + " celsius " + "\r\n";
                conclusionPrb += result.toPrecision(2) + "%" + "\r\n";
            }
        }
        document.getElementById("PredictionLoc").innerText = conclusionLoc;
        document.getElementById("PredictionMon").innerText = conclusionMon;
        document.getElementById("PredictionTmp").innerText = conclusionTmp;
        document.getElementById("PredictionPrb").innerText = conclusionPrb;
    }
}
