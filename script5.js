// Employee Management System

let employeesTask5 = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2,
        skills: ["HTML", "CSS", "JavaScript"],
        joiningDate: new Date("2023-06-15")
    },
    {
        id: 102,
        name: "Bala",
        department: "HR",
        salary: 55000,
        experience: 4,
        skills: ["Excel", "Recruitment", "Communication"],
        joiningDate: new Date("2022-04-10")
    },
    {
        id: 103,
        name: "Kumar",
        department: "IT",
        salary: 65000,
        experience: 5,
        skills: ["Java", "Spring", "MySQL"],
        joiningDate: new Date("2021-08-20")
    },
    {
        id: 104,
        name: "Ravi",
        department: "Finance",
        salary: 30000,
        experience: 1,
        skills: ["Excel", "Tally", "Accounting"],
        joiningDate: new Date("2025-01-12")
    },
    {
        id: 105,
        name: "Priya",
        department: "IT",
        salary: 75000,
        experience: 6,
        skills: ["React", "Node.js", "MongoDB"],
        joiningDate: new Date("2020-03-18")
    },
    {
        id: 106,
        name: "Suresh",
        department: "Marketing",
        salary: 28000,
        experience: 2,
        skills: ["SEO", "Marketing", "Content"],
        joiningDate: new Date("2023-09-05")
    },
    {
        id: 107,
        name: "Meena",
        department: "IT",
        salary: 120000,
        experience: 8,
        skills: ["Python", "AWS", "Docker"],
        joiningDate: new Date("2018-11-25")
    },
    {
        id: 108,
        name: "Rahul",
        department: "Sales",
        salary: 40000,
        experience: 3,
        skills: ["Sales", "CRM", "Communication"],
        joiningDate: new Date("2022-12-01")
    }
];


// 1. Display all employees

function displayEmployeesTask5() {

    console.log("----- All Employees -----");

    employeesTask5.forEach(function(employee) {

        console.log(
            employee.id,
            employee.name,
            employee.department,
            employee.salary
        );

    });
}

displayEmployeesTask5();


// 2. Employees with salary greater than 40000

let highSalaryEmployeesTask5 = employeesTask5.filter(function(employee) {

    return employee.salary > 40000;

});

console.log("----- Salary Above 40000 -----");
console.log(highSalaryEmployeesTask5);


// 3. Search employee using ID

function searchEmployeeTask5(id) {

    let employee = employeesTask5.find(function(item) {

        return item.id === id;

    });

    if (employee) {

        console.log("Employee Found:");
        console.log(employee);

    } else {

        console.log("Employee not found");

    }

}

searchEmployeeTask5(103);


// 4. Calculate total salary

function totalSalaryTask5() {

    let total = employeesTask5.reduce(function(sum, employee) {

        return sum + employee.salary;

    }, 0);

    console.log("Total Salary:", total);

    return total;
}

totalSalaryTask5();


// 5. Check if anyone earns above 1 lakh

let salaryCheckTask5 = employeesTask5.some(function(employee) {

    return employee.salary > 100000;

});

console.log(
    "Anyone earning above 1,00,000:",
    salaryCheckTask5
);


// 6. Check experience

let experienceCheckTask5 = employeesTask5.every(function(employee) {

    return employee.experience >= 1;

});

console.log(
    "Everyone has at least 1 year experience:",
    experienceCheckTask5
);


// 7. Sort salary highest to lowest

let sortedEmployeesTask5 = [...employeesTask5];

sortedEmployeesTask5.sort(function(a, b) {

    return b.salary - a.salary;

});

console.log("----- Salary High to Low -----");
console.log(sortedEmployeesTask5);


// 8. Array manipulation

function addEmployeeTask5(employee) {

    employeesTask5.push(employee);

    console.log("Employee added");

}


function deleteEmployeeTask5() {

    let removedEmployee = employeesTask5.pop();

    console.log(
        "Employee removed:",
        removedEmployee.name
    );

}


// Add employee

addEmployeeTask5({
    id: 109,
    name: "Anjali",
    department: "IT",
    salary: 50000,
    experience: 2,
    skills: ["HTML", "CSS"],
    joiningDate: new Date("2024-07-10")
});


// Remove last employee

deleteEmployeeTask5();


// Add employee at beginning

employeesTask5.unshift({
    id: 110,
    name: "Vijay",
    department: "Support",
    salary: 32000,
    experience: 1,
    skills: ["Support", "Communication"],
    joiningDate: new Date("2025-06-20")
});

console.log("After unshift:", employeesTask5);


// Remove first employee

let firstEmployeeRemovedTask5 = employeesTask5.shift();

console.log(
    "First employee removed:",
    firstEmployeeRemovedTask5.name
);


// 9. Object destructuring

let employeeDetailsTask5 = employeesTask5[0];

let {
    name: employeeNameTask5,
    department: employeeDepartmentTask5,
    salary: employeeSalaryTask5
} = employeeDetailsTask5;

console.log("Name:", employeeNameTask5);
console.log("Department:", employeeDepartmentTask5);
console.log("Salary:", employeeSalaryTask5);


// 10. Array destructuring

let employeeSkillsTask5 = employeesTask5[0].skills;

let [
    skillOneTask5,
    skillTwoTask5,
    skillThreeTask5
] = employeeSkillsTask5;

console.log("Skill 1:", skillOneTask5);
console.log("Skill 2:", skillTwoTask5);
console.log("Skill 3:", skillThreeTask5);


// 11. Spread operator

let newEmployeeListTask5 = [...employeesTask5];

console.log(
    "New Employee Array:",
    newEmployeeListTask5
);


// 12. Rest operator

function addEmployeeSkillsTask5(name, ...skills) {

    console.log("Employee Name:", name);
    console.log("Employee Skills:", skills);

}

addEmployeeSkillsTask5(
    "Sanjay",
    "Java",
    "Spring",
    "SQL"
);


// 13. Salary category

function salaryCategoryTask5(salary) {

    if (salary >= 0 && salary <= 30000) {

        return "Junior";

    } else if (salary >= 30001 && salary <= 60000) {

        return "Mid Level";

    } else {

        return "Senior";

    }

}


console.log("----- Salary Category -----");

employeesTask5.forEach(function(employee) {

    console.log(
        employee.name,
        "-",
        salaryCategoryTask5(employee.salary)
    );

});


// 14. Joining Date

console.log("----- Joining Dates -----");

employeesTask5.forEach(function(employee) {

    let year = employee.joiningDate.getFullYear();

    let month = employee.joiningDate.getMonth();

    console.log(
        employee.name,
        "Year:",
        year,
        "Month:",
        month
    );

});


// 15. User Input

let searchIdTask5 = Number(
    prompt("Enter Employee ID:")
);

searchEmployeeTask5(searchIdTask5);
console.log(searchIdTask5);


// ==========================================
// BONUS - MENU DRIVEN EMPLOYEE SYSTEM
// ==========================================

let choiceTask5;

do {

    choiceTask5 = Number(
        prompt(
            "Employee Management System\n\n" +
            "1. Display All Employees\n" +
            "2. Add Employee\n" +
            "3. Search Employee\n" +
            "4. Filter High Salary Employees\n" +
            "5. Calculate Total Salary\n" +
            "6. Sort By Salary\n" +
            "7. Delete Employee\n" +
            "8. Exit\n\n" +
            "Enter your choice:"
        )
    );

    switch (choiceTask5) {

        case 1:

            displayEmployeesTask5();

            break;


        case 2:

            let newEmployeeIdTask5 =
                Number(prompt("Enter Employee ID:"));

            let newEmployeeNameTask5 =
                prompt("Enter Employee Name:");

            let newEmployeeDepartmentTask5 =
                prompt("Enter Department:");

            let newEmployeeSalaryTask5 =
                Number(prompt("Enter Salary:"));

            let newEmployeeExperienceTask5 =
                Number(prompt("Enter Experience:"));

            let newEmployeeTask5 = {

                id: newEmployeeIdTask5,
                name: newEmployeeNameTask5,
                department: newEmployeeDepartmentTask5,
                salary: newEmployeeSalaryTask5,
                experience: newEmployeeExperienceTask5,
                skills: [],
                joiningDate: new Date()
            };

            addEmployeeTask5(newEmployeeTask5);

            break;


        case 3:

            let searchIdMenuTask5 =
                Number(prompt("Enter Employee ID:"));

            searchEmployeeTask5(searchIdMenuTask5);

            break;


        case 4:

            let highSalaryTask5 =
                employeesTask5.filter(function(employee) {

                    return employee.salary > 40000;

                });

            console.log(highSalaryTask5);

            break;


        case 5:

            totalSalaryTask5();

            break;


        case 6:

            let sortedListTask5 =
                [...employeesTask5].sort(function(a, b) {

                    return b.salary - a.salary;

                });

            console.log(sortedListTask5);

            break;


        case 7:

            deleteEmployeeTask5();

            break;


        case 8:

            console.log("Program ended");

            break;


        default:

            console.log("Invalid choice");

    }

} while (choiceTask5 !== 8);