// Problem-1
// This is the mind game function. It does addition, subtraction, multiplication and division and returns the result.
function mindGame(userInputNumber) {
    if (typeof userInputNumber != 'number' || userInputNumber < 0) {
        return 'Give a valid number!!';
    }
    else {
        return (((userInputNumber * 3) + 10) / 2) - 5;
    }
}
// Problem-2
// This function find the length of the string and return it is even or odd.
function evenOdd(userInput) {
    if (typeof userInput != 'string') {
        return 'Not valid your data!!! Please give string...';
    }
    else if (userInput.length % 2 == 0) {
        return 'even';
    }
    else {
        return 'odd';
    }
}
// Problem-3
// This function takes a number as input parameter. And by subtracting 7 from the number, if the subtraction result is less than 7 then it will return as result. Or if the minus is greater than 7 then double the input parameter and return the result.
function isLGSeven(userInputNumber) {
    const differenceNum = userInputNumber - 7;
    if (typeof userInputNumber != 'number') {
        return 'Give valid number!!!';
    }
    else if (differenceNum < 7) {
        return differenceNum;
    }
    else {
        return userInputNumber * 2;
    }
}
// Problem-4
// This function takes an array as parameter. and counts the negative numbers from the array and returns the total negative numbers.
function findingBadData(dataArr) {
    const badData = [];
    if (Array.isArray(dataArr) === false) {
        return 'Give valid data!!!';
    }
    else {
        for (let i = 0; i < dataArr.length; i++) {
            const element = dataArr[i];
            if (element < 0) {
                badData.push(element);
            }
        }
    }
    return badData.length;
}
// Problem-5
// This function will take as parameter the number of Gems of three friends. And if the result of multiplying gems by three different numbers is double of 1000 then subtract 2000 and return the result.
function gemsToDiamond(friend1, friend2, friend3) {
    if (typeof friend1 !== 'number' || typeof friend2 !== 'number' || typeof friend3 !== 'number') {
        return 'Please Give valid number!!!';
    }
    else {
        const friendGems1 = 21 * friend1;
        const friendGems2 = 32 * friend2;
        const friendGems3 = 43 * friend3;
        let totalDimond = friendGems1 + friendGems2 + friendGems3;
        if (totalDimond >= 2000) {
            totalDimond = totalDimond - 2000;
        }
        return totalDimond;
    }
}