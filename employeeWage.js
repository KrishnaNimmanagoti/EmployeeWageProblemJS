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

//A - Calc Total Wage Using Array for Each or Reduce Method
let totEmpWage = 0;
function sum(dailyWage) {
    totEmpWage += dailyWage;
}
empDailyWageArray.forEach(sum)
console.log("Total Working Days : " + totalWorkingDays + "\nTotal Hrs : " + totalEmpHrs + "\nTotal Employee Wage : " + totEmpWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("Total Employee Wage with Reduce : " + empDailyWageArray.reduce(totalWages, 0));

//B - Show the Day along with Daily Wage using Array map helper Function
let dailyCounter = 0;
function mapDayWithWage(dailyWage) {
    dailyCounter++;
    return dailyCounter + " => " + dailyWage + " ";
}
let mapWithWageArray = empDailyWageArray.map(mapDayWithWage);
console.log("Daily Wage Map : " + mapWithWageArray);

//C - Show Days when Full Time wage of 160 were earned using filter Function
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArray = mapWithWageArray.filter(fullTimeWage);
console.log("Daily Wage Filter When FullTime Wage Earned : " + fullDayWageArray);

//D - Find the first Occurence when Full Time Wage was earned using Find Function
console.log("First time FullTime wage was Earned on a Day : " + mapWithWageArray.find(fullTimeWage));

//E - Check if Every Element of Full Time Wage is truly holding Full time Wage
console.log("Check All Element have Full Time Wage : " + fullDayWageArray.every(fullTimeWage));

//F - Check if There is any PartTime Wage
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80")
}
console.log("Check if Any Part Time Wage : " + mapWithWageArray.some(isAnyPartTimeWage));

//G - Find the Number of Days the Employee Worrked
function totalDaysEmpWorked(numOfDays, dailyWage) {
    if (dailyWage > 0) {
        return numOfDays + 1;
    }
    return numOfDays;
}
console.log("Number of Days Employee Worked : " + empDailyWageArray.reduce(totalDaysEmpWorked, 0))