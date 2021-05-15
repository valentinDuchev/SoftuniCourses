function comissions(input) {
    let city = input[0];
    let sales = input[1];
 
    let comission=Number();
 
    if (sales >=0 && sales <=500) {
       switch (city) {
          case "Sofia": comission=sales/20; console.log(comission.toFixed(2)); break;
          case "Varna": comission=sales*(4.5/100); console.log(comission.toFixed(2)); break;
          case "Plovdiv": comission=sales*(5.5/100); console.log(comission.toFixed(2)); break;
          default: console.log("error"); break;
       }
    } else if (sales>500 && sales<=1000) {
       switch (city) {
          case "Sofia": comission=sales*(7/100); console.log(comission.toFixed(2)); break;
          case "Varna": comission=sales*(7.5/100); console.log(comission.toFixed(2)); break;
          case "Plovdiv": comission=sales*(8/100); console.log(comission.toFixed(2)); break;
          default: console.log("error"); break;
       }
    } else if (sales >1000 && sales <=10000) {
       switch (city) {
          case "Sofia": comission=sales*(8/100); console.log(comission.toFixed(2)); break;
          case "Varna": comission=sales*(10/100); console.log(comission.toFixed(2)); break;
          case "Plovdiv": comission=sales*(12/100); console.log(comission.toFixed(2)); break;
          default: console.log("error"); break;
       }
    }else if (sales >1000) {
       switch (city) {
          case "Sofia": comission=sales*(12/100); console.log(comission.toFixed(2)); break;
          case "Varna": comission=sales*(13/100); console.log(comission.toFixed(2)); break;
          case "Plovdiv": comission=sales*(14.5/100); console.log(comission.toFixed(2)); break;
          default: console.log("error"); break;
       }
    } else {
       console.log("error");
    }
 }