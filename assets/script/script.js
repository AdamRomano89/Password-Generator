//References items in DOM - creates constant for input of password criteria
const charRangeVal = document.getElementById('charRangeVal')
const charLengthVal = document.getElementById('charLengthVal')
const charUpperEl = document.getElementById('charUpperEl')
const charLowerEl = document.getElementById('charLowerEl')
const charNumsEl = document.getElementById('charNumsEl')
const charSpecialEl = document.getElementById('charSpecialEl')
const passwordForm = document.getElementById('passwordForm')
const passwordDisplay = document.getElementById('passwordDisplay')

passwordForm.addEventListener('submit', e => {
	e.preventDefault()
	const pLength = charLengthVal.value
	const pUpper = charUpperEl.checked
	const pLower = charLowerEl.checked
	const pNumbers = charNumsEl.checked
	const pSpecial = charSpecialEl.checked
	const password = generatePassword(pLength, pUpper, pLower, pNumbers, pSpecial)
	passwordDisplay.innerText = password 
})


const UPPER_CHAR = arrayRange(65, 90)
const LOWER_CHAR = arrayRange(97, 122)
const NUM_CHAR = arrayRange(48, 57)
const SPECIAL_CHAR = arrayRange(33, 47).concat(
	arrayRange(58, 64)
).concat(
	arrayRange(91, 96)
).concat(
	arrayRange(123, 126)
)
// function goes through and grabs from refrenced ranges
function arrayRange(low, high) {
	const array = []
	for (let i = low; i <= high; i++) {
		array.push(i)
	}
	return array
}


function generatePassword(pLength, pLower, pUpper, pNumbers, pSpecial) { //is it a problem that pLower not the same color? says its never read`
	let charCodes = LOWER_CHAR 
	if (pUpper) charCodes = charCodes.concat(UPPER_CHAR)
	if (pNumbers) charCodes = charCodes.concat(NUM_CHAR)
	if (pSpecial) charCodes = charCodes.concat(SPECIAL_CHAR)

	const pwChar = []
	for (let i = 0; i < pLength; i++) {
		const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
		pwChar.push(String.fromCharCode(characterCode))
	}
	return pwChar.join('')
	
}

charRangeVal.addEventListener('input', charLengthfx)
charLengthVal.addEventListener('input', charLengthfx)


function charLengthfx(e) {
	const value = e.target.value
	charLengthVal.value = value
  	charRangeVal.value = value
}