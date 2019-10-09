export default class View {
    constructor() {
        this.colors = {
            backgrounds: ["93648d", "2dcc70", "f37338", "c6b097", "876a56", "505050", "b95651", "e84c3d", "005788", "3598dc", "f2c40f"],
            borders: ["845a7f", "28b765", "da6732", "b29e88", "795f4d", "484848", "a64d49", "d04437", "004e7a", "3089c6", "d9b00d"]
        };
        for(let i=1;i<=8;i++) {
            this.page[i] = document.getElementById('page'+i);
        }
        this.nextStepButton = document.getElementById('next-step');
	}

    changePage(page) {
        for(let i=1;i<=8;i++) {
            if(i===page) {
                this.page[i].style.display='block';
            } else {
                this.page[i].style.display='none';
            }
        }
    }
    
    showNextStep(show) {
        if(show) {
            this.nextStepButton.style.display='table';
        } else {
            this.nextStepButton.style.display='none';
        }
    }

	getRandomColor = function() {
        let random = Math.floor((Math.random()*this.colors.backgrounds.length));
        return {
            background: this.colors.backgrounds[random],
            background: this.colors.borders[random]
        };
	}

    createTable(number_of_element) {
		$scope.number_of_element=number_of_element;
		$scope.count=0;
		$scope.boxtable = [];
		$scope.result=[];
		for (var i=1; i<=number_of_element; i+=1) {
			do{
				$scope.boxtable[i]=$scope.getRandom(11);
			} while ($scope.isset_in_array($scope.boxtable,i)===1);
		}
		$scope.boxtable_exam = [];
		for (var i=1; i<=number_of_element; i+=1) {
			do{
				$scope.boxtable_exam[i]=$scope.getRandom(number_of_element);
			} while ($scope.isset_in_array($scope.boxtable_exam,i)===1);
		}
		next_step(0);
		yourTimer = $timeout(function() {page(3);}, $scope.time_by_level[$scope.level_by_step($scope.step_number)]);
	}

	select(number) {
		if($scope.result[number]==undefined) $scope.count++;
		if($scope.count===$scope.boxtable_exam[number]) {
			$scope.result[number]=$scope.count;
			if($scope.element_by_level[$scope.level_by_step($scope.step_number)]===$scope.count) {
				if($scope.step_number<150) {next_step(1);}
				else {$scope.set_high_step($scope.step_number);page(8);}
			}
		} else {
			$scope.set_high_step($scope.step_number);
			page(4);
			yourTimer = $timeout(function() {AdMob.showInterstitial();}, 500);
		}
	}
};

