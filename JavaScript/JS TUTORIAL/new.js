function countCurrency(amount)
	{
		let notes = [ 2000, 500, 200, 100, 50, 20, 10, 5,2, 1 ];
		let noteCounter = Array(10).fill(0);
		
		for (let i = 0; i < 10; i++) {
			if (amount >= notes[i]) {
				noteCounter[i] = Math.floor(amount / notes[i]);
				amount = amount % notes[i];
			}
		}
		
		for (let i = 0; i < 10; i++) {
			if (noteCounter[i] != 0) {
				document.write(notes[i] + " : "
					+ noteCounter[i] + "<br/>");
			}
		}
	}

	countCurrency(68);
    console.log(countCurrency)