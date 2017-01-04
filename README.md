# Add Strings

All the action in this exercise is under the hood and in the console, so I'm going to post my all the JavaScript below with comments.
There isn't really anything to show. Bu
In the HTML we've got an unordered list of video links. We want to add up the timecodes, currently held as strings in a data attribute.
For instance, if this is our playlist, we want to see the length of the whole thing — 12:11. 

```html
<ul class="videos">
    <li data-time="5:43">
      Video 1
    </li>
    <li data-time="2:33">
      Video 2
    </li>
    <li data-time="3:45">
      Video 3
    </li>
</ul>
```

I am not working with an array of data. Instead, I am creating an array from the NodeList- pulling this data right out of index.html.

```js
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










```
