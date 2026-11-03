const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const table = document.querySelector('table')
	const tr = document.createElement('tr')
	const td = document.createElement('td')
	const itemsPrice = document.querySelectorAll('.prices')
	let totalAmount = 0
	itemsPrice.forEach(item)=>{
		totalAmount += Number(item.textContent)
	}
	td.append(totalAmount)
	tr.append(td)
	table.append(tr)
};

getSumBtn.addEventListener("click", getSum);