async function attachEvents() {
    let url = `http://localhost:3030/jsonstore/forecaster/locations`;
    let submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', submitFunc);
    const location = document.getElementById('location');
    const forecastDiv = document.getElementById('forecast')
    const currentWeather = document.getElementById('current');
    const upcomingWeather = document.getElementById('upcoming');

    async function submitFunc() {

        try {
            const response = await fetch(url);
            if (response.ok == false) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            for (let element of data) {
                if (location.value == element.name) {
                    let code = element.code;
                    getWeather(code);
                }
            }
        } catch (error) {
            forecastDiv.style.display = '';
            forecastDiv.textContent = 'Error'
        }

        async function getWeather(code) {
            let currentUrl = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
            let upcomingUrl = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;

            try {
                const secondResponse = await fetch(currentUrl);
                if (secondResponse.ok == false) {
                    throw new Error(`${secondResponse.status} ${secondResponse.statusText}`);
                }
                const secondData = await secondResponse.json();

                const divForecasts = document.createElement('div')
                divForecasts.setAttribute('class', 'forecasts')
                let newSpanSymbol = document.createElement('span');
                newSpanSymbol.setAttribute('class', 'condition symbol')

                if (secondData.forecast.condition == 'Sunny') {
                    forecastDiv.style.display = '';
                    newSpanSymbol.textContent = '☀';
                    divForecasts.appendChild(newSpanSymbol);
                } else if (secondData.forecast.condition == 'Partly sunny') {
                    forecastDiv.style.display = '';
                    newSpanSymbol.textContent = '⛅';
                    divForecasts.appendChild(newSpanSymbol);
                } else if (secondData.forecast.condition == 'Overcast') {
                    forecastDiv.style.display = '';
                    newSpanSymbol.textContent = '☁';
                    divForecasts.appendChild(newSpanSymbol);
                } else if (secondData.forecast.condition == 'Rain') {
                    forecastDiv.style.display = '';
                    newSpanSymbol.textContent = '☂';
                    divForecasts.appendChild(newSpanSymbol);
                }
                let conditionSpan = document.createElement('span')
                conditionSpan.setAttribute('class', 'condition')

                let newSpan1 = document.createElement('span')
                newSpan1.setAttribute('class', 'forecast-data')
                newSpan1.textContent = secondData.name;
                conditionSpan.appendChild(newSpan1)

                let newSpan2 = document.createElement('span')
                newSpan2.setAttribute('class', 'forecast-data')
                newSpan2.textContent = `${secondData.forecast.low}°/${secondData.forecast.high}°`;
                conditionSpan.appendChild(newSpan2)

                let newSpan3 = document.createElement('span')
                newSpan3.setAttribute('class', 'forecast-data')
                newSpan3.textContent = `${secondData.forecast.condition}`;
                conditionSpan.appendChild(newSpan3)

                divForecasts.appendChild(conditionSpan)

                currentWeather.appendChild(divForecasts)
                console.log(secondData);
                //forecastDiv.textContent = '';
            } catch (error) {
                forecastDiv.style.display = '';
                forecastDiv.textContent = 'Error'

            }

            try {

                const thirdResponse = await fetch(upcomingUrl);
                if (thirdResponse.ok == false) {
                    throw new Error(`${response.status} ${response.statusText}`);
                }
                const thirdData = await thirdResponse.json();

                let forecastInfoDiv = document.createElement('div')
                forecastInfoDiv.setAttribute('class', 'forecast-info');
                let currentSymbol;
                for (let element of thirdData.forecast) {
                    if (element.condition == 'Sunny') {
                        currentSymbol = '☀';
                    } else if (element.condition == 'Partly sunny') {
                        currentSymbol = '⛅'
                    } else if (element.condition == 'Overcast') {
                        currentSymbol = '☁'
                    } else if (element.condition == 'Rain') {
                        currentSymbol = '☂'
                    }
                    forecastInfoDiv.innerHTML += `<span class = 'upcoming'>
                <span class = 'symbol'>${currentSymbol}</span>
                <span class = 'forecast-data'>${element.low}°/${element.high}° </span>
                <span class = 'forecast-data'>${element.condition}</span>
                </span>`
                    upcomingWeather.appendChild(forecastInfoDiv)
                }
                console.log(thirdData)

            } catch (error) {
                forecastDiv.style.display = '';
                forecastDiv.textContent = 'Error'

            }

        }
    }
}

attachEvents();