export default class View {
	constructor() {
		this.colors = {
			backgrounds: ["93648d", "2dcc70", "f37338", "c6b097", "876a56", "505050", "b95651", "e84c3d", "005788", "3598dc", "f2c40f"],
			borders: ["845a7f", "28b765", "da6732", "b29e88", "795f4d", "484848", "a64d49", "d04437", "004e7a", "3089c6", "d9b00d"]
		};
		for (let i = 1; i <= 8; i++) {
			this.page[i] = document.getElementById('page' + i);
		}
		this.nextStepButton = document.getElementById('next-step');
		this.progressBarLeft = document.getElementsByClassName('progress_bar_left');
		this.dummyHead = document.getElementById('dummy-head');
		this.dummyRightHand = document.getElementById('dummy-right-hand');
		this.dummyLeftHand = document.getElementById('dummy-left-hand');
		this.dummyBody = document.getElementById('dummy-body');

	}

	changePage(page) {
		for (let i = 1; i <= 8; i++) {
			if (i === page) {
				this.page[i].style.display = 'block';
			} else {
				this.page[i].style.display = 'none';
			}
		}
	}

	showNextStep(show) {
		if (show) {
			this.nextStepButton.style.display = 'table';
		} else {
			this.nextStepButton.style.display = 'none';
		}
	}

	updateRecord(step) {
		this.progressBarLeft.array.forEach(element => {
			element.style.width = `${step*189/150+1} px`;
		});
	}

	addMainElement(colorId, number, id) {
		let element = `<table cellspacing="0" cellpadding="0" class="main-element" style="background-color:#${this.backgrounds[colorId]};border:1px solid #${this.borders[colorId]}"><tr><td class="main-element-td">${number}</td></tr></table>`;
		let tag = document.getElementById(id);
		tag.insertAdjacentHTML("afterend", element);
	}

};

