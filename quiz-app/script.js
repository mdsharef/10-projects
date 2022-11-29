const quizData = [
    {
        question: 'What stand for DU?',
        a: 'Dhaka Univesity',
        b: 'Daka University',
        c: 'University Dhaka',
        d: 'Dhaka Versity',
        correct: 'a'
    },{
        question: 'How does Rahima look like?',
        a: 'Good',
        b: 'Brilliant',
        c: 'Augly',
        d: 'Clever',
        correct: 'd'
    },{
        question: 'What did Rahim think',
        a: 'Education',
        b: 'Study',
        c: 'Job',
        d: 'Marriage',
        correct: 'c'
    },{
        question: 'When did DU was founded?',
        a: '1919',
        b: '1920',
        c: '1921',
        d: '1922',
        correct: 'c'
    },{
        question: 'How much colors did he collect?',
        a: '1',
        b: '2',
        c: '3',
        d: '4',
        correct: 'b'
    },
    {
        question: 'Did Hasan complete his homework?',
        a: 'yes',
        b: 'no',
        c: 'yes and a little bit',
        d: 'none of the options',
        correct: 'a'
    }
];

let currentQuiz = 0;
let score = 0;

window.onload = () => {
    main();
}

function main() {
    const quiz = document.getElementById('quiz');
    const questionText = document.getElementById('question');
    const a_text = document.getElementById('a_text');
    const b_text = document.getElementById('b_text');
    const c_text = document.getElementById('c_text');
    const d_text = document.getElementById('d_text');

    const answersEI = document.querySelectorAll('[name="answer"]');
    const submitBtn = document.getElementById('submit');

    loadQuiz(questionText, a_text, b_text, c_text, d_text, answersEI);
    submitBtn.addEventListener('click', submitBtnFunc(questionText, a_text, b_text, c_text, d_text, answersEI, answersEI));

}

function submitBtnFunc(qText, a_text, b_text, c_text, d_text, answersEI) {
    return function() {
        let answer = getSelected(answersEI);
        if (answer) {
            if (answer === quizData[currentQuiz].correct) score++;
            currentQuiz++;
            if(currentQuiz < quizData.length) {
                loadQuiz(qText, a_text, b_text, c_text, d_text, answersEI);
            } else {
                quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                <button onclick="location.reload()">Reload</button>
                `;
            }
        } else {
            alert('Please Select a option');
        }
    }    
}

function loadQuiz(q, a, b, c, d , items) {
    deSelectAnswer(items)
    q.innerHTML = quizData[currentQuiz].question;
    a.innerHTML = quizData[currentQuiz].a;
    b.innerHTML = quizData[currentQuiz].b;
    c.innerHTML = quizData[currentQuiz].c;
    d.innerHTML = quizData[currentQuiz].d;
}

function deSelectAnswer(items) {
    items.forEach(item => {
        item.checked = false;
    })
}

function getSelected(items) {
    let answer = undefined;

    items.forEach(item => {
        if(item.checked) answer = item.id;
    });
    return answer;
}