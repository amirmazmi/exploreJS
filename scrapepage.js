/// Scrape some table data and download as csv

function exportTableToCSV(filename) {
	function downloadCSV(csv, filename) {
	    var csvFile;
	    var downloadLink;
	
	    // CSV file
	    csvFile = new Blob([csv], {type: "text/csv"});
	
	    // Download link
	    downloadLink = document.createElement("a");
	
	    // File name
	    downloadLink.download = filename;
	
	    // Create a link to the file
	    downloadLink.href = window.URL.createObjectURL(csvFile);
	
	    // Hide download link
	    downloadLink.style.display = "none";
	
	    // Add the link to DOM
	    document.body.appendChild(downloadLink);
	
	    // Click download link
	    downloadLink.click();
	}

	// first we get the headers

	var csv = []
	var colhead = []
	var colnames = document.querySelectorAll("table[class=ui-jqgrid-htable] > thead > tr > th");
	
	for (var j = 0; j < colnames.length; j++) {
		colhead.push(colnames[j].innerText.replaceAll(/\"/gm,""));
	}

	// there are some newlines in each header - replace        
	csv.push(colhead.join(",").replaceAll(/(\r\n|\n|\r)/gm, ""));        

	// next we get the data
	var rows = document.querySelectorAll("#grid_id > tbody > tr[class*=jqgrow]");
	
	for (var i = 0; i < rows.length; i++) {
		var row = [], cols = rows[i].querySelectorAll("span");
		
		for (var j = 0; j < cols.length; j++) {
			if( [1,2,3].includes(j) ){ continue;}
			row.push(cols[j].innerText);
		}
		
		csv.push(row.join(","));        
	}

	// Download CSV file
	downloadCSV(csv.join("\n"), filename);

}

exportTableToCSV('try.csv')

