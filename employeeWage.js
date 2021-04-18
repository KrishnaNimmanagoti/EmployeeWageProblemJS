const IS_FULL_TIME = 2;
const IS_PART_TIME = 1;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 10;
const MAX_HRS_IN_MONTH = 100;

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArray = new Array();

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10 % 3);
    empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArray.push(calculateDailyWage(empHrs));
}

function calculateDailyWage(empHrs) {
    let result = empHrs * WAGE_PER_HOUR;
    return result;
}

console.log(empDailyWageArray);
let empWage = calculateDailyWage(totalEmpHrs);
console.log("Total Working Days: " + totalWorkingDays + "\nTotal Hrs: " + totalEmpHrs + "\nEmp Wage: " + empWage);
