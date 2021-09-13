function area(input) {

    let figure = String(input[0]);
    let areaOfFigure;

    if (figure === "square") {
        let stranaA = Number(input[1]);
        areaOfFigure = stranaA * stranaA;
        console.log(areaOfFigure.toFixed(3));
    }
    else if (figure === "rectangle") {
        let stranaA = Number(input[1]);
        let stranaB = Number(input[2]);
        areaOfFigure = stranaA * stranaB;
        console.log(areaOfFigure.toFixed(3));
    }
    else if (figure === "circle") {
        let radius = Number(input[1]);
        areaOfFigure = Math.PI * radius * radius;
        console.log(areaOfFigure.toFixed(3));
    }
    else if (figure === "triangle") {
        let strana = Number(input[1]);
        let visochinaKumStrana = Number(input[2]);
        areaOfFigure = (strana * visochinaKumStrana) / 2;
        console.log(areaOfFigure.toFixed(3));
    }
}
area ()