function MenuChoice()
{
    
     if (document.getElementById("menu").value == "All Customers")
    {
        document.getElementById("showarea1").style.visibility = "visible";
        document.getElementById("showarea2").style.visibility = "hidden";
        document.getElementById("showarea3").style.visibility = "hidden";
    }
    else if  (document.getElementById("menu").value == "Customer Order History")
    {
        document.getElementById("showarea1").style.visibility = "hidden";
        document.getElementById("showarea2").style.visibility = "visible";
        document.getElementById("showarea3").style.visibility = "hidden";
    }
     else if  (document.getElementById("menu").value == "Orders For Customer")
    {
        document.getElementById("showarea1").style.visibility = "hidden";
        document.getElementById("showarea2").style.visibility = "hidden";
        document.getElementById("showarea3").style.visibility = "visible";
    }
    else 
    {
      document.getElementById("showarea1").style.visibility = "hidden";
      document.getElementById("showarea2").style.visibility = "hidden";
      document.getElementById("showarea3").style.visibility = "hidden";
    }
}
    
    

