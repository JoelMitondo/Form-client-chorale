
const steps = document.querySelectorAll(".step")
const nextBtns = document.querySelectorAll(".next")
const prevBtns = document.querySelectorAll(".prev")
const progressBar = document.getElementById("progressBar")

let currentStep = 0

function updateForm(){

steps.forEach((step,index)=>{

step.classList.toggle("active", index === currentStep)

})

let progress = (currentStep)/(steps.length-1)*100

progressBar.style.width = progress + "%"

}

nextBtns.forEach(btn=>{

btn.addEventListener("click",()=>{

currentStep++
updateForm()

})

})

prevBtns.forEach(btn=>{

btn.addEventListener("click",()=>{

currentStep--
updateForm()

})

})

updateForm()



document.getElementById("form").addEventListener("submit",function(e){

e.preventDefault()

const { jsPDF } = window.jspdf

let pdf = new jsPDF()

let data = new FormData(this)

let y = 20

pdf.setFontSize(18)

pdf.text("Formulaire Client - Création Site Web",20,10)

pdf.setFontSize(12)

data.forEach((value,key)=>{

pdf.text(key + " : " + value , 20 , y)

y += 10

})

let pdfFile = pdf.output("blob")

emailjs.init("PUBLIC_KEY")

emailjs.send("SERVICE_ID","TEMPLATE_ID",{

message:"Nouveau formulaire client rempli."

})

alert("Formulaire envoyé avec succès")

})
