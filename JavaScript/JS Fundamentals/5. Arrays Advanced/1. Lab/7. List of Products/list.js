function shopList (arr){
    let sortShopList = arr.sort();
    for (let i = 0; i<sortShopList.length; i++){
        console.log(`${i+1}.${sortShopList[i]}`)
    }


}