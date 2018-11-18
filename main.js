Plotly.plot('chart', [{
    x: [],
    y: [],
    mode: 'lines',
    line: { color: '#80CAF6' }
}, {
    x: [],
    y: [],
    mode: 'lines',
    line: { color: '#DF56F1' }
}]);

if (typeof (EventSource) !== "undefined") {
    var source = new EventSource("http://vmzakova.fei.stuba.sk/sse/sse.php");
    var listen = true;

    source.addEventListener("message", function (e) {
        var dataSource = JSON.parse(e.data);

        if(listen){
            mainFunction(dataSource);
        }else{
            this.removeEventListener("message", arguments.callee);
        }
    }, false);

} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support server-sent events...";
}


function mainFunction(data) {
    console.log("X: " + data.x + "    Y1: " + data.y1);
    console.log("X: " + data.x + "    Y1: " + data.y2);
    console.log("----------------------------------------");

    Plotly.extendTraces('chart', {
        x: [[data.x], [data.x]],
        y: [[data.y1], [data.y2]]
    }, [0, 1])


}
