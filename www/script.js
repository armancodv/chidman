var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $timeout) {

	$scope.colors = [];
	$scope.colors[1] = "93648d";
	$scope.colors[2] = "2dcc70";
	$scope.colors[3] = "f37338";
	$scope.colors[4] = "c6b097";
	$scope.colors[5] = "876a56";
	$scope.colors[6] = "505050";
	$scope.colors[7] = "b95651";
	$scope.colors[8] = "e84c3d";
	$scope.colors[9] = "005788";
	$scope.colors[10] = "3598dc";
	$scope.colors[11] = "f2c40f";

	$scope.bordercolors = [];
	$scope.bordercolors[1] = "845a7f";
	$scope.bordercolors[2] = "28b765";
	$scope.bordercolors[3] = "da6732";
	$scope.bordercolors[4] = "b29e88";
	$scope.bordercolors[5] = "795f4d";
	$scope.bordercolors[6] = "484848";
	$scope.bordercolors[7] = "a64d49";
	$scope.bordercolors[8] = "d04437";
	$scope.bordercolors[9] = "004e7a";
	$scope.bordercolors[10] = "3089c6";
	$scope.bordercolors[11] = "d9b00d";

	$scope.step_number=0;
	$scope.high_step=0;
	$scope.night_mode='';

	$scope.element_by_level=[];
	$scope.element_by_level[1]=2;
	$scope.element_by_level[2]=2;
	$scope.element_by_level[3]=3;
	$scope.element_by_level[4]=3;
	$scope.element_by_level[5]=4;
	$scope.element_by_level[6]=4;
	$scope.element_by_level[7]=5;
	$scope.element_by_level[8]=5;
	$scope.element_by_level[9]=6;
	$scope.element_by_level[10]=6;
	$scope.element_by_level[11]=7;
	$scope.element_by_level[12]=7;
	$scope.element_by_level[13]=8;
	$scope.element_by_level[14]=8;
	$scope.element_by_level[15]=9;
	$scope.element_by_level[16]=9;
	$scope.element_by_level[17]=10;
	$scope.element_by_level[18]=10;
	$scope.element_by_level[19]=11;
	$scope.element_by_level[20]=11;
	
	$scope.time_by_level=[];
	$scope.time_by_level[1]=2000;
	$scope.time_by_level[2]=1600;
	$scope.time_by_level[3]=3000;
	$scope.time_by_level[4]=2400;
	$scope.time_by_level[5]=4000;
	$scope.time_by_level[6]=3200;
	$scope.time_by_level[7]=5000;
	$scope.time_by_level[8]=4000;
	$scope.time_by_level[9]=6000;
	$scope.time_by_level[10]=4800;
	$scope.time_by_level[11]=7000;
	$scope.time_by_level[12]=5600;
	$scope.time_by_level[13]=8000;
	$scope.time_by_level[14]=6400;
	$scope.time_by_level[15]=9000;
	$scope.time_by_level[16]=7200;
	$scope.time_by_level[17]=10000;
	$scope.time_by_level[18]=8000;
	$scope.time_by_level[19]=11000;
	$scope.time_by_level[20]=8800;
	
	$scope.startlevel_by_step = [];
	$scope.startlevel_by_step[1]=1;
	$scope.startlevel_by_step[2]=2;
	$scope.startlevel_by_step[3]=3;
	$scope.startlevel_by_step[4]=5;
	$scope.startlevel_by_step[5]=7;
	$scope.startlevel_by_step[6]=10;
	$scope.startlevel_by_step[7]=13;
	$scope.startlevel_by_step[8]=17;
	$scope.startlevel_by_step[9]=21;
	$scope.startlevel_by_step[10]=26;
	$scope.startlevel_by_step[11]=31;
	$scope.startlevel_by_step[12]=37;
	$scope.startlevel_by_step[13]=43;
	$scope.startlevel_by_step[14]=50;
	$scope.startlevel_by_step[15]=57;
	$scope.startlevel_by_step[16]=65;
	$scope.startlevel_by_step[17]=73;
	$scope.startlevel_by_step[18]=82;
	$scope.startlevel_by_step[19]=91;
	$scope.startlevel_by_step[20]=100;
	$scope.startlevel_by_step[21]=150;

	$scope.level_by_step = function(step_number) {
		var level=1;
		for (var i=1; i<=20; i+=1) {
			if((step_number>=$scope.startlevel_by_step[i])&&(step_number<$scope.startlevel_by_step[i+1])) level=i;
		}
		if(step_number>=150) level=21;
		if(step_number<=0) level=0;
		return level;
	}
	$scope.next_step = function() {
		$scope.step_number++;
	}
	
	$scope.set_high_step = function(step) {
		$scope.high_step=step;
	}

	$scope.change_night_mode = function() {
		if($scope.night_mode=='') {
			$scope.night_mode='-night';
		} else {
			$scope.night_mode='';			
		}
		$scope.night_mode=$scope.night_mode;
	}

	$scope.create_table = function(number_of_element) {
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

	$scope.select = function(number) {
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
		}
	}

	$scope.isset_in_array = function(array, key) {
		var return_var = 0;
		for (var j=1; j<key; j+=1) {
			if(array[j]===array[key]) {return_var = 1;}
		}
		return return_var;
	}

	$scope.getRandom = function(number) {
		return Math.floor((Math.random()*number+1));
	}
	
	$scope.range = function(min, max, step) {
		step = step || 1;
		var input = [];
		for (var i = min; i <= max; i += step) input.push(i);
		return input;
	};

	$scope.backtohome = function() {
		$timeout.cancel(yourTimer);
	}

});

function page(page_number) {
	for(i=1;i<=8;i++) {
		if(i===page_number) {
			document.getElementById('page'+i).style.display='block';
		} else {
			document.getElementById('page'+i).style.display='none';
		}
	}
}

function next_step(number) {
	if(number===1) {
		document.getElementById('next-step').style.display='block';
	} else {
		document.getElementById('next-step').style.display='none';
	}
}