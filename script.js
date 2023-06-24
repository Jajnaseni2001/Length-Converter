function convertLength() {
    var inputLength = document.getElementById("input-length").value;
    var fromUnit = document.getElementById("from-unit").value;
    var toUnit = document.getElementById("to-unit").value;
  
    var convertedLength;
    
    // Convert length based on selected units
    if (fromUnit === toUnit) {
      convertedLength = inputLength; // No conversion needed
    } else if (fromUnit === "meter") {
      if (toUnit === "kilometer") {
        convertedLength = inputLength / 1000;
      } else if (toUnit === "mile") {
        convertedLength = inputLength * 0.000621371;
      } else if (toUnit === "yard") {
        convertedLength = inputLength * 1.09361;
      } else if (toUnit === "feet") {
        convertedLength = inputLength * 3.28084;
      }
    } else if (fromUnit === "kilometer") {
      // Implement conversions from kilometer to other units if needed
    }
    // Add more conditions for other conversion possibilities
  
    document.getElementById("output-length").textContent = convertedLength.toFixed(2);
  }