// Student Score Processing in JavaScript

let scores = [78, 85, 62, 90, 94];

function printScores(arr) {
    console.log("Scores:", arr);
}

function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function calculateAverage(arr) {
    return calculateSum(arr) / arr.length;
}

function addScore(arr, newScore) {
    arr.push(newScore);
}

printScores(scores);
console.log("Total Score:", calculateSum(scores));
console.log("Average Score:", calculateAverage(scores).toFixed(2));

console.log("\nAdding new score: 88");
addScore(scores, 88);
printScores(scores);
console.log("New Average Score:", calculateAverage(scores).toFixed(2));