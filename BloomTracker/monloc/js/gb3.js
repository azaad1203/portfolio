
let url = 'http://35.189.40.102/api/TempHums';
let flower = new XMLHttpRequest();
flower.open("GET", url, true);
flower.send();
function events() {
    /**
     * Store the selected month and location, the two values here will be used to determine the what I will calculate.
     */
    let l = document.getElementById("chooseLocation").value;
    let m = document.getElementById("chooseMonth").value;
    let idName = {
        90171: 'Cashmore Airport', 90194: 'Dartmoor', 86375: 'Cranbourne', 86338: 'Olympic Park', 83083: 'Eddi Upper',
        84145: 'Orbost', 90176: 'Mortlake', 83024: 'Mount Buller', 80128: 'Charlton', 76064: 'Walpeup', 79028: 'Longerenong'
    };

    if (flower.readyState == 4 && flower.status == 200) {
        // If the connection is good and established, parse the Json data into readable data object.
        let flowerData = JSON.parse(flower.responseText);
        console.log("get data, " + flowerData.length);
        // validation to make sure both month and location are not empty.
        if (l != null && m != null) {
            if (l != "Location" && m != "Month") {
                if (l == "allL" && m != "allM") {
                    console.log("Bar chart");
                    document.getElementById("results").innerText = "";
                    let collection = [];
                    let xLocations = [];
                    let items = [];
                    for (let index = 0; index < flowerData.length; index++) {
                        if (flowerData[index].Month == m) {
                            let temp = calculation(flowerData[index].Month, flowerData[index].Temperature, flowerData[index].Humidity);
                            console.log("Month:" + flowerData[index].Month + " Temp:" + flowerData[index].Temperature + " Humid:" + flowerData[index].Humidity + " Result" + temp);
                            if (collection == null) {
                                items[0] = { name: idName[flowerData[index].SiteID], value: temp.toPrecision(2) };
                            } else {
                                items[items.length] = { name: idName[flowerData[index].SiteID], value: temp.toPrecision(2) };
                            }
                        }
                    }
                    let sortedList = items.sort(function (a, b) {
                        return b.value - a.value;
                    });
                    console.dir(sortedList);
                    for (let i = 0; i < sortedList.length; i++) {
                        xLocations[i] = sortedList[i].name;
                        collection[i] = sortedList[i].value;
                    }
                    //Sort the calculation before the bar chart.
                    let ctx = document.getElementById('charts').getContext('2d');
                    if (window.bar != undefined) {
                        window.bar.destroy();
                    }
                    window.bar = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: xLocations,
                            datasets: [{
                                label: "Probability",
                                data: collection,
                                backgroundColor: 'rgb(0,0,255,0.3)'
                            }]
                        },
                        options: {
                            legend: { display: false },
                            title: {
                                display: true,
                                text: "Probability of all locations for grey box at selected month"
                            },
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        callback: function (value, index, values) {
                                            return value + "%";
                                        }
                                    },
                                    scaleLabel: {
                                        display: true,
                                        labelString: "Probability"
                                    }
                                }],
                                xAxes: [{
                                    scaleLabel: {
                                        display: true,
                                        labelString: "Location"
                                    }
                                }]
                            },
                            animation: {
                                duration: 0,
                                onComplete: function () {
                                    // render the value of the chart above the bar
                                    var ctx = this.chart.ctx;
                                    ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, 'normal', Chart.defaults.global.defaultFontFamily);
                                    ctx.fillStyle = this.chart.config.options.defaultFontColor;
                                    ctx.textAlign = 'center';
                                    ctx.textBaseline = 'bottom';
                                    this.data.datasets.forEach(function (dataset) {
                                        for (var i = 0; i < dataset.data.length; i++) {
                                            var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model;
                                            ctx.fillText(dataset.data[i], model.x, model.y - 5);
                                        }
                                    });
                                }
                            }
                        }
                    });
                    for (let i = 0; i < collection.length; i++) {
                        if (collection[i] >= 1) {
                            document.getElementById("results2").innerText += sortedList[i].name + " ," + " Probability: " + collection[i] + "%" + "\r\n"; // all loc
                        } else {
                            document.getElementById("results2").innerText += sortedList[i].name + " ," + " Less than 1%" + "\r\n";
                        }
                    }

                } else if (l != "allL" && m == "allM") {
                    console.log("Line chart");
                    let collection = [];
                    let xMonth = [];
                    for (let i = 0; i < flowerData.length; i++) {
                        if (flowerData[i].SiteID == l) {
                            let temp = calculation(flowerData[i].Month, flowerData[i].Temperature, flowerData[i].Humidity);
                            console.log("Month:" + flowerData[i].Month + " temp:" + flowerData[i].Temperature + " Humid:" + flowerData[i].Humidity + " result:" + temp);
                            if (collection == null) {
                                collection[0] = temp.toPrecision(3);
                                xMonth[0] = flowerData[i].Month;
                            } else {
                                collection[collection.length] = temp.toPrecision(3);
                                xMonth[xMonth.length] = flowerData[i].Month;
                            }
                        }
                    }
                    let monthLabel = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                    let ctx = document.getElementById('charts').getContext('2d');
                    if (window.bar != undefined) {
                        window.bar.destroy();
                    }
                    window.bar = new Chart(ctx, {
                        type: 'line',
                        data: {
                            labels: monthLabel,
                            datasets: [{
                                data: collection,
                                backgroundColor: 'rgba(2, 207, 200, 0.3)',
                                borderColor: 'rgba(2, 207, 200, 0.3)',
                                pointRadius: 6
                            }]
                        },
                        options: {
                            legend: {
                                display: false
                            },
                            title: {
                                text: "Probability of all year at" + idName[l],
                                fontFamily: 'sans-serif',
                                position: 'top',
                                display: true
                            },
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        callback: function (value, index, values) {
                                            return value + "%";
                                        }
                                    },
                                    scaleLabel: {
                                        display: true,
                                        labelString: "Probability/Percentage"
                                    }
                                }],
                                xAxes: [{
                                    scaleLabel: {
                                        display: true,
                                        labelString: "Month"
                                    }
                                }]
                            }
                        }
                    });
                    document.getElementById("results").innerText = "";
                    for (let i = 0; i < collection.length; i++) {
                        if (collection[i] >= 1) {
                            document.getElementById("results1").innerText += monthLabel[i] + " , " + collection[i] + "%" + "\r\n"; // all month
                        } else {
                            document.getElementById("results1").innerText += monthLabel[i] + " , " + "Less than 1%" + "\r\n";
                        }
                    }
                } else if (l != "allL" && m != "allM") {
                    console.log("One line result");
                    for (let i = 0; i < flowerData.length; i++) {
                        if ((flowerData[i].Month == m) && (flowerData[i].SiteID == l)) {
                            let temp = calculation(flowerData[i].Month, flowerData[i].Temperature, flowerData[i].Humidity);
                            if (temp >= 1) {
                                document.getElementById("results").innerText = temp.toPrecision(2) + "%";
                            } else {
                                document.getElementById("results").innerText = "Less than 1%";
                            }
                        }
                    }
                }
            }
        }
    }
}

function calculation(month, temperature, humidity) {
    let constant = -41.1166;
    let vT = 0.238816;
    let vM = 3.13709;
    let vH = 0.030019;
    let result;
    if (month >= 1 && month <= 4) {
        let mid = constant + vT * temperature + (month + 8) * vM + vH * humidity;
        result = ((1 / (1 + Math.exp(-mid))) * 100);
    } else if (month >= 5 && month <= 10) {
        let mid = constant + vT * temperature + (16 - month) * vM + vH * humidity;
        result = ((1 / (Math.exp(-mid))) * 100);
    } else {
        let mid = constant + vT * temperature + (month - 4) * vM + vH * humidity;
        result = ((1 / (Math.exp(-mid))) * 100);
    }
    return result;
}