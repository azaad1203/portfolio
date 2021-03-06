let url = 'http://35.189.40.102/api/TempHums';
let flower = new XMLHttpRequest();
flower.open("GET", url, true);
flower.send();
function events() {
    let l = document.getElementById("chooseLocation").value;
    let m = document.getElementById("chooseMonth").value;
    let idName = {
        90171: 'Cashmore Airport', 90194: 'Dartmoor', 86375: 'Cranbourne', 86338: 'Olympic Park', 83083: 'Eddi Upper',
        84145: 'Orbost', 90176: 'Mortlake', 83024: 'Mount Buller', 80128: 'Charlton', 76064: 'Walpeup', 79028: 'Longerenong'
    };
    if (flower.readyState == 4 && flower.status == 200) {
        let flowerData = JSON.parse(flower.responseText);
        console.log("get data, " + flowerData.length);
        if (l != null && m != null) {
            if (l != "Location" && m != "Month") {
                if (l == "allL" && m != "allM") {
                    console.log("Bar chart");
                    let collection = [];
                    let xLocations = [];
                    let items = [];
                    for (let index = 0; index < flowerData.length; index++) {
                        if (flowerData[index].Month == m) {
                            let temp = calculation(flowerData[index].Month, flowerData[index].Temperature, flowerData[index].Humidity);
                            if (collection == null) {
                                items[0] = { name: idName[flowerData[index].SiteID], value: temp };
                            } else {
                                items[items.length] = { name: idName[flowerData[index].SiteID], value: temp };
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
                    Chart.defaults.scale.ticks.beginAtZero = true;
                    if (window.bar != undefined) {
                        window.bar.destroy();
                    }
                    window.bar = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: xLocations,
                            datasets: [{
                                label: "Probability at each location",
                                data: collection,
                                backgroundColor: 'rgb(0,0,255,0.3)'
                            }]
                        }, options: {
                            legend: { display: false },
                            title: {
                                display: true,
                                text: "Probability of all locations for grey box at selected month"
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
                            },
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        // Include a dollar sign in the ticks
                                        callback: function (value, index, values) {
                                            return value + "%";
                                        }
                                    },
                                    scaleLabel: {
                                        display: true, labelString: "Probability/Percentage"
                                    }
                                }],
                                xAxes: [{
                                    scaleLabel: { display: true, labelString: "Month" }
                                }]
                            }
                        }
                    });
                    document.getElementById("results").innerText = "";
                    for (let i = 0; i < collection.length; i++) {
                        if (collection[i] >= 1) {
                            document.getElementById("results").innerText += sortedList[i].name + " ," + " Probability: " + collection[i] + "%" + "\r\n";
                        } else {
                            document.getElementById("results").innerText += sortedList[i].name + " ," + " Less than 1%" + "\r\n";
                        }
                    }
                } else if (l != "allL" && m == "allM") {
                    console.log("Line chart");
                    let collection = [];
                    let xMonth = [];
                    for (let i = 0; i < flowerData.length; i++) {
                        if (flowerData[i].SiteID == l) {
                            let temp = calculation(flowerData[i].Month, flowerData[i].Temperature, flowerData[i].Humidity);
                            if (collection == null) {
                                collection[0] = temp;
                                xMonth[0] = flowerData[i].Month;
                            } else {
                                collection[collection.length] = temp;
                                xMonth[xMonth.length] = flowerData[i].Month;
                            }
                        }
                    }
                    let monthLabel = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                    var ctx = document.getElementById('charts').getContext('2d');
                    if (window.bar != undefined) {
                        window.bar.destroy();
                    }
                    window.bar = new Chart(ctx, {
                        type: 'line',
                        data: {
                            labels: xMonth,
                            datasets: [{
                                label: "Data at " + idName[l],
                                data: collection,
                                backgroundColor: 'rgba(2, 207, 200, 0.3)',
                                borderColor: 'rgba(2, 207, 200, 0.3)',
                                pointRadius: 6
                            }]
                        },
                        options: {
                            title: {
                                text: "Probability of all year at " + idName[l],
                                fontFamily: 'sans-serif',
                                position: 'top',
                                display: true
                            },
                            legend: { display: false },
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        // Include a dollar sign in the ticks
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
                                        labelString: "Location"
                                    }
                                }]
                            }
                        }
                    });
                    document.getElementById("results").innerText = "";
                    for (let i = 0; i < collection.length; i++) {
                        if (collection[i] >= 1) {
                            document.getElementById("results").innerText += monthLabel[i] + " ," + collection[i] + "%" + "\r\n";
                        } else {
                            document.getElementById("results").innerText += monthLabel[i] + " ," + "Less than 1%" + "\r\n";
                        }
                    }
                } else if (l != "allL" && m != "allM") {
                    console.log("One line result");
                    document.getElementById("results").innerText = "";
                    for (let i = 0; i < flowerData.length; i++) {
                        if ((flowerData[i].Month == m) && (flowerData[i].SiteID == l)) {
                            let temp = calculation(flowerData[i].Month, flowerData[i].Temperature, flowerData[i].Humidity);
                            if (temp >= 1) {
                                document.getElementById("results3").innerText = temp + "%";
                            } else {
                                document.getElementById("results3").innerText = "Less than 1%";
                            }
                        }
                    }
                }
            }
        }
    }
}

function calculation(month, temperature, humidity) {
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
