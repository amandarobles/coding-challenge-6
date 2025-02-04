// task 1: Function Declaration

//Calculating total Profit
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold;
        console.log(`Total Profit: $ ${profit}`);
}

//Test cases
calculateProfit(20, 30, 100);
calculateProfit(50, 70, 200);