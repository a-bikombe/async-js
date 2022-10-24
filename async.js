"use strict";
console.log("start");
setTimeout(go,1000);
console.log("end");

function go() {

	const LIMIT = 10;
	const closure = () => {
		let counter = 1;
  	console.log("in closure");
  	return () => {
		console.log(counter);
  		counter++;
		if (counter > LIMIT) {
			clearInterval(interval);
			console.log("done");
		}
  	}
}

	const count = closure();

	const interval = setInterval(count,1000);

}