// 


// Solution to problem no 1 kilometerToMeter
function kilometerToMeter(kilometer) {
    if (typeof kilometer == ("num") && 0 <= kilometer) {
        var meter = kilometer * 1000; 
    }
    else {
        console.log(kilometer, "This is not a num")
    }
    return meter;
}


// Solution to Problem 2 budgetCalculator

function budgetCalculator(clock, mobile, laptop) {
    var clockPrice = 50;  
    var mobilePrice = 100;  
    var laptopPrice = 500;  
    var totalClock = clock * clockPrice;
    var totalMobile = mobile * mobilePrice;
    var totalLaptop = laptop * laptopPrice;
    var Budget = totalClock + totalMobile + totalLaptop;
    return Budget;
}

//Solution to Problem 3 hotelCost

function hotelCost(days) {
    var expense = 0;
    if (days <= 10) {
        expense = days * 100;
    }
    else if (days <= 20) {
        var offer1 = 10 * 100;
        var remaining = days - 10;
        var offer2 = remaining * 80;
        expense = offer1 + offer2;
    }
    else {
        var offer1 = 10 * 100;
        var offer2 = 10 * 80;
        var remaining = days - 20;
        var offer3 = remaining * 50;
        expense = offer1 + offer2 + offer3;
    }
    return expense;
}