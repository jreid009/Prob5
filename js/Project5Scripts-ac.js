function GetAllCustomers()
{
    var getAllCustomers=new XMLHttpRequest();  //Create AJAX request object
    
    //Create URL and Query string
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getAllCustomers";
    //url+=document.getElementById("showarea1").value;
    //Checks that the object has returned data
    getAllCustomers.onreadystatechange = function()
    {
        if (getAllCustomers.readyState == 4 && getAllCustomers.status == 200)
        {
            var output = JSON.parse(getAllCustomers.responseText);
            GenerateOutput(output);
        }
    }
    //Initiate the server request
    getAllCustomers.open("GET",url,true);
    getAllCustomers.send();
    
}

function GenerateOutput(output)
{
    var Count  = 0;
    var displaytext = "";
    
    //Loop to extract data from the response object
    for (Count = 0;Count < output.GetAllCustomersResult.length; Count++)
    {
         displaytext += "<table>" +"<tr><th>Company Name: </th><td>" + output.GetAllCustomersResult[Count].CompanyName + "</td></tr>" +
         "<tr><th>Customer ID: </th><td>"+ output.GetAllCustomersResult[Count].CustomerID + "</td></td>" +
         "<tr><th>City: </th><td>"+ output.GetAllCustomersResult[Count].City +"</td></tr>" +"</table>" + "<br>";
        
    }
    
    document.getElementById("ordernames").innerHTML = displaytext;
}