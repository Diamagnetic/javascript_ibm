let testText = "The quick brown fox jumps over the lazy dog";
let startTime, endTime;

function startTest() {
    document.getElementById('inputText').value = testText;

    document.getElementById('output').innerHTML = '';

    startTime = new Date().getTime();

    const button = document.getElementById('btn');

    button.innerHTML = 'End Test';

    button.onclick = endTest;
}

function endTest() {
    endTime = new Date().getTime();

    document.getElementById('userInput').readOnly = true;

    const timeElapsed = (endTime - startTime) / 1000;

    const userTypedText = document.getElementById('userInput').value;

    const typedWords = userTypedText.split(/\s+/).filter((word) => word !== '').length;
console.log(typedWords);
    let wpm = 0;

    if(timeElapsed != 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    document.getElementById('output').innerHTML = '<h2>Typing Test Results:</h2>' +
        '<p>Words Typed: ' + typedWords + '</p>' +
        '<p>Time Elapsed: ' + timeElapsed.toFixed(2) + ' seconds</p>' +
        '<p>Words Per Minute (WPM): ' + wpm + '</p>';

    const button = document.getElementById('btn');
    button.innerHTML = "Start Test";
    button.onclick = startTest;
}