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

    getTime() {
        if (this.level % 2 === 1) {
            return 1200 * (Math.floor(this.level / 2 + 2))
        } else {
            return 1000 * (Math.floor(this.level / 2 + 2))
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


    updateRecord() {
        if (localStorage.getItem('record') < this.step) {
            localStorage.setItem('record', this.step);
            this.record = this.step;
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
    
	backToHome = function() {
		$timeout.cancel(yourTimer);
		$scope.set_high_step(this.step-1); // reset check
	}
	
};