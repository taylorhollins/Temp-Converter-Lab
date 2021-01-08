function convertToc() {
    let fahrenheit = document.getElementById("inputKG").value; 
    let celsiusTemp = (fahrenheit - 32) * (5/9);
    return document.getElementById("celsConverted").innerHTML = celsiusTemp;
  }




  