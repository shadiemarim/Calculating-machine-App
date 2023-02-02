
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(countEl) //this is supposed to show count-el on the html code.

let count=0



function increment(){
	count += 1
	countEl.textContent = count
}

function save(){
	let countStr = count + " - " //variable that contains both dash and the seperator
	saveEl.textContent += countStr
	countEl.textContent = 0
	count = 0
}
