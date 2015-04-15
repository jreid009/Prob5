function GetOrdersForCustomer()
{
    var getOrdersForCustomer=new XMLHttpRequest();  //Create AJAX request object
    
    //Create URL and Query string
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getOrdersForCustomer/Alfki";
    //url+=document.getElementById("custid").value;
    
    //Checks that the object has returned data
    getOrdersForCustomer.onreadystatechange = function()
    {
        if (getOrdersForCustomer.readyState == 4 && getOrdersForCustomer.status == 200)
        {
            var output = JSON.parse(getOrdersForCustomer.responseText);
            GenerateOutputTwo(output);
        }
    }
    //Initiate the server request
    getOrdersForCustomer.open("GET", url,true);
    getOrdersForCustomer.send();
    
}

function GenerateOutputTwo(output)
{
    var row  = 0;
    var displaytext = "";
    
    
    //Loop to extract data from the response object
    for (row = 0;row < output.GetOrdersForCustomerResult.length; row++)
    {
        displaytext += "<table>" +"<tr><th>Order Date: </th><td>" + output.GetOrdersForCustomerResult[row].OrderDate + "</td></tr>" +
        "<tr><th><br>Order ID: </th><td>" + output.GetOrdersForCustomerResult[row].OrderID  + "</td></tr>" +
        "<tr><th><br>Ship Address </th><td>" + output.GetOrdersForCustomerResult[row].ShipAddress + "</td></tr>" +
        "<tr><th><br>Ship City </th><td>" + output.GetOrdersForCustomerResult[row].ShipCity + "</td></tr>" +
        "<tr><th><br>Ship Name </th><td>" + output.GetOrdersForCustomerResult[row].ShipName + "</td></tr>" +
        "<tr><th><br>Ship Post Code </th><td>" + output.GetOrdersForCustomerResult[row].ShipPostcode + "</td></tr>" +
        "<tr><th><br>Ship Date </th><td>" + output.GetOrdersForCustomerResult[row].ShipDate + "</table>"+"<br>";
        
        
    }
   
    //displaytext+="</table>"
    
    document.getElementById("orderdisplay").innerHTML = displaytext;
}