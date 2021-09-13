

setInterval(function() {
  // Call a function repetatively with 2 Second interval
  getData();
}, 200);
//miliSeconds update rate


function getData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // get result
            ajaxData = JSON.parse(this.responseText);
            // do something here
        };
    };
    xhttp.open("GET", "data", true);
    xhttp.send();
}


