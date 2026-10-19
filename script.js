 
 
 let question = [
    {
        questext: "which language is for web development ?",
        options: ["python", "c", "c++", "javascript"],
        answer: "3"
    },
    {
        questext: "what does html stand for ?",
        options: ["hypertext markup language", "hypertype markup language", "hypotext mark language", "hintype markup language"],
        answer: "0"
    },
    {
        questext: "which company developed js ?",
        options: ["google", "netscape", "ubber", "microsoft"],
        answer: "1"
    }
]
let currentindex = 0;
let score = 0;
function showques() 
{
    let q = question[currentindex];
    document.getElementById("ques").textContent = "Q" + (currentindex + 1) + ". " + q.questext;
    document.getElementById("op1").textContent = q.options[0];
    document.getElementById("op2").textContent = q.options[1];
    document.getElementById("op3").textContent = q.options[2];
    document.getElementById("op4").textContent = q.options[3];

    let radios = document.querySelectorAll('input[name="opt"]');
    radios.forEach(function (radio) {
        radio.checked = false;
    });
}
 showques();

document.getElementById("nxt").addEventListener("click",()=>{

    let q = question[currentindex];
    let select = document.querySelector('input[name="opt"]:checked');
    if (select === null) 
         {
        alert("please select a value!");
        return;
         }
    if (select.value === q.answer) 
        {
        score++;
    }
    currentindex++;
    document.getElementById("scr").textContent = "score: " + score + "/ " + question.length;

    if (currentindex < question.length) 
        {
        showques();
        }
    else
         { 
        document.getElementById("ques").textContent = "Quiz over!!";
        document.getElementById("option").style.display = "none";
        document.getElementById("nxt").style.display = "none";
        }
});
