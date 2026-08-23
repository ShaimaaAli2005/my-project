function categorizeNumber(number) {
    if (number > 0) {
        console.log("Number is positive.");
    } else if (number < 0) {
        console.log("Number is negative.");
    } else {
        console.log("Number is zero.");
    }

    if (number % 2 === 0) {
        console.log("Number is even.");
    } else {
        console.log("Number is odd.");
    }
}

categorizeNumber(5);