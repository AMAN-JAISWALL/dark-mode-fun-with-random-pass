// console.log("random pass generator");

const btnElem = document.getElementById("btn");
const passwordElem = document.getElementById("password");
const passLength = 12;
const copyPass = document.getElementById("copyPass");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = 'abcdefghijklmnopqrstuvwzyz';
const numbers = '0123456789'
const symbols = '~!#$%^&*()_+{}:?><|';

btnElem.addEventListener('click',()=>{
    let pass= "";
    //here we can use Math.floor ya Math.round
    
    // ourPass = pass;
    // console.log("ourPass",ourPass);
    while(passLength>pass.length){
        pass += uppercase[Math.floor(Math.random() * uppercase.length)];
        // console.log("out pass",pass);
        pass += lowercase[Math.floor(Math.random() * lowercase.length)];
        // console.log("2nd time pas",pass);
        pass+= numbers[Math.floor(Math.random() * numbers.length)];
        pass+= symbols[Math.floor(Math.random() * symbols.length)];
    }
    // console.log(pass);
    passwordElem.value = pass;
})

copyPass.addEventListener("click",()=>{
    passwordElem.select();
    document.execCommand("copy");
})


//here i am writing code for barkMode functionality of webpage
let moonAndSunIcon = document.getElementById("moonAndSunIcon");

moonAndSunIcon.addEventListener("click",()=>{
    moonAndSunIcon.src = "dark theme icon/sun.png";

    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        moonAndSunIcon.src = "dark theme icon/sun.png";
    }else{
        moonAndSunIcon.src = "dark theme icon/moon.png";
        
    }
})