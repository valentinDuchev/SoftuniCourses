function sum (arr){
    let sum = 0;
    for (let i = 0; i<arr.length; i++){
        let num =Number(arr[i]); //parse-ваме всеки елемент от масива към число
        if (num%2==0){
            sum+=num;
        }
    }
    console.log(sum)
    

}