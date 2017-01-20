Chart.defaults.global.tooltips.enabled = false;


/*********************
    LINE BAR GRAPH
*********************/
var ctx = document.getElementById("myChart");

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["", "16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3","4-10", "11-17", "18-24", "25-31", ""],
        datasets: [{
            lineTension: 0,
            data: [0, 500, 950, 740, 1290, 1790, 1190, 1498, 1004, 1500, 1945, 1521, 1991],
            backgroundColor: [
                'rgba(175, 177, 231, .2)'
            ],
            borderColor: [
                'rgb(175, 177, 231)'
            ],
            borderWidth: 5
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    min:0,
                    max:2500,
                    fixedStepSize: '500'
                }
            }]
        }
    }
});

/********************
    BAR GRAPH CHART
********************/

var ctx1 = document.getElementById("myChart1");

var myChart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            data: [50, 75, 150, 100, 200, 175, 75],
            backgroundColor: [
                'rgb(115, 119, 191)',
                'rgb(115, 119, 191)',
                'rgb(115, 119, 191)',
                'rgb(115, 119, 191)',
                'rgb(115, 119, 191)',
                'rgb(115, 119, 191)',
                'rgb(115, 119, 191)'
            ],
            borderColor: [
                'rgb(115, 119, 191)',
                'rgb(115, 119, 191)',
                'rgb(115, 119, 191)',
                'rgb(115, 119, 191)',
                'rgb(115, 119, 191)',
                'rgb(115, 119, 191)',
                'rgb(115, 119, 191)'
            ],
            borderWidth: 5
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    min:0,
                    max:250,
                    fixedStepSize: '50'
                }
            }]
        }
    }
});

/*********************
    DOUGHNUT CHART
*********************/

var ctx2 = document.getElementById("myChart2");

var myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    animation:{
        animateScale:false
    },
    data: {
        datasets: [
            {
                data: [720, 135, 125],
                backgroundColor: [
                    "rgb(115, 119, 191)",
                    "rgb(129, 201, 143)",
                    "rgb(116, 177, 191)"
                ]
            }]
        }
});


$('#SubmitButton').click(function (e) {
    if ($("#UserSearch").val() == '' || $("#TextMessage").val() == '') {
        alert("Whoops. You didn't enter anything into one of the fields.");

    } else {
        alert("Message sent.");
    }

    e.preventDefault();
});

$('#button1').click(function (e) {
    alert("Settings saved.");
    e.preventDefault();
});

$('#closeButton').click(function (e) {
    $(".alertBox").hide();
});

$('#bell').click(function (e) {
    alert("No new notifications");
});

$('#button2').click(function (e) {
    e.preventDefault();
});