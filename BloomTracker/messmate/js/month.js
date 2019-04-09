var httpRequest = new XMLHttpRequest();
let url = "http://35.189.45.139/api/Locations1";
//let url = "http://localhost:59945/api/Locations";
//httpRequest.addEventListener("readystatechange",getReport,false);
httpRequest.open("GET", url, true);
httpRequest.send();

function getReport() {
    let month = storeSelction();
    var mappingRelation = {
        "January": 1, "Feburary": 2, "March": 3, "April": 4, "May": 5, "June": 6, "July": 7, "August": 8, "September": 9, "Octobor": 10,
        "November": 11, "December": 12
    };
    var formula3 = {
        "v1": -11.95632, "v2": 0.23121, "v3": 0.72970
    };
    //var formula1 = {
    //"v1" : -3.572704, "v2":0.540474,"v3":0.196698
    //};

    var conclusionLoc = "";
    var conclusionMon = "";
    var conclusionTemp = "";
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        var data = JSON.parse(httpRequest.responseText);
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                //About the document write function, this is just for test, we should actually display the test in a page.
                if (mappingRelation[month] >= 1 && mappingRelation[month] <= 4) {
                    var middle = formula3.v1 + formula3.v2 * data[i][month] + formula3.v3 * (mappingRelation[month] + 8);
                    var result = 1 / (1 + Math.exp(-middle)) * 100;
                    conclusionLoc += data[i].Loc_name + "\r\n";
                    conclusionMon += data[i][month] + " celsius " + "\r\n";
                    conclusionTemp += result.toPrecision(2) + "%" + "\r\n";
                } else if (mappingRelation[month] >= 5 && mappingRelation[month] <= 10) {
                    var middle = formula3.v1 + formula3.v2 * data[i][month] + formula3.v3 * (16 - mappingRelation[month]);
                    var result = 1 / (1 + Math.exp(-middle)) * 100;
                    conclusionLoc += data[i].Loc_name + "\r\n";
                    conclusionMon += data[i][month] + " celsius " + "\r\n";
                    conclusionTemp += result.toPrecision(2) + "%" + "\r\n";
                } else if (mappingRelation[month] <= 12 && mappingRelation[month] >= 11) {
                    var middle = formula3.v1 + formula3.v2 * data[i][month] + formula3.v3 * (mappingRelation[month] - 4);
                    var result = 1 / (1 + Math.exp(-middle)) * 100;
                    conclusionLoc += data[i].Loc_name + "\r\n";;
                    conclusionMon += data[i][month] + " celsius " + "\r\n";
                    conclusionTemp += result.toPrecision(2) + "%" + "\r\n";
                }
            }
        }
    }
    document.getElementById("predictionLoc").innerText = conclusionLoc;
    document.getElementById("predictionMon").innerText = conclusionMon;
    document.getElementById("predictionTemp").innerText = conclusionTemp;
}
