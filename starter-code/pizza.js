// Write your Pizza Builder JavaScript in this file.
let greenPepper = document.querySelectorAll('.green-pepper')
let btnGreenPepper = document.querySelector('.btn-green-peppers')

let peperoni = document.querySelectorAll('.pep')
let btnPeperoni = document.querySelector('.btn-pepperonni')

let mushroom = document.querySelectorAll('.mushroom')
let btnMushroom = document.querySelector('.btn-mushrooms')

let gluten = document.querySelector('.crust')
let btnGlutenfree = document.querySelector('.btn-crust')

let sauce = document.querySelector('.sauce')
let btnSauce = document.querySelector('.btn-sauce')

let prices = document.querySelectorAll('.price ul li')
let total = document.querySelector('.price strong').textContent
let totall = parseInt(total.slice(1,3))

function quitaPone(slctr, arr, i) {
	slctr.addEventListener('click', function () {
		this.classList.toggle('active')
		const arrNew = [...arr]
		arrNew.forEach((ele) => {
			ele.classList.toggle('hide')
		});

		prices[i].classList.toggle('hide')
		let pr = prices[i].textContent.slice(1,3)
		let intpr =parseInt(pr)
		totall = totall + intpr
		console.log(totall)
	})
	
}

btnSauce.addEventListener('click', function () {
	this.classList.toggle('active')
	sauce.classList.toggle('sauce-white')
	prices[3].classList.toggle('hide')
})

btnGlutenfree.addEventListener('click', function () {
	this.classList.toggle('active')
	gluten.classList.toggle('crust-gluten-free')
	prices[4].classList.toggle('hide')
})


quitaPone(btnGreenPepper, greenPepper, 2)
quitaPone(btnPeperoni, peperoni, 0)
quitaPone(btnMushroom, mushroom, 1)