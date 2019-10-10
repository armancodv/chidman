export default class Model {
    constructor() {
        this.level = 0;
        this.step = 0;
        this.whiz = '';
        this.record = 0;
        this.maximumStep = 100;
        this.nightMode = false;
        this.page = 1;
        if(localStorage.getItem('record')==null) {
            localStorage.setItem('record', 0);
        }
        this.record=localStorage.getItem('record');
        if(this.record>=150) {
            this.whiz='Congratulations, you whizzed it!';
        }
    
        if(localStorage.getItem('nightMode')==null) {
            localStorage.setItem('nightMode', '');
        }
        this.nightMode=localStorage.getItem('nightMode');
    }

    getElement() {
        return Math.floor(this.level * 2);
    }

    getTime(level = this.level) {
        if (level % 2 === 1) {
            return 1200 * (Math.floor(level / 2 + 2))
        } else {
            return 1000 * (Math.floor(level / 2 + 2))
        }
    }

    getLevel() {
        let sum = 0;
        let level = 0;
        for (let i = 1; i <= 21; i++) {
            sum += i;
            if (this.step <= sum) {
                level = i;
                break;
            }
        }
        return level;
    }

    resetRecord() {
        localStorage.setItem('record', 0);
        this.record = 0;
        this.whiz = '';
    }


    updateRecord(step = this.step) {
        if (localStorage.getItem('record') < step) {
            localStorage.setItem('record', step);
            this.record = step;
        }
        if (this.step >= this.maximumStep) {
            this.changeWhiz();
        }
    }

	changeWhiz() {
		this.whiz='Congratulations, you whizzed it!';
	}

    switchMode() {
        $scope.nightMode=localStorage.getItem('nightMode');
            if(localStorage.getItem('nightMode')) {
                localStorage.setItem('nightMode', false);
            } else {
                localStorage.setItem('nightMode', true);
            }
            this.nightMode=localStorage.getItem('nightMode');
    }

    changePage(page) {
        this.page = page;
    }
    
	backToHome() {
		$timeout.cancel(yourTimer);
		this.updateRecord();
	}

	getRandom(elements) {
		return random = Math.floor((Math.random() * (elements+1)));
	}
    
    nextStep() {
		this.step++;
    }
    
	createTable(elements) {
		this.count = 0;
		this.boxtable = [];
		this.result = [];
		for (let i = 1; i <= elements; i ++) {
			do {
				this.boxtable[i] = this.getRandom(11);
			} while (this.boxtable.includes(i));
		}
		this.boxtableExam = [];
		for (let i = 1; i <= elements; i ++) {
			do {
				this.boxtableExam[i] = this.getRandom(elements);
			} while (this.boxtableExam.includes(i));
		}
        this.nextStep();
        setTimeout(() => this.changePage(3), this.getTime());
	}

	select(number) {
		if (this.result[number] === undefined) this.count++;
		if (this.count === this.boxtableExam[number]) {
			this.result[number] = this.count;
			if (this.getElement() === this.count) {
				if (this.step_number < 150) { next_step(1); }
				else { this.updateRecord(this.step_number); this.changePage(8); }
			}
		} else {
			this.updateRecord(this.step_number);
            this.changePage(4);
            setTimeout(() => AdMob.showInterstitial(), 500); // admob
		}
	}
	
};