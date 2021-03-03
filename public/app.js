function getQues(){
    firebase.database().ref("Ques1").once('value',function(data) {
        console.log(data.val())
    })
}
var a = getQues()

var questions = [
    a,
    {
        question: " HTML stand for ______",
        option: ['HyperText Markup Language', 'abc', 'HyperText Markup Language', 'HyperText MAkeup Language'],
        correctAnswer: 'HyperText Markup Language'
    },
    {
        question: " CSS stand for ______",
        option: ['Cascading Style Sheet', 'HyperText MAkeup Language', 'Java Script', 'HyperText MAkeup Language'],
        correctAnswer: 'Cascading Style Sheet'
    },
    {
        question: " JS stand for ______",
        option: ['Java Script', 'HyperText MAkeup Language', 'Java Script', 'HyperText MAkeup Language'],
        correctAnswer: 'Java Script'
    },
    {
        question: " JS made in  ______ time period",
        option: ['10 days', '20 days', '100 days', '1 year'],
        correctAnswer: '10 days'
    },
    {
        question: " CSS color can be defined in ______",
        option: ['3', '4', '6', '1'],
        correctAnswer: '3'
    },
    {
        question: " HTML is a  programming Language",
        option: ['True', 'False',],
        correctAnswer: 'False'
    }

]
console.log(questions[0])



var count = 0
var score = 0

function displayQuestion() {
    // to display question number out of total questions 
    var a = document.getElementById('questionCompleted')
    a.innerHTML = count + 1
    var b = document.getElementById('totalQuestion')
    b.innerHTML = questions.length

    // to display a question
    var questiondisplay = document.getElementById('question')
    questiondisplay.innerHTML = questions[count].question

    // to display options
    var optionDiv = document.getElementById('optionsparent')
    optionDiv.innerHTML = ''

    for (var i = 0; i < questions[count].option.length; i++) {
        var div = document.createElement('div')
        div.setAttribute('class', 'col-md-6 p-3')

        var optionBtn = document.createElement('button')
        optionBtn.setAttribute('class', 'btn btn-outline-primary')
        optionBtn.setAttribute('onclick', 'makeActive(this)')

        var optionBtnText = document.createTextNode(questions[count].option[i])
        optionBtn.appendChild(optionBtnText)

        div.appendChild(optionBtn)
        optionDiv.appendChild(div)
    }
}

// making the clicked button active
function makeActive(e) {
    removeActiveClass()
    e.classList.add('active')
}

// to remove the pre existing active classes so that only 1 btn active at a time
function removeActiveClass() {
    var active = document.getElementsByClassName('active')
    for (i = 0; i < active.length; i++) {
        active[i].classList.remove('active')
    }
}

// checking answer and displaying next ques
function nextQuestion() {
    var activeBtn = document.getElementsByClassName('active')
    if (activeBtn.length === 0) {
        alert('Please select an option')
    }
    else {
        //To check the answer
        // console.log(activeBtn[0].firstChild.nodeValue)
        // console.log(questions[count].correctAnswer)
        if(activeBtn[0].firstChild.nodeValue == questions[count].correctAnswer){
            score++
        }

        // To display next question
        if (count < questions.length - 1) {
            count++
            displayQuestion()
        }

        // to disable nextBtn and enable submitBtn if it is last question
        if (count == questions.length - 1) {
            document.getElementById('nextBtn').disabled = true
            document.getElementById('submitBtn').disabled = false
        }
        
    }
}


function submit(){
    alert(`Your score is: ${score}`)
}

var interval = setInterval(displayQuestion,5000)
// clearInterval(interval)
// displayQuestion()