function attachEventsListeners() {
    let inputUnits = document.getElementById('inputUnits');
    let outputUnits = document.getElementById('outputUnits');
    let input = document.getElementById('inputDistance');
    let output = document.getElementById('outputDistance');
    let convertBtn = document.getElementById('convert')
    convertBtn.addEventListener('click', function (e) {
        let currentInput = inputUnits.selectedOptions[0].textContent;
        let currentOutput = outputUnits.selectedOptions[0].textContent;
        //console.log(currentOutput)
        //console.log(input.value)
        //console.log(output.value)
        switch (currentInput) {
            case 'Kilometers':
                switch (currentOutput) {
                    case 'Kilometers': output.value = Number(input.value); break;
                    case 'Meters': output.value = Number(input.value)*1000; break;
                    case 'Centimeters': output.value = Number(input.value)*1000000; break;
                    case 'Milimeters': output.value = Number(input.value)*10000000; break;
                    case 'Miles': output.value = Number(input.value)*0.62; break;
                    case 'Yards': output.value = Number(input.value)*1093.61; break;
                    case 'Feet': output.value = Number(input.value)*3280.84; break;
                    case 'Inches': output.value = Number(input.value)*39370.08; break;
                }; break;
            case 'Meters':
                switch (currentOutput) {
                    case 'Kilometers': output.value = Number(input.value)*0.001; break;
                    case 'Meters': output.value = Number(input.value); break;
                    case 'Centimeters': output.value = Number(input.value)*100; break;
                    case 'Milimeters': output.value = Number(input.value)*1000; break;
                    case 'Miles': output.value = Number(input.value)*0.00062; break;
                    case 'Yards': output.value = Number(input.value)*1.09; break;
                    case 'Feet': output.value = Number(input.value)*3.28; break;
                    case 'Inches': output.value = Number(input.value)*39.37; break;
                }; break;
            case 'Centimeters':
                switch (currentOutput) {
                    case 'Kilometers': output.value = Number(input.value)/100000; break;
                    case 'Meters': output.value = Number(input.value)/100; break;
                    case 'Centimeters': output.value = Number(input.value); break;
                    case 'Milimeters': output.value = Number(input.value)*10; break;
                    case 'Miles': output.value = Number(input.value)/160934.4; break;
                    case 'Yards': output.value = Number(input.value)*0.0109; break;
                    case 'Feet': output.value = Number(input.value)*0.0328; break;
                    case 'Inches': output.value = Number(input.value)*0.394; break;
                }; break;
            case 'Milimeters':
                switch (currentOutput) {
                    case 'Kilometers': output.value = Number(input.value)/1000000; break;
                    case 'Meters': output.value = Number(input.value)/1000; break;
                    case 'Centimeters': output.value = Number(input.value)/10; break;
                    case 'Milimeters': output.value = Number(input.value); break;
                    case 'Miles': output.value = Number(input.value)/1609344; break;
                    case 'Yards': output.value = Number(input.value)*0.0011; break;
                    case 'Feet': output.value = Number(input.value)*0.00328; break;
                    case 'Inches': output.value = Number(input.value)*0.0394; break;
                }; break;
            case 'Miles':
                switch (currentOutput) {
                    case 'Kilometers': output.value = Number(input.value)*1.609; break;
                    case 'Meters': output.value = Number(input.value)*1609.34; break;
                    case 'Centimeters': output.value = Number(input.value)*160934.4; break;
                    case 'Milimeters': output.value = Number(input.value)*1609344; break;
                    case 'Miles': output.value = Number(input.value); break;
                    case 'Yards': output.value = Number(input.value)*1760; break;
                    case 'Feet': output.value = Number(input.value)*5280; break;
                    case 'Inches': output.value = Number(input.value)*63360; break;
                }; break;
            case 'Yards':
                switch (currentOutput) {
                    case 'Kilometers': output.value = Number(input.value)*0.0009144; break;
                    case 'Meters': output.value = Number(input.value)*0.9144; break;
                    case 'Centimeters': output.value = Number(input.value)*91.44; break;
                    case 'Milimeters': output.value = Number(input.value)*914.4; break;
                    case 'Miles': output.value = Number(input.value)*0.00057; break;
                    case 'Yards': output.value = Number(input.value); break;
                    case 'Feet': output.value = Number(input.value)*3; break;
                    case 'Inches': output.value = Number(input.value)*36; break;
                }; break;
            case 'Feet':
                switch(currentOutput) {
                    case 'Kilometers': output.value = Number(input.value)*0.0003048; break;
                    case 'Meters': output.value = Number(input.value)*0.3048; break;
                    case 'Centimeters': output.value = Number(input.value)*30.48; break;
                    case 'Milimeters': output.value = Number(input.value)*304.8; break;
                    case 'Miles': output.value = Number(input.value)*0.0001894; break;
                    case 'Yards': output.value = Number(input.value)*0.333; break;
                    case 'Feet': output.value = Number(input.value); break;
                    case 'Inches': output.value = Number(input.value)*12; break;  
                }; break;
            case 'Inches':
                switch(currentOutput) {
                    case 'Kilometers': output.value = Number(input.value)*0.0000254; break;
                    case 'Meters': output.value = Number(input.value)*0.0254; break;
                    case 'Centimeters': output.value = Number(input.value)*2.54; break;
                    case 'Milimeters': output.value = Number(input.value)*25.4; break;
                    case 'Miles': output.value = Number(input.value)/63360; break;
                    case 'Yards': output.value = Number(input.value)*0.028; break;
                    case 'Feet': output.value = Number(input.value)*0.08; break;
                    case 'Inches': output.value = Number(input.value); break;  
                }; break;
        }

    })


}