

// TASK 1: STUDENT DETAILS


let studentNameTask4 = "Arun";
let studentAgeTask4 = 21;
let studentDepartmentTask4 = "CSE";
let studentCgpaTask4 = 8.5;

// Normal concatenation
console.log(
    "Name: " + studentNameTask4 +
    ", Age: " + studentAgeTask4 +
    ", Department: " + studentDepartmentTask4 +
    ", CGPA: " + studentCgpaTask4
);

// Template literal
console.log(
    `Name: ${studentNameTask4}, Age: ${studentAgeTask4}, Department: ${studentDepartmentTask4}, CGPA: ${studentCgpaTask4}`
);



// TASK 2: SIMPLE CALCULATOR


let calculatorValueATask4 = 20;
let calculatorValueBTask4 = 10;

console.log("Addition:", calculatorValueATask4 + calculatorValueBTask4);
console.log("Subtraction:", calculatorValueATask4 - calculatorValueBTask4);
console.log("Multiplication:", calculatorValueATask4 * calculatorValueBTask4);
console.log("Division:", calculatorValueATask4 / calculatorValueBTask4);
console.log("Modulus:", calculatorValueATask4 % calculatorValueBTask4);
console.log("Power:", calculatorValueATask4 ** calculatorValueBTask4);



// TASK 3: AGE CHECKER


// Uncomment prompt when running in browser.

// let votingAgeTask4 = Number(prompt("Enter your age:"));

// if (votingAgeTask4 >= 18) {
//     console.log("Eligible to vote");
// } else {
//     console.log("Not eligible");
// }



// TASK 4: STUDENT GRADE

// Uncomment prompt when running in browser.

// let studentMarkTask4 = Number(prompt("Enter your marks:"));

// if (studentMarkTask4 >= 90 && studentMarkTask4 <= 100) {
//     console.log("A");
// } else if (studentMarkTask4 >= 80 && studentMarkTask4 <= 89) {
//     console.log("B");
// } else if (studentMarkTask4 >= 70 && studentMarkTask4 <= 79) {
//     console.log("C");
// } else if (studentMarkTask4 >= 60 && studentMarkTask4 <= 69) {
//     console.log("D");
// } else if (studentMarkTask4 >= 0 && studentMarkTask4 < 60) {
//     console.log("Fail");
// } else {
//     console.log("Invalid marks");
// }


// TASK 5: LOGIN SYSTEM


let correctUsernameTask4 = "admin";
let correctPasswordTask4 = "1234";

let enteredUsernameTask4 = "admin";
let enteredPasswordTask4 = "1234";

if (
    enteredUsernameTask4 === correctUsernameTask4 &&
    enteredPasswordTask4 === correctPasswordTask4
) {
    console.log("Login successful");
} else if (
    enteredUsernameTask4 !== correctUsernameTask4 &&
    enteredPasswordTask4 === correctPasswordTask4
) {
    console.log("Invalid username");
} else if (
    enteredUsernameTask4 === correctUsernameTask4 &&
    enteredPasswordTask4 !== correctPasswordTask4
) {
    console.log("Invalid password");
} else {
    console.log("Invalid credentials");
}


// TASK 6: ATM WITHDRAWAL


let atmBalanceTask4 = 10000;
let atmWithdrawalTask4 = 2500;

if (atmWithdrawalTask4 <= 0) {
    console.log("Invalid amount");
} else if (atmWithdrawalTask4 > atmBalanceTask4) {
    console.log("Insufficient balance");
} else if (atmWithdrawalTask4 % 100 !== 0) {
    console.log("Amount must be a multiple of ₹100");
} else {
    atmBalanceTask4 = atmBalanceTask4 - atmWithdrawalTask4;

    console.log("Withdrawal successful");
    console.log("Remaining balance:", atmBalanceTask4);
}


// TASK 7: MULTIPLICATION TABLE


let tableNumberTask4 = 7;

for (let tableCounterTask4 = 1; tableCounterTask4 <= 10; tableCounterTask4++) {

    console.log(
        tableNumberTask4 +
        " x " +
        tableCounterTask4 +
        " = " +
        (tableNumberTask4 * tableCounterTask4)
    );
}


// TASK 8: REVERSE NUMBER


let reverseNumberTask4 = 12345;
let reverseResultTask4 = 0;

while (reverseNumberTask4 > 0) {

    let reverseDigitTask4 = reverseNumberTask4 % 10;

    reverseResultTask4 =
        reverseResultTask4 * 10 + reverseDigitTask4;

    reverseNumberTask4 =
        Math.floor(reverseNumberTask4 / 10);
}

console.log("Reverse number:", reverseResultTask4);



// TASK 9: OTP SYSTEM


// Uncomment this section when running in browser.

// let correctOtpTask4 = 1234;
// let otpAttemptTask4 = 0;
// let otpVerifiedTask4 = false;

// while (otpAttemptTask4 < 3) {

//     let enteredOtpTask4 = Number(prompt("Enter OTP:"));

//     otpAttemptTask4++;

//     if (enteredOtpTask4 === correctOtpTask4) {

//         console.log("OTP verified");

//         otpVerifiedTask4 = true;

//         break;

//     } else {

//         if (otpAttemptTask4 < 3) {
//             console.log("Try again");
//         }
//     }
// }

// if (!otpVerifiedTask4) {
//     console.log("Account blocked");
// }


// TASK 10: SALARY CALCULATOR

function calculateSalaryTask4(basicSalaryTask4, bonusTask4) {

    return basicSalaryTask4 + bonusTask4;
}

let finalSalaryTask4 =
    calculateSalaryTask4(30000, 5000);

console.log("Final Salary:", finalSalaryTask4);


// TASK 11: CALCULATOR FUNCTIONS


function addTask4(firstNumberTask4, secondNumberTask4) {

    return firstNumberTask4 + secondNumberTask4;
}

function subtractTask4(firstNumberTask4, secondNumberTask4) {

    return firstNumberTask4 - secondNumberTask4;
}

function multiplyTask4(firstNumberTask4, secondNumberTask4) {

    return firstNumberTask4 * secondNumberTask4;
}

function divideTask4(firstNumberTask4, secondNumberTask4) {

    if (secondNumberTask4 === 0) {
        return "Cannot divide by zero";
    }

    return firstNumberTask4 / secondNumberTask4;
}

console.log("Add:", addTask4(20, 10));
console.log("Subtract:", subtractTask4(20, 10));
console.log("Multiply:", multiplyTask4(20, 10));
console.log("Divide:", divideTask4(20, 10));


// TASK 12: ELIGIBILITY FUNCTION


function checkEligibilityTask4(
    candidateAgeTask4,
    candidateHeightTask4,
    candidateWeightTask4
) {

    if (
        candidateAgeTask4 >= 21 &&
        candidateHeightTask4 >= 170 &&
        candidateWeightTask4 >= 70
    ) {
        return "Eligible";
    } else {
        return "Not eligible";
    }
}

console.log(
    checkEligibilityTask4(22, 175, 75)
);


// TASK 13: SHOPPING CART


let shoppingCartTask4 = [
    "Laptop",
    "Mouse",
    "Keyboard"
];

// 1. Add Monitor
shoppingCartTask4.push("Monitor");

// 2. Remove Mouse
shoppingCartTask4.splice(
    shoppingCartTask4.indexOf("Mouse"),
    1
);

// 3. Add Headset at beginning
shoppingCartTask4.unshift("Headset");

// 4. Remove last item
shoppingCartTask4.pop();

// 5. Print final cart
console.log("Final Cart:", shoppingCartTask4);



// TASK 14: FIND MAXIMUM


let numbersTask4 = [
    10,
    45,
    23,
    89,
    12,
    67
];

let maximumNumberTask4 = numbersTask4[0];

for (let numberTask4 of numbersTask4) {

    if (numberTask4 > maximumNumberTask4) {
        maximumNumberTask4 = numberTask4;
    }
}

console.log("Maximum number:", maximumNumberTask4);


// TASK 15: REMOVE DUPLICATES


let duplicateNumbersTask4 = [
    1,
    2,
    3,
    2,
    4,
    1,
    5
];

let uniqueNumbersTask4 = [];

for (let duplicateNumberTask4 of duplicateNumbersTask4) {

    if (!uniqueNumbersTask4.includes(duplicateNumberTask4)) {

        uniqueNumbersTask4.push(duplicateNumberTask4);
    }
}

console.log("Unique values:", uniqueNumbersTask4);


// TASK 16: EMPLOYEE SALARY FILTER


let employeesFilterTask4 = [
    {
        name: "Arun",
        salary: 30000
    },
    {
        name: "Bala",
        salary: 50000
    },
    {
        name: "Kumar",
        salary: 25000
    },
    {
        name: "Ravi",
        salary: 70000
    }
];

let highSalaryEmployeesTask4 =
    employeesFilterTask4.filter(
        function (employeeFilterItemTask4) {

            return employeeFilterItemTask4.salary >= 40000;
        }
    );

console.log(
    "Employees earning ₹40000 or more:",
    highSalaryEmployeesTask4
);


// TASK 17: INCREASE SALARY

let increasedSalaryEmployeesTask4 =
    employeesFilterTask4.map(
        function (employeeMapItemTask4) {

            let newSalaryTask4;

            if (employeeMapItemTask4.salary < 40000) {

                newSalaryTask4 =
                    employeeMapItemTask4.salary + 5000;

            } else {

                newSalaryTask4 =
                    employeeMapItemTask4.salary + 10000;
            }

            return {
                ...employeeMapItemTask4,
                salary: newSalaryTask4
            };
        }
    );

console.log(
    "Updated salaries:",
    increasedSalaryEmployeesTask4
);


// TASK 18: TOTAL SALARY

let totalSalaryTask4 =
    employeesFilterTask4.reduce(
        function (salaryTotalTask4, employeeReduceItemTask4) {

            return salaryTotalTask4 +
                employeeReduceItemTask4.salary;
        },
        0
    );

console.log("Total Salary:", totalSalaryTask4);


// TASK 19: SOME AND EVERY


let employeeAboveOneLakhTask4 =
    employeesFilterTask4.some(
        function (employeeSomeItemTask4) {

            return employeeSomeItemTask4.salary > 100000;
        }
    );

console.log(
    "Anyone earning above ₹100000:",
    employeeAboveOneLakhTask4
);


let allEmployeesAboveTwentyThousandTask4 =
    employeesFilterTask4.every(
        function (employeeEveryItemTask4) {

            return employeeEveryItemTask4.salary >= 20000;
        }
    );

console.log(
    "Everyone earning at least ₹20000:",
    allEmployeesAboveTwentyThousandTask4
);



// TASK 20: EMPLOYEE MANAGEMENT MINI PROGRAM


let employeesManagementTask4 = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 35000
    },
    {
        id: 102,
        name: "Bala",
        department: "HR",
        salary: 45000
    },
    {
        id: 103,
        name: "Kumar",
        department: "IT",
        salary: 60000
    }
];



// 1. PRINT ALL EMPLOYEE NAMES USING forEach()


console.log("Employee Names:");

employeesManagementTask4.forEach(
    function (employeeNameItemTask4) {

        console.log(employeeNameItemTask4.name);
    }
);



// 2. GET ONLY IT EMPLOYEES USING filter()


let itEmployeesTask4 =
    employeesManagementTask4.filter(
        function (itEmployeeItemTask4) {

            return itEmployeeItemTask4.department === "IT";
        }
    );

console.log(
    "IT Employees:",
    itEmployeesTask4
);

// 3. INCREASE EVERY SALARY BY 10% USING map()


let increasedEmployeesTask4 =
    employeesManagementTask4.map(
        function (salaryEmployeeItemTask4) {

            return {
                ...salaryEmployeeItemTask4,

                salary:
                    salaryEmployeeItemTask4.salary * 1.10
            };
        }
    );

console.log(
    "Employees after 10% salary increase:",
    increasedEmployeesTask4
);


// 4. FIND EMPLOYEE WITH SALARY ₹45000


let employeeSalary45000Task4 =
    employeesManagementTask4.find(
        function (findEmployeeItemTask4) {

            return findEmployeeItemTask4.salary === 45000;
        }
    );

console.log(
    "Employee earning ₹45000:",
    employeeSalary45000Task4
);


// 5. CALCULATE TOTAL SALARY USING reduce()


let managementTotalSalaryTask4 =
    employeesManagementTask4.reduce(
        function (managementSalaryTotalTask4, managementEmployeeItemTask4) {

            return managementSalaryTotalTask4 +
                managementEmployeeItemTask4.salary;
        },
        0
    );

console.log(
    "Total Salary:",
    managementTotalSalaryTask4
);


// 6. CHECK ANYONE ABOVE ₹50000 USING some()


let employeeAbove50000Task4 =
    employeesManagementTask4.some(
        function (aboveSalaryEmployeeTask4) {

            return aboveSalaryEmployeeTask4.salary > 50000;
        }
    );

console.log(
    "Anyone earning above ₹50000:",
    employeeAbove50000Task4
);


// 7. CHECK EVERYONE ABOVE ₹20000 USING every()


let everyoneAbove20000Task4 =
    employeesManagementTask4.every(
        function (everySalaryEmployeeTask4) {

            return everySalaryEmployeeTask4.salary > 20000;
        }
    );

console.log(
    "Everyone earning above ₹20000:",
    everyoneAbove20000Task4
);



// 8. SORT EMPLOYEES HIGHEST → LOWEST
//    Do NOT modify original array


let sortedEmployeesTask4 =
    [...employeesManagementTask4].sort(
        function (
            firstSalaryEmployeeTask4,
            secondSalaryEmployeeTask4
        ) {

            return secondSalaryEmployeeTask4.salary -
                firstSalaryEmployeeTask4.salary;
        }
    );

console.log(
    "Employees sorted by salary:",
    sortedEmployeesTask4
);



// 9. DESTRUCTURE NAME AND SALARY

console.log("Employee Name and Salary:");

for (
    let destructuredEmployeeTask4
    of employeesManagementTask4
) {

    let {
        name: employeeNameTask4,
        salary: employeeSalaryTask4
    } = destructuredEmployeeTask4;

    console.log(
        "Name:",
        employeeNameTask4,
        "| Salary:",
        employeeSalaryTask4
    );
}



// 10. SPREAD OPERATOR — CREATE NEW EMPLOYEE LIST

let newEmployeeListTask4 =
    [...employeesManagementTask4];

console.log(
    "New Employee List:",
    newEmployeeListTask4
);