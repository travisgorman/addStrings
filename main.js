// this evaluates to a NodeList
const timeNodes1 = document.querySelectorAll('[data-time]')
// this evaluates to an Array - using the spread operator
const timeNodes2 = [...document.querySelectorAll('[data-time]')]
// this evaluates to an Array - using Array.from()
// I can use Array.from() or spread to convert a NodeList to an Array


// Lets go with Array.from()
const timeNodes = Array.from(document.querySelectorAll('[data-time]'))

// get an array of seconds (number, not strings)
// for instance, `'4: 11'` should be 251

// get the string data attribute from each element
// map again over the array of strings, using `split(':')`
// ES6 destructuring to make a variable for `mins` and `secs`
// left of `:` is `mins`, right of `:` is `secs`
// map a 3rd time, passing in `parseFloat` to turn strings into numbers
// before the return of the final map,  multiply `mins` by 60
// and add the seconds to return an array of whole numbers 
// with the total number of seconds in each video
const seconds = timeNodes
	.map(node => node.dataset.time)
		.map(timeCode => {
			const [mins, secs] = timeCode.split(':')
				.map(parseFloat);
				return (mins * 60) + secs;
	})
// reduce the seconds array to a sum of all seconds
.reduce((total, vidSecs) => total + vidSecs )

let secondsLeft = seconds;
// there are 3600 seconds in an hour
// divide by 3600 with Math.floor() to get whole number of hours
const hours = Math.floor(secondsLeft / 3600)
secondsLeft = secondsLeft % 3600;

// there are 4 hours 
// and 3538 seconds (just under an hours worth of seconds)
const mins = Math.floor(secondsLeft / 60);
// 58 mins
secondsLeft = secondsLeft % 60;

console.log(hours, mins, secondsLeft)
console.log( `Total play time is ${hours} hours, ${mins} minutes and ${secondsLeft} seconds.` )
// 4 hours 58 minutes 58 seconds









