/ from data.js
// use d3 to locate tbody in html and name it tbody.
var tbody = d3.select("tbody");
// append one table row 'tr' for each ufo data object.
// use 'Object.entries' to console.log each ufo data value.
data.forEach(function(ufodata){
   var row = tbody.append("tr");
   Object.entries(ufodata).forEach(function([key,value]){
       console.log(key,value);
       //append a cell to the row for each value
       var cell = row.append('td')
       cell.text(value);
   });
});
// select the filter button
var filtered = d3.select('#filter-btn');
filtered.on('click', function(){
   d3.event.preventDefault();
   // select input element and get the raw html node
   var inputElement = d3.select('#datetime');
   //get the value property of the input element
   var inputValue = inputElement.property('value')
   console.log(inputValue);
   console.log(data);
   var filteredData = data.filter(i => i.datetime === inputValue);
   console.log(filteredData);
   //remove contents in table.
   tbody.html("");
   // append filtered data to html
   filteredData.forEach((ufodata) => {
       var row = tbody.append('tr');
       Object.entries(ufodata).forEach(([key,value]) => {
           var cell = row.append('td');
           cell.text(value);
       });
   });
});
Tejas Pandey 8:04 PM
window.onload = function(){
  init();
};

//Function to populate the table
var populateTable = function(table, tableData, filterDate) {

    var i;
    for (i = 0; i < tableData.length; i++) {

        if (filterDate == "") {
            // Create an empty <tr> element and add it to the 1st position of the table:
            var row = table.insertRow(i + 1);

            // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);
            var cell7 = row.insertCell(6);

            // Add some text to the new cells:
            cell1.innerHTML = tableData[i]["datetime"];
            cell2.innerHTML = tableData[i]["city"];
            cell3.innerHTML = tableData[i]["state"];
            cell4.innerHTML = tableData[i]["country"];
            cell5.innerHTML = tableData[i]["shape"];
            cell6.innerHTML = tableData[i]["durationMinutes"];
            cell7.innerHTML = tableData[i]["comments"];
        } else {

            var newRowCount = 0

            if (filterDate == tableData[i]["datetime"]) {
                var row = table.insertRow(newRowCount + 1);

                // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                var cell6 = row.insertCell(5);
                var cell7 = row.insertCell(6);

                // Add some text to the new cells:
                cell1.innerHTML = tableData[i]["datetime"];
                cell2.innerHTML = tableData[i]["city"];
                cell3.innerHTML = tableData[i]["state"];
                cell4.innerHTML = tableData[i]["country"];
                cell5.innerHTML = tableData[i]["shape"];
                cell6.innerHTML = tableData[i]["durationMinutes"];
                cell7.innerHTML = tableData[i]["comments"];

                newRowCount++
            };


        };

  };
};

var init =  function() {

    //Initialize Variables
    var tableData = data;
    var table = document.getElementById("ufo-table");
    var button = document.getElementById("filter-btn");
    var dateField = document.getElementById("datetime")

    filterDate = ""

    //Populate Table
    populateTable(table, tableData, filterDate);

    //Add a listener to the button and fire populate table with value of
    button.addEventListener("submit", populateTable(table, tableData, dateField.value));

};