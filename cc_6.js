// task 1: Function Declaration

//Calculating total Profit
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold;
        console.log(`Total Profit: $ ${profit}`);
}

//Test data
calculateProfit(20, 30, 100);
calculateProfit(50, 70, 200);

// task 2: Function Expression

//Calculating sales tax using function expression
const calculateSalesTax = function(amount, taxRate) {
    let tax = amount * taxRate;
    console.log(`Sales Tax: $ ${tax}`);
};

//Test data
calculateSalesTax(100, 0.07);
calculateSalesTax(500, 0.1);

// task 3: Arrow Function

//Determining bonus
const calculateBonus = (salary, performanceRating) => {
    let bonusRate = 0;
    if (performanceRating === "Excellent") bonusRate = 0.2;
    else if (performanceRating === "Good") bonusRate = 0.1;
    else if (performanceRating === "Average") bonusRate = 0.05;

    let bonus = salary * bonusRate;
    console.log(`Bonus: $${bonus}`);
};

//Test data
calculateBonus(5000, "Excellent");
calculateBonus(7000, "Good");

// task 4: Parameters and Arguments

//Calculating cost
function calculateSubscriptionCost(plan, months, discount = 0) {
    let pricePerMonth = 0;
    switch (plan) {
        case "Basic": pricePerMonth = 10; break;
        case "Premium": pricePerMonth = 20; break;
        case "Enterprise": pricePerMonth = 50; break;
        default: console.log("Invalid plan"); return;
    }

    let totalCost = (pricePerMonth * months) - discount;
    console.log(`Total Cost: $${totalCost}`);
}

//Test data
calculateSubscriptionCost("Basic", 6, 10);
calculateSubscriptionCost("Premium", 12, 0);

// task 5: Returning Values

//Using a function that returns the converted amount
function convertCurrency(amount, exchangeRate) {
    return (amount * exchangeRate).toFixed(2);
}

//Test data
console.log(`Converted Amount: $${convertCurrency(100, 1.1)}`);
console.log(`Converted Amount: $${convertCurrency(250, 0.85)}`);