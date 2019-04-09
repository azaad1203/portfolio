function month() {
    let mon = document.getElementById("monthList").value;
    return mon;
}
function lo() {
    let select = document.getElementById("locationList").value;
    return select;
}
let httpRequest = new XMLHttpRequest();
let url = "http://35.189.45.139/api/Locations1";
// let url = "http://localhost:59945/api/Locations";
httpRequest.open("GET", url, true);
httpRequest.send();
function getReport() {
    let mappingRelation = {
        "January": 1, "February": 2, "March": 3, "April": 4, "May": 5, "June": 6, "July": 7, "August": 8, "September": 9, "October": 10,
        "November": 11, "December": 12
    };
    let formula = {
        "v1": -11.95632, "v2": 0.23121, "v3": 0.72970
    };
    let m = month();
    let pos = lo();
    var conclusionMon = "";
    var conclusionLoc = "";
    var conclusionPrb = "";
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        let content = JSON.parse(httpRequest.responseText);
        var dataLocation;
        for (let x = 0; x < content.length; x++) {
            if (content[x].Loc_name == pos) {
                console.log(content[x].Loc_id);
                dataLocation = content[x]
            }
        }
        if (mappingRelation[m] >= 1 && mappingRelation[m] <= 4) {
            console.log(dataLocation[m]);
            var middle = formula.v1 + formula.v2 * dataLocation[m] + formula.v3 * (mappingRelation[m] + 8);
            let result = 1 / (1 + Math.exp(-middle)) * 100;
            conclusionMon += m;
            conclusionLoc += pos;
            conclusionPrb += result.toPrecision(2) + " % ";
        } else if (mappingRelation[m] >= 5 && mappingRelation[m] <= 10) {
            console.log(dataLocation[m]);
            var middle = formula.v1 + formula.v2 * dataLocation[m] + formula.v3 * (16 - mappingRelation[m]);
            let result = 1 / (1 + Math.exp(-middle)) * 100;
            conclusionMon += m;
            conclusionLoc += pos;
            conclusionPrb += result.toPrecision(2) + " % ";
        } else if (mappingRelation[m] >= 11 && mappingRelation[m] <= 12) {
            console.log(dataLocation[m]);
            var middle = formula.v1 + formula.v2 * dataLocation[m] + formula.v3 * (mappingRelation[m] - 4);
            let result = 1 / (1 + Math.exp(-middle)) * 100;
            conclusionMon += m;
            conclusionLoc += pos;
            conclusionPrb += result.toPrecision(2) + " % ";
        }
    }
    document.getElementById("predictionMon").innerText = conclusionMon;
    document.getElementById("predictionLoc").innerText = conclusionLoc;
    document.getElementById("predictionPrb").innerText = conclusionPrb;
}   