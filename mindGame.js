function mindGame(num) {
    if (typeof num != 'number') {
        return 'Give a valid number!!'
    }
    else {
        return (((num * 3) + 10) / 2) - 5;
    }
}
console.log(mindGame(33));


function evenOdd(userInput) {
    if (typeof userInput != 'string') {
        return 'Not valid your data!!! Please give string...'
    }
    else if (userInput.length % 2 == 0) {
        return 'even';
    }
    else {
        return 'odd'
    }
}
// console.log(evenOdd( "chatgpt"));
// console.log('12'.length);
function isLGSeven(num) {
    const differnceNum = num - 7;
    if (typeof num != 'number') {
        return 'Give valid number!!!'
    }
    else if (differnceNum < 7) {
        return differnceNum;
    }
    else {
        return num * 2;
    }
}
// console.log(isLGSeven(15));

function findingBadData(dataArr) {
    const badData = [];
    if (Array.isArray(dataArr) === false) {
        return 'Give valid data!!!'
    }
    else {
        for (let i = 0; i < dataArr.length; i++) {
            const element = dataArr[i];
            if (element < 0) {
                badData.push(element)
            }
        }
    }
    return badData.length;
}
// console.log(findingBadData([ 2, -5, -7, -13 ]));

function gemsToDiamond(friend1, friend2, friend3) {
    if (typeof friend1 !== 'number' || typeof friend2 !== 'number' || typeof friend3 !== 'number') {
        return 'Please Give valid number!!!';
    }
    else {
        const friendGems1 = 21 * friend1;
        const friendGems2 = 32 * friend2;
        const friendGems3 = 43 * friend3;
        let totalDimond = friendGems1 + friendGems2 + friendGems3;
        if (totalDimond > 2000) {
            totalDimond = totalDimond - 2000;
        }
        return totalDimond;

    }
}

console.log(gemsToDiamond(100, 5, 1));