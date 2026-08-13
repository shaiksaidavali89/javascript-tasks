
// TASK 1 - EMPLOYEE ELIGIBILITY


let employeeNameTask1 = prompt("Enter employee name:");
let employeeAgeTask1 = Number(prompt("Enter age:"));
let employeeExperienceTask1 = Number(prompt("Enter experience in years:"));
let employeeSalaryTask1 = Number(prompt("Enter salary:"));

if (
    employeeAgeTask1 >= 21 &&
    employeeExperienceTask1 >= 1 &&
    employeeSalaryTask1 >= 20000
) {
    console.log("Employee is eligible");
} else {

    console.log("Employee is not eligible");

    if (employeeAgeTask1 < 21) {
        console.log("Reason: Age must be 21 or above");
    }

    if (employeeExperienceTask1 < 1) {
        console.log("Reason: Experience must be at least 1 year");
    }

    if (employeeSalaryTask1 < 20000) {
        console.log("Reason: Salary must be at least ₹20,000");
    }
}


// TASK 2 - ATM WITHDRAWAL


let atmBalanceTask2 = 10000;

let withdrawalAmountTask2 = Number(
    prompt("Enter withdrawal amount:")
);

if (
    withdrawalAmountTask2 > 0 &&
    withdrawalAmountTask2 <= atmBalanceTask2 &&
    withdrawalAmountTask2 % 100 === 0
) {

    atmBalanceTask2 =
        atmBalanceTask2 - withdrawalAmountTask2;

    console.log("Withdrawal successful");
    console.log("Remaining balance: ₹" + atmBalanceTask2);

} else {

    if (withdrawalAmountTask2 <= 0) {

        console.log("Invalid amount");

    } else if (withdrawalAmountTask2 > atmBalanceTask2) {

        console.log("Insufficient balance");

    } else if (withdrawalAmountTask2 % 100 !== 0) {

        console.log("Amount must be a multiple of 100");
    }
}


// TASK 3 - LOGIN SYSTEM


let correctUsernameTask3 = "admin";
let correctPasswordTask3 = "12345";

let loginAttemptsTask3 = 0;
let loginSuccessTask3 = false;

while (loginAttemptsTask3 < 3) {

    let enteredUsernameTask3 =
        prompt("Enter username:");

    let enteredPasswordTask3 =
        prompt("Enter password:");

    loginAttemptsTask3++;

    if (
        enteredUsernameTask3 === correctUsernameTask3 &&
        enteredPasswordTask3 === correctPasswordTask3
    ) {

        console.log("Login successful");

        loginSuccessTask3 = true;

        break;

    } else {

        console.log("Invalid username or password");

        console.log(
            "Attempts remaining:",
            3 - loginAttemptsTask3
        );
    }
}

if (loginSuccessTask3 === false) {

    console.log("Account locked");
}


// TASK 4 - STUDENT GRADE SYSTEM


let mathMarksTask4 =
    Number(prompt("Enter Math marks:"));

let englishMarksTask4 =
    Number(prompt("Enter English marks:"));

let scienceMarksTask4 =
    Number(prompt("Enter Science marks:"));

let socialMarksTask4 =
    Number(prompt("Enter Social marks:"));

let computerMarksTask4 =
    Number(prompt("Enter Computer marks:"));


let totalMarksTask4 =
    mathMarksTask4 +
    englishMarksTask4 +
    scienceMarksTask4 +
    socialMarksTask4 +
    computerMarksTask4;


let averageMarksTask4 =
    totalMarksTask4 / 5;


let gradeTask4;


if (
    averageMarksTask4 >= 90 &&
    averageMarksTask4 <= 100
) {

    gradeTask4 = "A";

} else if (averageMarksTask4 >= 80) {

    gradeTask4 = "B";

} else if (averageMarksTask4 >= 70) {

    gradeTask4 = "C";

} else if (averageMarksTask4 >= 60) {

    gradeTask4 = "D";

} else {

    gradeTask4 = "F";
}


console.log("Total:", totalMarksTask4);
console.log("Average:", averageMarksTask4);
console.log("Grade:", gradeTask4);


// TASK 5 - PATTERN 1
// USING FOR LOOP


for (
    let patternCounterTask5 = 1;
    patternCounterTask5 <= 5;
    patternCounterTask5++
) {

    console.log(patternCounterTask5);
}


// TASK 5 - PATTERN 2
// USING WHILE LOOP


let reverseCounterTask5 = 5;

while (reverseCounterTask5 >= 1) {

    console.log(reverseCounterTask5);

    reverseCounterTask5--;
}


// TASK 5 - PATTERN 3
// USING DO WHILE LOOP

let sequenceCounterTask5 = 1;
let sequenceResultTask5 = "";

do {

    sequenceResultTask5 =
        sequenceResultTask5 +
        sequenceCounterTask5 +
        " ";

    sequenceCounterTask5++;

} while (sequenceCounterTask5 <= 5);

console.log(sequenceResultTask5);



// TASK 6 - SHOPPING CART


let productsTask6 = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor"
];

let pricesTask6 = [
    50000,
    1000,
    2000,
    15000
];

let totalPriceTask6 = 0;


for (
    let productIndexTask6 = 0;
    productIndexTask6 < productsTask6.length;
    productIndexTask6++
) {

    console.log(
        productsTask6[productIndexTask6] +
        " - ₹" +
        pricesTask6[productIndexTask6]
    );

    totalPriceTask6 =
        totalPriceTask6 +
        pricesTask6[productIndexTask6];
}


console.log("Total = ₹" + totalPriceTask6);



// TASK 7 - EMPLOYEE OBJECT


let employeeTask7 = {

    name: "Arun",

    empId: "STK-101",

    role: "Software Engineer",

    salary: 45000
};


for (let employeeKeyTask7 in employeeTask7) {

    console.log(
        employeeKeyTask7 +
        " : " +
        employeeTask7[employeeKeyTask7]
    );
}


// calculateBonus() Function 
function calculateBonusTask7(employeeSalaryTask7) {

    if (employeeSalaryTask7 >= 40000) {

        return 5000;

    } else {

        return 3000;
    }
}


let employeeBonusTask7 =
    calculateBonusTask7(employeeTask7.salary);


console.log("Bonus:", employeeBonusTask7);




// TASK 8 - BANK ACCOUNT



function depositTask8(currentBalanceTask8, depositAmountTask8) {

    return currentBalanceTask8 + depositAmountTask8;
}


function withdrawTask8(currentBalanceTask8, withdrawAmountTask8) {

    return currentBalanceTask8 - withdrawAmountTask8;
}


function checkBalanceTask8(currentBalanceTask8) {

    return currentBalanceTask8;
}


let bankBalanceTask8 = 10000;


// Deposit ₹5000

bankBalanceTask8 =
    depositTask8(
        bankBalanceTask8,
        5000
    );

console.log("Deposited: ₹5000");


// Withdraw ₹2000

bankBalanceTask8 =
    withdrawTask8(
        bankBalanceTask8,
        2000
    );

console.log("Withdrawn: ₹2000");


// Check balance

console.log(
    "Current Balance: ₹" +
    checkBalanceTask8(bankBalanceTask8)
);



// TASK 9 - CALLBACK CALCULATOR


function addTask9(firstNumberTask9, secondNumberTask9) {

    return firstNumberTask9 + secondNumberTask9;
}


function subTask9(firstNumberTask9, secondNumberTask9) {

    return firstNumberTask9 - secondNumberTask9;
}


function mulTask9(firstNumberTask9, secondNumberTask9) {

    return firstNumberTask9 * secondNumberTask9;
}


function divTask9(firstNumberTask9, secondNumberTask9) {

    return firstNumberTask9 / secondNumberTask9;
}

//Step 2 — Higher-order function


function calculateTask9(
    callbackTask9,
    firstNumberTask9,
    secondNumberTask9
) {

    return callbackTask9(
        firstNumberTask9,
        secondNumberTask9
    );
}


//Step 3 — Call the functions

console.log(
    calculateTask9(
        addTask9,
        20,
        10
    )
);


console.log(
    calculateTask9(
        subTask9,
        20,
        10
    )
);


console.log(
    calculateTask9(
        mulTask9,
        20,
        10
    )
);


console.log(
    calculateTask9(
        divTask9,
        20,
        10
    )
);