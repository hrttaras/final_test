const OK = "OK";
const BIG_LOW = ">>•";
const SMALL_LOW = ">•";
const BIG_HIGH = "•<<";
const SMALL_HIGH = "•<";
const ZERO_SIGN = " - ";
const FREQUENCIES = [329.63, 246.94, 196, 146.83, 110, 82.41];

function tune(arr) {
    let result = [];
    for (let i = 0; i < 6; i++) {
        let percentDifference = Math.round(Math.abs(100 - arr[i]*100 / FREQUENCIES[i]).toFixed(2));
        if (arr[i] === 0) {
            result.push(ZERO_SIGN);
        } else if (arr[i] > FREQUENCIES[i]) {
            if (percentDifference < 1) {
                result.push(OK);
            } else if (percentDifference >= 1 && percentDifference <= 2) {
                result.push(SMALL_HIGH);
            } else {
                result.push(BIG_HIGH);
            }
        } else if (arr[i] < FREQUENCIES[i]) {
            if (percentDifference < 1) {
                result.push(OK);
            } else if (percentDifference >= 1 && percentDifference <= 2) {
                result.push(SMALL_LOW);
            } else {
                result.push(BIG_LOW);
            }
        } else {
            result.push(OK);
        }
    }

    return result;
}
