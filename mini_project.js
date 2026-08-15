// ==========================================
// FINAL CHALLENGE - STUDENT MANAGEMENT
// ==========================================


// Student details
let studentsFinalTask = [

    {
        name: "Arun",
        department: "ECE",
        mark: 85
    },

    {
        name: "Kamal",
        department: "CSE",
        mark: 72
    },

    {
        name: "Livin",
        department: "ECE",
        mark: 92
    }
];


// ==========================================
// 1. PRINT ALL STUDENTS
// ==========================================

function printAllStudentsFinalTask() {

    console.log("===== ALL STUDENTS =====");

    for (let studentFinalTask of studentsFinalTask) {

        let {
            name: studentNameFinalTask,
            department: studentDepartmentFinalTask,
            mark: studentMarkFinalTask
        } = studentFinalTask;

        console.log("Name:", studentNameFinalTask);
        console.log("Department:", studentDepartmentFinalTask);
        console.log("Mark:", studentMarkFinalTask);
        console.log("--------------------");
    }
}


// ==========================================
// 2. PRINT ONLY ECE STUDENTS
// ==========================================

function printECEStudentsFinalTask() {

    console.log("===== ECE STUDENTS =====");

    for (let studentFinalTask of studentsFinalTask) {

        let {
            name: studentNameFinalTask,
            department: studentDepartmentFinalTask,
            mark: studentMarkFinalTask
        } = studentFinalTask;

        if (studentDepartmentFinalTask === "ECE") {

            console.log(
                studentNameFinalTask +
                " - " +
                studentMarkFinalTask
            );
        }
    }
}


// ==========================================
// 3. FIND STUDENTS WHO SCORED ABOVE 80
// ==========================================

function printAbove80StudentsFinalTask() {

    console.log("===== STUDENTS ABOVE 80 =====");

    for (let studentFinalTask of studentsFinalTask) {

        let {
            name: studentNameFinalTask,
            mark: studentMarkFinalTask
        } = studentFinalTask;

        if (studentMarkFinalTask > 80) {

            console.log(
                studentNameFinalTask +
                " - " +
                studentMarkFinalTask
            );
        }
    }
}


// ==========================================
// 4. CALCULATE TOTAL MARKS
// ==========================================

function calculateTotalMarksFinalTask() {

    let totalMarksFinalTask = 0;

    for (let studentFinalTask of studentsFinalTask) {

        let {
            mark: studentMarkFinalTask
        } = studentFinalTask;

        totalMarksFinalTask =
            totalMarksFinalTask + studentMarkFinalTask;
    }

    return totalMarksFinalTask;
}


// ==========================================
// 5. CALCULATE AVERAGE MARKS
// ==========================================

function calculateAverageMarksFinalTask() {

    let totalMarksFinalTask =
        calculateTotalMarksFinalTask();

    let averageMarksFinalTask =
        totalMarksFinalTask / studentsFinalTask.length;

    return averageMarksFinalTask;
}


// ==========================================
// 6. FIND HIGHEST MARK
// ==========================================

function findHighestMarkFinalTask() {

    let highestMarkFinalTask = 0;

    for (let studentFinalTask of studentsFinalTask) {

        let {
            mark: studentMarkFinalTask
        } = studentFinalTask;

        if (studentMarkFinalTask > highestMarkFinalTask) {

            highestMarkFinalTask = studentMarkFinalTask;
        }
    }

    return highestMarkFinalTask;
}


// ==========================================
// 7. FIND LOWEST MARK
// ==========================================

function findLowestMarkFinalTask() {

    let lowestMarkFinalTask =
        studentsFinalTask[0].mark;

    for (let studentFinalTask of studentsFinalTask) {

        let {
            mark: studentMarkFinalTask
        } = studentFinalTask;

        if (studentMarkFinalTask < lowestMarkFinalTask) {

            lowestMarkFinalTask = studentMarkFinalTask;
        }
    }

    return lowestMarkFinalTask;
}


// ==========================================
// CALL ALL FUNCTIONS
// ==========================================

printAllStudentsFinalTask();

printECEStudentsFinalTask();

printAbove80StudentsFinalTask();


// Total marks
let totalMarksResultFinalTask =
    calculateTotalMarksFinalTask();

console.log(
    "Total Marks:",
    totalMarksResultFinalTask
);


// Average marks
let averageMarksResultFinalTask =
    calculateAverageMarksFinalTask();

console.log(
    "Average Marks:",
    averageMarksResultFinalTask
);


// Highest mark
let highestMarkResultFinalTask =
    findHighestMarkFinalTask();

console.log(
    "Highest Mark:",
    highestMarkResultFinalTask
);


// Lowest mark
let lowestMarkResultFinalTask =
    findLowestMarkFinalTask();

console.log(
    "Lowest Mark:",
    lowestMarkResultFinalTask
);