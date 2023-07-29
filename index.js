const input = document.getElementById("numOfWord");
const container = document.querySelector(".centerpart");

// to genatate randome  words of length n 
const generateWord = (n) =>{
    let text = " ";
    const letters = "abcdefghijklmnopqrstuvwxyz";

    for(let i = 0; i<n ; i++)
    { 
        const random = (Math.random()*(letters.length-1)).toFixed(0);
        text+= letters[random];
    }
    return text;
}

// to genarate paragraph 
let numOfWprd;
const generatePara  = ()=>{
    numOfWord = (Number(input.value));

    const para = document.createElement("p"); // button click hone par ek pera create kar dia 
    
    let newPara = "";
    for(let i=0 ; i<=numOfWord-1 ; i++)
    {
        const randomNumber = (Math.random()*10).toFixed(0) ;
        newPara += generateWord(randomNumber);
        newPara +=" ";
    }
    para.innerHTML=newPara ; // dummy text
    para.setAttribute("class" , "para"); // attribute set kar diya class = "para"

    container.append(para);  // pera ke last me insert karwa diya 
}