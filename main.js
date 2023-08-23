function Calculate()
{
  var FirstValue = document.getElementById("FirstNumber").value;
  var SecondValue = document.getElementById("SecondNumber").value;
  var ThirdValue = document.getElementById("ThirdNumber").value;
  
  if ( FirstValue == 2 )
  {
    if ( SecondValue == 28 )
    {
      if ( ThirdValue == 1 )
      {
        document.getElementById("instruction1").innerHTML = "Trim top panel";
        document.getElementById("instruction2").innerHTML = "Reduce middle panel";
        document.getElementById("instruction3").innerHTML = "Throttle bottom panel";
      }
      else if ( ThirdValue == 2 )
      {
        document.getElementById("instruction1").innerHTML = "Increase top panel";
        document.getElementById("instruction2").innerHTML = "Enhance middle panel";
        document.getElementById("instruction3").innerHTML = "Throttle bottom panel";
      }
      else if (ThirdValue == 3 )
      {
        document.getElementById("instruction1").innerHTML = "Throttle bottom panel";
        document.getElementById("instruction2").innerHTML = "";
        document.getElementById("instruction3").innerHTML = "";
      }
    }
    else if ( SecondValue == 49 )
    {
      if ( ThirdValue == 1 )
      {
        document.getElementById("instruction1").innerHTML = "Increase top panel";
        document.getElementById("instruction2").innerHTML = "Boost bottom panel";
        document.getElementById("instruction3").innerHTML = "Reduce middle panel";
      }
      else if ( ThirdValue == 2 )
      {
        document.getElementById("instruction1").innerHTML = "Enhance middle panel";
        document.getElementById("instruction2").innerHTML = "Boost bottom panel";
        document.getElementById("instruction3").innerHTML = "";
      }
      else if (ThirdValue == 3 )
      {
        document.getElementById("instruction1").innerHTML = "Increase top panel";
        document.getElementById("instruction2").innerHTML = "Boost bottom panel";
        document.getElementById("instruction3").innerHTML = "";
      }
    }
    else if ( SecondValue == 65 )
    {
      if ( ThirdValue == 1 )
      {
        document.getElementById("instruction1").innerHTML = "Reduce middle panel";
        document.getElementById("instruction2").innerHTML = "";
        document.getElementById("instruction3").innerHTML = "";
      }
      else if ( ThirdValue == 2 )
      {
        document.getElementById("instruction1").innerHTML = "Trim top panel";
        document.getElementById("instruction2").innerHTML = "Enhance middle panel";
        document.getElementById("instruction3").innerHTML = "";
      }
      else if (ThirdValue == 3 )
      {
        document.getElementById("instruction1").innerHTML = "Increase top panel";
        document.getElementById("instruction2").innerHTML = "";
        document.getElementById("instruction3").innerHTML = "";
      }
    }
  }
  else if ( FirstValue == 8 )
  {
    if ( SecondValue == 28 )
    {
      if ( ThirdValue == 1 )
      {
        document.getElementById("instruction1").innerHTML = "Trim top panel";
        document.getElementById("instruction2").innerHTML = "";
        document.getElementById("instruction3").innerHTML = "";
      }
      else if ( ThirdValue == 2 )
      {
        document.getElementById("instruction1").innerHTML = "Increase top panel";
        document.getElementById("instruction2").innerHTML = "Reduce middle panel";
        document.getElementById("instruction3").innerHTML = "";
      }
      else if (ThirdValue == 3 )
      {
        document.getElementById("instruction1").innerHTML = "Enhance middle panel";
        document.getElementById("instruction2").innerHTML = "";
        document.getElementById("instruction3").innerHTML = "";
      }
    }
    else if ( SecondValue == 49 )
    {
      if ( ThirdValue == 1 )
      {
        document.getElementById("instruction1").innerHTML = "Increase top panel";
        document.getElementById("instruction2").innerHTML = "Throttle bottom panel";
        document.getElementById("instruction3").innerHTML = "";
      }
      else if ( ThirdValue == 2 )
      {
        document.getElementById("instruction1").innerHTML = "Reduce middle panel";
        document.getElementById("instruction2").innerHTML = "Throttle bottom panel";
        document.getElementById("instruction3").innerHTML = "";
      }
      else if (ThirdValue == 3 )
      {
        document.getElementById("instruction1").innerHTML = "Trim top panel";
        document.getElementById("instruction2").innerHTML = "Enhance middle panel";
        document.getElementById("instruction3").innerHTML = "Throttle bottom panel";
      }
    }
    else if ( SecondValue == 65 )
    {
      if ( ThirdValue == 1 )
      {
        document.getElementById("instruction1").innerHTML = "Boost bottom panel";
        document.getElementById("instruction2").innerHTML = "";
        document.getElementById("instruction3").innerHTML = "";
      }
      else if ( ThirdValue == 2 )
      {
        document.getElementById("instruction1").innerHTML = "Trim top panel";
        document.getElementById("instruction2").innerHTML = "Reduce middle panel";
        document.getElementById("instruction3").innerHTML = "Boost bottom panel";
      }
      else if (ThirdValue == 3 )
      {
        document.getElementById("instruction1").innerHTML = "Increase top panel";
        document.getElementById("instruction2").innerHTML = "Enhance middle panel";
        document.getElementById("instruction3").innerHTML = "Boost bottom panel";
      }
    }
  }
  else if ( FirstValue == 14 )
  {
    if ( SecondValue == 28 )
    {
      if ( ThirdValue == 1 )
      {
        document.getElementById("instruction1").innerHTML = "Trim top panel";
        document.getElementById("instruction2").innerHTML = "Enhance middle panel";
        document.getElementById("instruction3").innerHTML = "Boost bottom panel";
      }
      else if ( ThirdValue == 2 )
      {
        document.getElementById("instruction1").innerHTML = "Increase top panel";
        document.getElementById("instruction2").innerHTML = "Boost bottom panel";
        document.getElementById("instruction3").innerHTML = "";
      }
      else if (ThirdValue == 3 )
      {
        document.getElementById("instruction1").innerHTML = "Reduce middle panel";
        document.getElementById("instruction2").innerHTML = "Boost bottom panel";
        document.getElementById("instruction3").innerHTML = "";
      }
    }
    else if ( SecondValue == 49 )
    {
      if ( ThirdValue == 1 )
      {
        document.getElementById("instruction1").innerHTML = "Increase top panel";
        document.getElementById("instruction2").innerHTML = "Enhance middle panel";
        document.getElementById("instruction3").innerHTML = "";
      }
      else if ( ThirdValue == 2 )
      {
        document.getElementById("instruction1").innerHTML = "You are done!";
        document.getElementById("instruction2").innerHTML = "";
        document.getElementById("instruction3").innerHTML = "";
      }
      else if (ThirdValue == 3 )
      {
        document.getElementById("instruction1").innerHTML = "Trim top panel";
        document.getElementById("instruction2").innerHTML = "Reduce middle panel";
        document.getElementById("instruction3").innerHTML = "";
      }
    }
    else if ( SecondValue == 65 )
    {
      if ( ThirdValue == 1 )
      {
        document.getElementById("instruction1").innerHTML = "Enhance middle panel";
        document.getElementById("instruction2").innerHTML = "Throttle bottom panel";
        document.getElementById("instruction3").innerHTML = "";
      }
      else if ( ThirdValue == 2 )
      {
        document.getElementById("instruction1").innerHTML = "Trim top panel";
        document.getElementById("instruction2").innerHTML = "Throttle bottom panel";
        document.getElementById("instruction3").innerHTML = "";
      }
      else if (ThirdValue == 3 )
      {
        document.getElementById("instruction1").innerHTML = "Increase top panel";
        document.getElementById("instruction2").innerHTML = "Reduce middle panel";
        document.getElementById("instruction3").innerHTML = "Throttle bottom panel";
      }
    }
  }
}