// var ques = document.getElementById('ques')
// var opt1 = document.getElementById('opt1')
// var opt2 = document.getElementById('opt2')
// var opt3 = document.getElementById('opt3')
// var opt4 = document.getElementById('opt4')
// var correctAns = document.getElementById('correctAns')

// console.log(ques.value)
// console.log(opt1.value)
// console.log(opt2.value)
// console.log(opt3.value)
// console.log(opt4.value)
// console.log(correctAns.value)

function add(){
    var obj = {
        question: ques.value,
        option: [opt1.value,opt2.value,opt3.value,opt4.value],
        correctAnswer: correctAns.value
    }
    // console.log(obj)
    firebase.database().ref('Ques1').set(obj)
}