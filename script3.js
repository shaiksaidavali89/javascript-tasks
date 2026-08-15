
// TASK 1 - SALARY CALCULATOR

let salaryTask1 = 30000;
let bonusTask1 = 5000;
let taxTask1 = 2000;

let finalSalaryTask1 =
    salaryTask1 + bonusTask1 - taxTask1;

console.log("Final Salary:", finalSalaryTask1);


// TASK 2 - INCREMENT OPERATORS


let numberATask2 = 10;

let numberBTask2 = numberATask2++;

let numberCTask2 = ++numberATask2;

console.log(numberATask2);
console.log(numberBTask2);
console.log(numberCTask2);


// TASK 3 - LOGICAL OPERATORS


console.log(
    10 > 5 &&
    20 < 10 ||
    5 === "5"
);

console.log(
    10 < 5 ||
    20 >= 20 &&
    5 == "5"
);

console.log(
    !(10 > 5)
);


// TASK 4 - ATM WITHDRAWAL


let balanceTask4 = 10000;
let withdrawalTask4 = 2500;

if (withdrawalTask4 <= 0) {

    console.log("Withdrawal amount must be greater than 0");

} else if (withdrawalTask4 > balanceTask4) {

    console.log("Insufficient balance");

} else if (withdrawalTask4 % 100 !== 0) {

    console.log("Withdrawal must be a multiple of 100");

} else {

    balanceTask4 =
        balanceTask4 - withdrawalTask4;

    console.log("Withdrawal successful");
    console.log("Remaining Balance:", balanceTask4);
}


// TASK 5 - STUDENT GRADE

let markTask5 = 78;

if (markTask5 >= 90 && markTask5 <= 100) {

    console.log("Grade: A");

} else if (markTask5 >= 80 && markTask5 < 90) {

    console.log("Grade: B");

} else if (markTask5 >= 70 && markTask5 < 80) {

    console.log("Grade: C");

} else if (markTask5 >= 60 && markTask5 < 70) {

    console.log("Grade: D");

} else if (markTask5 >= 0 && markTask5 < 60) {

    console.log("Grade: Fail");

} else {

    console.log("Invalid Mark");
}


// TASK 6 - NESTED LOGIN


let usernameTask6 = "admin";
let passwordTask6 = "1234";
let otpTask6 = 5555;

let enteredUsernameTask6 = "admin";
let enteredPasswordTask6 = "1234";
let enteredOtpTask6 = 5555;

if (enteredUsernameTask6 === usernameTask6) {

    if (enteredPasswordTask6 === passwordTask6) {

        if (enteredOtpTask6 === otpTask6) {

            console.log("Login successful");

        } else {

            console.log("Invalid OTP");
        }

    } else {

        console.log("Invalid password");
    }

} else {

    console.log("Invalid username");
}


// TASK 7 - NUMBER PATTERN


for (
    let numberCounterTask7 = 1;
    numberCounterTask7 <= 10;
    numberCounterTask7++
) {

    console.log(numberCounterTask7);
}


// TASK 8 - MULTIPLICATION TABLE


let multiplicationNumberTask8 = 7;

for (
    let multiplicationCounterTask8 = 1;
    multiplicationCounterTask8 <= 10;
    multiplicationCounterTask8++
) {

    let multiplicationResultTask8 =
        multiplicationNumberTask8 *
        multiplicationCounterTask8;

    console.log(
        multiplicationNumberTask8 +
        " x " +
        multiplicationCounterTask8 +
        " = " +
        multiplicationResultTask8
    );
}


// TASK 9 - REVERSE COUNTDOWN


let countdownTask9 = 10;

while (countdownTask9 >= 0) {

    console.log(countdownTask9);

    countdownTask9--;
}


// TASK 10 - OTP SYSTEM


let correctOtpTask10 = 1234;
let otpAttemptsTask10 = 0;
let otpVerifiedTask10 = false;

while (otpAttemptsTask10 < 3) {

    let enteredOtpTask10 =
        Number(prompt("Enter OTP:"));

    otpAttemptsTask10++;

    if (enteredOtpTask10 === correctOtpTask10) {

        console.log("OTP verified");

        otpVerifiedTask10 = true;

        break;

    } else {

        console.log("Incorrect OTP");

        console.log(
            "Attempts remaining:",
            3 - otpAttemptsTask10
        );
    }
}

if (otpVerifiedTask10 === false) {

    console.log("Account blocked");
}

// TASK 11 - ARRAY SEARCH

let fruitsTask11 = [
    "apple",
    "banana",
    "orange",
    "grapes",
    "mango"
];

for (
    let fruitIndexTask11 = 0;
    fruitIndexTask11 < fruitsTask11.length;
    fruitIndexTask11++
) {

    console.log(fruitsTask11[fruitIndexTask11]);
}

console.log(
    "First fruit:",
    fruitsTask11[0]
);

console.log(
    "Last fruit:",
    fruitsTask11[fruitsTask11.length - 1]
);


// TASK 12 - OBJECT DETAILS


let employeeTask12 = {

    name: "Arun",

    empId: "STK-101",

    role: "Developer",

    salary: 45000
};


for (let employeeKeyTask12 in employeeTask12) {

    console.log(
        employeeKeyTask12 +
        " : " +
        employeeTask12[employeeKeyTask12]
    );
}


// TASK 13 - CALCULATOR FUNCTION


function calculatorTask13(
    firstNumberTask13,
    secondNumberTask13,
    operatorTask13
) {

    if (operatorTask13 === "+") {

        return firstNumberTask13 +
            secondNumberTask13;

    } else if (operatorTask13 === "-") {

        return firstNumberTask13 -
            secondNumberTask13;

    } else if (operatorTask13 === "*") {

        return firstNumberTask13 *
            secondNumberTask13;

    } else if (operatorTask13 === "/") {

        return firstNumberTask13 /
            secondNumberTask13;

    } else if (operatorTask13 === "%") {

        return firstNumberTask13 %
            secondNumberTask13;

    } else {

        return "Invalid operator";
    }
}


console.log(
    calculatorTask13(20, 5, "+")
);

console.log(
    calculatorTask13(20, 5, "-")
);

console.log(
    calculatorTask13(20, 5, "*")
);

console.log(
    calculatorTask13(20, 5, "/")
);

console.log(
    calculatorTask13(20, 5, "%")
);

// TASK 14 - EMPLOYEE SALARY


function salaryDetailsTask14(
    salaryTask14,
    bonusTask14
) {

    let finalSalaryTask14 =
        salaryTask14 + bonusTask14;

    return finalSalaryTask14;
}


console.log(
    salaryDetailsTask14(40000, 5000)
);


// TASK 15 - DEFAULT PARAMETER


function employeeTask15(
    employeeNameTask15,
    employeeRoleTask15 = "Trainee"
) {

    console.log(
        "Name:",
        employeeNameTask15
    );

    console.log(
        "Role:",
        employeeRoleTask15
    );
}


employeeTask15("Arun");

employeeTask15(
    "Kamal",
    "Developer"
);


// TASK 16 - CALLBACK


function addTask16(
    firstNumberTask16,
    secondNumberTask16
) {

    return firstNumberTask16 +
        secondNumberTask16;
}


function subTask16(
    firstNumberTask16,
    secondNumberTask16
) {

    return firstNumberTask16 -
        secondNumberTask16;
}


function mulTask16(
    firstNumberTask16,
    secondNumberTask16
) {

    return firstNumberTask16 *
        secondNumberTask16;
}


function calculateTask16(
    firstNumberTask16,
    secondNumberTask16,
    callbackTask16
) {

    let resultTask16 =
        callbackTask16(
            firstNumberTask16,
            secondNumberTask16
        );

    return resultTask16;
}


console.log(
    calculateTask16(
        20,
        10,
        addTask16
    )
);


console.log(
    calculateTask16(
        20,
        10,
        subTask16
    )
);


console.log(
    calculateTask16(
        20,
        10,
        mulTask16
    )
);


// TASK 17 - GENERATOR


function* rewardsTask17() {

    yield "₹100 Cashback";

    yield "10% Discount";

    yield "₹500 Cashback";

    yield "20% Discount";

    yield "Better Luck Next Time";
}


let rewardGeneratorTask17 =
    rewardsTask17();


console.log(
    rewardGeneratorTask17.next().value
);

console.log(
    rewardGeneratorTask17.next().value
);

console.log(
    rewardGeneratorTask17.next().value
);

console.log(
    rewardGeneratorTask17.next().value
);

console.log(
    rewardGeneratorTask17.next().value
);


// TASK 18 - SPREAD OPERATOR


let frontendTask18 = [
    "HTML",
    "CSS",
    "JavaScript"
];

let backendTask18 = [
    "Node",
    "Express",
    "MongoDB"
];


let fullStackTask18 = [
    ...frontendTask18,
    ...backendTask18
];


console.log(fullStackTask18);


// TASK 19 - ARRAY DESTRUCTURING


let studentTask19 = [
    "Arun",
    "ECE",
    8.5,
    "Developer"
];


let [
    studentNameTask19,
    studentDepartmentTask19,
    studentCgpaTask19,
    studentRoleTask19
] = studentTask19;


console.log(
    "Name:",
    studentNameTask19
);

console.log(
    "Department:",
    studentDepartmentTask19
);

console.log(
    "CGPA:",
    studentCgpaTask19
);

console.log(
    "Role:",
    studentRoleTask19
);

// TASK 20 - NESTED OBJECT DESTRUCTURING

let companyTask20 = {

    name: "Stackly",

    employee: {

        name: "Arun",

        role: "Developer",

        salary: 50000
    }
};


let {
    employee: {
        name: employeeNameTask20,
        role: employeeRoleTask20,
        salary: employeeSalaryTask20
    }
} = companyTask20;


console.log(
    "Employee Name:",
    employeeNameTask20
);

console.log(
    "Role:",
    employeeRoleTask20
);

console.log(
    "Salary:",
    employeeSalaryTask20
);