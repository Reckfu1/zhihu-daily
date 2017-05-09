export const getMaxDays=function(year, month) {
    let days
    if (month == 2) {
        days = year % 4 == 0 ? 29 : 28
    } else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        days = 31
    } else {
        days = 30
    }
    return days
}