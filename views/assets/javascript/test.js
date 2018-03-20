var questionArray = [
    ["Question 1?", "Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    ["Question 2?", "image", "Green", "Red", "Yellow"],
    ["Question 3?", "Horse", "Cat", "Dog", "Snake"],
    ["Question 4?", "choco", "late", "sleep", "bed"],
    ["Question 5?", "bar", "food", "list", "warrant"],
    ["Question 6?", "circle", "hex", "time", "life"],
    ["Question 7?", "hugs", "tea", "hope", "pickle"],
    ["Question 8?", "kevin", "cake", "ida", "egss"],
    ["Question 9?", "ice", "cream", "square", "cheese"],
    ["Question 10?", "honey", "jam", "bread", "bacon"]

];


//populate document
for (var i = 0; i < questionArray.length; i++) {
    document.write("<form><span class='question'>" + questionArray[i][0] + "</span><br>");
    for (var x = 1; x < 5; x++) {
        document.write(" <input type= 'radio'  class='answer' name='answer' value=answer'" + questionArray[i][x] + "'>" + questionArray[i][x] + "");
    }
    //<input type='radio' class='answer' name='answer' value='
    document.write("</form><br>");
}

//array that stores value of each answer for the questions
var characterAnswer = [
    //characterAnswer array should print 11th position; i.e name of team member
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 'Ida'],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 'Kevin'],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 'Chelsey'],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 'Derek'],

];

//array that holds images for each response?
// var image = [
//     'http://i.share.pho.to/b1ffafc9_o.gif',
//     'http://i.share.pho.to/4c75238c_o.gif',
//     'http://i.share.pho.to/b1ffafc9_o.gif',
//     'http://i.share.pho.to/d22e67e3_o.gif',
//     'http://i.share.pho.to/39c9969d_o.gif',
//     'http://i.share.pho.to/9eb5d59d_o.gif',
//     'http://i.share.pho.to/fe34205c_o.gif',
//     'http://i.share.pho.to/3ad27729_o.gif',
//     'http://i.share.pho.to/1e1c2646_o.gif',
//     'http://i.share.pho.to/29b5cde3_o.gif',
//     'http://i.share.pho.to/157a9e78_o.gif',
//     'http://i.share.pho.to/851c99e8_o.gif',
//     'http://i.share.pho.to/1c0d73f0_o.gif',
//     'http://i.share.pho.to/dc19e9d2_o.gif',
//     'http://i.share.pho.to/9b40003c_o.gif',
//     'http://i.share.pho.to/d8363256_o.gif',
//     'http://i.share.pho.to/b0ea204e_o.gif',
//     'http://i.share.pho.to/844af0cd_o.gif',
//     'http://i.share.pho.to/582e4ec0_o.gif',
//     'http://i.share.pho.to/a9887def_o.gif'
// ]


//add click check event listeners
var inputs = document.getElementsByTagName('input');
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('click', check);
}

var userAnswers = [];

//check questions answers
function check() {
    userAnswers = [];
    var c = 0;
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            userAnswers.push(i % 5);
            c++;
        }
    }
    if (c == questionArray.length) rate();
}

//rate the answers per char
function rate() {
    console.log(userAnswers);
    for (var i = 0; i < userAnswers.length; i++) {
        for (var j = 0; j < characterAnswer.length; j++) {
            characterAnswer[j][5] = 0;
            for (var x = 0; x < 5; x++) {
                if (userAnswers[i] == characterAnswer[j][x])
                    characterAnswer[j][5]++;
            }
        }
    }
    answer();
}

function answer() {
    var a = 0,
        t;
    //var b;
    for (var j = 0; j < characterAnswer.length; j++) {
        if (characterAnswer[j][5] > a) {
            a = characterAnswer[j][5];
            t = characterAnswer[j][11];
            //b = image[j][11];
            console.log("pickle");
        }
    }
    alert(t);
    //alert(b);
}