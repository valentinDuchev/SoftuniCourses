function attachEventsListeners() {

    let daysBtn = document.getElementById('daysBtn').addEventListener('click', days);
    let hoursBtn = document.getElementById('hoursBtn').addEventListener('click', hours);
    let minutesBtn = document.getElementById('minutesBtn').addEventListener('click', minutes);
    let secondsBtn = document.getElementById('secondsBtn').addEventListener('click', seconds);
    //---------------------------------
    function days() {
        let daysNum = Number(document.getElementById('days').value);
        let hoursNum = document.getElementById('hours');
        let minutesNum = document.getElementById('minutes');
        let secondsNum = document.getElementById('seconds');
        hoursNum.value = daysNum * 24;
        minutesNum.value = Number(hoursNum.value) * 60;
        secondsNum.value = Number(minutesNum.value) * 60;
    }
    //---------------------------------
    function hours() {
        let hoursNum = Number(document.getElementById('hours').value);
        let daysNum = document.getElementById('days');
        let minutesNum = document.getElementById('minutes');
        let secondsNum = document.getElementById('seconds');

        daysNum.value = Number(hoursNum) / 24;
        minutesNum.value = Number(hoursNum) * 60;
        secondsNum.value = Number(minutesNum.value) * 60;
    }
    //---------------------------------
    function minutes() {
        let daysNum = (document.getElementById('days'));
        let hoursNum = document.getElementById('hours');
        let minutesNum = document.getElementById('minutes').value;
        let secondsNum = document.getElementById('seconds');

        hoursNum.value = Number(minutesNum) / 60;
        secondsNum.value = Number(minutesNum) * 60;
        daysNum.value = Number(hoursNum.value) / 24;


    }
    //----------------------------------
    function seconds() {
        let daysNum = (document.getElementById('days'));
        let hoursNum = document.getElementById('hours');
        let minutesNum = document.getElementById('minutes');
        let secondsNum = document.getElementById('seconds');

        minutesNum.value = Number(secondsNum.value) / 60;
        hoursNum.value = Number(minutesNum.value) / 60;
        daysNum.value = Number(hoursNum.value) / 24;

    }
    //----------------------------------  
}