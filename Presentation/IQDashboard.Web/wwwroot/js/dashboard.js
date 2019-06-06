$(function ($) {
    google.load("visualization", "1", { packages: ["corechart"] });
    google.setOnLoadCallback(drawChart);
});
function drawChart() {
    var options = {
        legend: { position: 'top', maxLines: 3, textStyle: { color: 'black', fontSize: 16 } },
        isStacked: true,
        colors: ['#FF0000', '#ffbf00', '#32CD32'],
        vAxis: {
            minValue: 0,
            ticks: [0, 3, 6, 9]
        }
    };
    $.ajax({
        url: "http://10.11.200.40:2121/api/feedbackresponse?vertical=LS&" + "flag=" + false,
        type: 'GET',
        datatype: 'json',
        success: function (r) {
            var data = google.visualization.arrayToDataTable(r);
            var chart = new google.visualization.ColumnChart(document.getElementById('ls'));
            chart.draw(data, options);
        },
        failure: function (r) {
            alert(r.d);
        },
        error: function (r) {
            alert(r.d);
        }
    });
    $.ajax({
        url: "http://10.11.200.40:2121/api/feedbackresponse?vertical=CE&" + "flag=" + false,
        type: 'GET',
        datatype: 'json',
        success: function (r) {
            var data = google.visualization.arrayToDataTable(r);
            var chart = new google.visualization.ColumnChart(document.getElementById('ce'));
            chart.draw(data, options);

            google.visualization.events.addListener(chart, 'select', selectHandler);
            function selectHandler(e) {
                var selection = chart.getSelection();
                if (selection.length > 0) {
                    var colLabel = data.getColumnLabel(selection[0].column);
                    var mydata = data.getValue(selection[0].row, 0);

                    BindTable('CE', colLabel, mydata);
                    chart.setSelection([]);
                }
            }
        },
        failure: function (r) {
            alert(r.d);
        },
        error: function (r) {
            alert(r.d);
        }
    });
    $.ajax({
        url: "http://10.11.200.40:2121/api/feedbackresponse?vertical=FS&" + "flag=" + false,
        type: 'GET',
        datatype: 'json',
        success: function (r) {
            var data = google.visualization.arrayToDataTable(r);
            var chart = new google.visualization.ColumnChart(document.getElementById('fs'));
            chart.draw(data, options);
        },
        failure: function (r) {
            alert(r.d);
        },
        error: function (r) {
            alert(r.d);
        }
    });
    $.ajax({
        url: "http://10.11.200.40:2121/api/feedbackresponse?vertical=BO&" + "flag=" + false,
        type: 'GET',
        datatype: 'json',
        success: function (r) {
            var data = google.visualization.arrayToDataTable(r);
            var chart = new google.visualization.ColumnChart(document.getElementById('bo'));
            chart.draw(data, options);

            google.visualization.events.addListener(chart, 'select', selectHandler);
            function selectHandler(e) {
                var selection = chart.getSelection();
                if (selection.length > 0) {
                    var colLabel = data.getColumnLabel(selection[0].column);
                    var mydata = data.getValue(selection[0].row, 0);
                    BindTable('BO', colLabel, mydata);
                    chart.setSelection([]);
                }
            }
        },
        failure: function (r) {
            alert(r.d);
        },
        error: function (r) {
            alert(r.d);
        }
    });
}