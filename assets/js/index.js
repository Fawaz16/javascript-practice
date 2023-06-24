const rootfile = document.querySelector("#rootfile")


var inputElement=document.createElement("input")
inputElement.setAttribute=("type","text", "placeholder","enter your name");

var buttonBtn=document.createElement("button")
var textArea=document.createElement("textarea")
textArea.setAttribute("plaeholder","enter your message")
buttonBtn.textContent="Submit"
buttonBtn.setAttribute=("type","submit")

var selectData=document.createElement("select")
var option1=document.createElement("option")
option1.setAttribute("value","option1")
option1.textContent="option1"

var option2=document.createElement("option")
option2.setAttribute("value","option2")
option2.textContent="option2"

selectData.appendChild(option1)
selectData.appendChild(option2)


var checkBox=document.createElement("checkbox")
checkBox.setAttribute("type","checkbox")
checkBox.textContent="check this box";


var box=document.createElement("div")
box.setAttribute("class","container")
 
var inputText=document.createElement("input")
inputText.setAttribute("type","text")
var inputEmail=document.createElement("input")
inputEmail.setAttribute("type","email")

box.appendChild(inputText)
box.appendChild(inputEmail)


rootfile.append(inputElement,buttonBtn,textArea,selectData,checkBox,box)