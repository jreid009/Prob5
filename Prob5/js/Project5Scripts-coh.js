function GetCustomerOrderHistory()
{
    var getCustomerOrderHistory=new XMLHttpRequest();  //Create AJAX request object
    
    //Create URL and Query string
    var url= "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getCustomerOrderHistory/Koene";
    //url+=document.getElementById("custy").value;
    
    //Checks that the object has returned data
    getCustomerOrderHistory.onreadystatechange = function()
    {
        if (getCustomerOrderHistory.readyState == 4 && getCustomerOrderHistory.status == 200)
        {
             GenerateOutputToo(getCustomerOrderHistory.responseText);
            
        }
    }
    //Initiate the server request
    getCustomerOrderHistory.open("GET",url,true);
    getCustomerOrderHistory.send();
    
}

function GenerateOutputToo(response) {
    var arr = JSON.parse(response);
    var i = 0;
    var out = "<table>";

    for(i = 0; i < arr.length; i++) {
        out += "<tr><th>Product Name: </th><td>" +
        arr[i].ProductName +
        "</td><th>Total: </th><td>" +
        arr[i].Total +
        "</td></tr>";
    }
    out += "</table>"
    document.getElementById("orderhistory").innerHTML = out;
}