const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
    "Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
    "u","v","w","x","y","z", 
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
    "=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const passOneEl = document.getElementById("p1")
const passTwoEl = document.getElementById("p2")

const inputElement = document.getElementById("kodeLænde");
const buttonElement = document.getElementById("lændeBtn");


let gemtTal = ""


buttonElement.addEventListener("click", function() {
    
    
    gemtTal = inputElement.value;

    
    //console.log("Teksten er nu gemt i JavaScript:", gemtTal);

    
    inputElement.value = "";
    let passOne = "" 
    let passTwo = ""
    let kodeOne = ""
    let kodeTwo = ""
    for(let i = 0; i < gemtTal; i++) {
        passOne = Math.floor(Math.random() * characters.length)
        kodeOne += characters[passOne]
        passOneEl.textContent = kodeOne
        passTwo = Math.floor(Math.random() * characters.length)
        kodeTwo += characters[passTwo]
        passTwoEl.textContent = kodeTwo
        
        
        
};})

function kopierTekst1() {
  // 1. Find inputfeltet i HTML'en
  let tekstFelt = document.getElementById("p1");

  // 2. Kopier værdien af feltet til udklippsholderen
  navigator.clipboard.writeText(tekstFelt.textContent)
    .then(() => {
      // Valgfrit: Giv brugeren besked om, at det lykkedes
      alert("Teksten blev kopieret: " + tekstFelt.textContent);
    })
    .catch(err => {
      // Valgfrit: Håndter eventuelle fejl
      console.error("Fejl under kopiering: ", err);
    });
    
}
function kopierTekst2() {
  // 1. Find inputfeltet i HTML'en
  let tekstFelt2 = document.getElementById("p2");

  // 2. Kopier værdien af feltet til udklippsholderen
  navigator.clipboard.writeText(tekstFelt2.textContent)
    .then(() => {
      // Valgfrit: Giv brugeren besked om, at det lykkedes
      alert("Teksten blev kopieret: " + tekstFelt2.textContent);
    })
    .catch(err => {
      // Valgfrit: Håndter eventuelle fejl
      console.error("Fejl under kopiering: ", err);
    });
    console.log(tekstFelt2)
}