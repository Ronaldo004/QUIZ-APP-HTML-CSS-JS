function data() {
    var username = document.getElementById("username")
    var pass = document.getElementById("pass")
    if (username.value === "Rohan" && pass.value === "1234") {
        console.log("abc")
        window.location = "login.html"
    }
    else{
        alert("UserName or Password is invalid")
    }


}
var questions = [
    {
        question: "What is the answer of (10 * 5) /  5?",
        answers: {
            a: "20",
            b: "10",
            c: "5",
            d: "15"
        },
        correctAnswer: "b"
    },
    {
        question: "Who is Imran Khan?",
        answers: {
            a: "Current Prime Minister",
            b: "Cricketer",
            c: "President Of Pakistan",
            d: "Professer"
        },
        correctAnswer: "a"
    },
    {
        question: "Who is the winner of ICC Men's World Cup 2019?",
        answers: {
            a: "India",
            b: "Pakistan",
            c: "Newzeland",
            d: "England"
        },
        correctAnswer: "d"
    },
    {
        question: "For which of the following disciplines is Nobel Prize awarded?",
        answers: {
            a: "Physics and Chemistry",
            b: "Physiology or Medicine",
            c: "Literature, Peace and Economics",
            d: "All of the above"
        },
        correctAnswer: "d"
    },
    {
        question: "	In which year of First World War Germany declared war on Russia and France?",
        answers: {
            a: "1914",
            b: "1915",
            c: "1916",
            d: "1917"
        },
        correctAnswer: "a"
    },
    {
        question: "ICAO stands for?",
        answers: {
            a: "International Civil Aviation Organization",
            b: "Indian Corporation of Agriculture Organization",
            c: "Institute of Company of Accounts Organization",
            d: "None of the above"
        },
        correctAnswer: "a"
    },
    {
        question: "Which of the following is capital of Pakistan?",
        answers: {
            a: "Rawalpindi",
            b: "Karachi",
            c: "Islamabad",
            d: "Peshawer"
        },
        correctAnswer: "c"
    },
    {
        question: "Against which bowlers Shahid afridi hits 2 consecutive sixes is Asia Cup?",
        answers: {
            a: "Muhammad Shami",
            b: "Ashwin",
            c: "Thisara Parera",
            d: "None of above"
        },
        correctAnswer: "b"
    },
    {
        question: "Corey Anderson who has hit the fastest ODI century in 36 balls is from",
        answers: {
            a: "England",
            b: "Australia",
            c: "Pakistan",
            d: "NewZeland"
        },
        correctAnswer: "d"
    },
    {
        question: "Galileo was an astronomer who",
        answers: {
            a: "developed the telescope",
            b: "discovered four satellites of Jupiter",
            c: "discovered that the movement of pendulum produces a regular time measuremen",
            d: "All of above"
        },
        correctAnswer: "b"
    },
]


var min = 4
var sec = 60

var mins = document.getElementById("min")
var secs = document.getElementById("sec")

function timer() {
    mins.innerHTML = min
    sec--
    secs.innerHTML = sec
    if (sec === 0) {
        min--
        sec = 60
    }
    else if (min === 0) {
        var main2 = document.getElementById("main2")
        main2.style.display = "none"


        var res = document.getElementById("result")
        res.style.display = "block"

        var obt = document.getElementById("obtained")
        obt.innerHTML = "Obtained Marks = " + score

        var cond = document.getElementById("condition")

        if (score <= 60 || min === 0) {
            clearInterval(timer())
            cond.innerHTML = "Result = Fail"
        }
        else {
            cond.innerHTML = "Result = Pass"
        }

        sec = 0
        secs.innerHTML = sec
    }
}

var count = 0
var score = 0

function start() {
    var main1 = document.getElementById("main1")
    main1.style.display = "none"


    var main2 = document.getElementById("main2")
    main2.style.display = "block"

    var queshead = document.getElementById("queshead")
    var ques = document.getElementById("question")
    var optn1 = document.getElementById("option1")
    var optn2 = document.getElementById("option2")
    var optn3 = document.getElementById("option3")
    var optn4 = document.getElementById("option4")
    ques.innerHTML = "Q" + (count + 1) + " :" + questions[count].question
    optn1.innerHTML = questions[count].answers.a
    optn2.innerHTML = questions[count].answers.b
    optn3.innerHTML = questions[count].answers.c
    optn4.innerHTML = questions[count].answers.d

    setInterval(timer, 1000)

}
var a = document.getElementById("a")
var b = document.getElementById("b")
var c = document.getElementById("c")
var d = document.getElementById("d")


function change() {


    if (count !== questions.length - 1) {
        if (a.checked || b.checked || c.checked || d.checked) {
            count++
            var ques = document.getElementById("question")
            var optn1 = document.getElementById("option1")
            var optn2 = document.getElementById("option2")
            var optn3 = document.getElementById("option3")
            var optn4 = document.getElementById("option4")
            ques.innerHTML = "Q" + (count + 1) + " :" + questions[count].question
            optn1.innerHTML = questions[count].answers.a
            optn2.innerHTML = questions[count].answers.b
            optn3.innerHTML = questions[count].answers.c
            optn4.innerHTML = questions[count].answers.d

            console.log(count)

            var radios = document.getElementsByName("r1");
            for (var i = 0; i < radios.length; i++) {
                if (radios[i].checked) {

                    console.log(radios[i].id)
                    console.log(questions[count - 1].correctAnswer)
                    if (radios[i].id === questions[count - 1].correctAnswer) {
                        score = score + 10
                    }
                }
            }
        }
        else{
            alert("Please check one")
        }


        }


        else {
            var main2 = document.getElementById("main2")
            main2.style.display = "none"


            var res = document.getElementById("result")
            res.style.display = "block"

            var obt = document.getElementById("obtained")
            obt.innerHTML = "Obtained Marks = " + score

            var cond = document.getElementById("condition")

            if (score < 60 || min === 0) {
                clearInterval(timer())
                cond.innerHTML = "Result = Fail"
            }
            else {
                cond.innerHTML = "Result = Pass"
            }


        }
    }