$(function() { //this code here will run only when the entire HTML doc is loaded & ready

	var guestCount = 0,
		donutCount = 0,
		$guestNum = $('#guests span'),
		$donutNum = $('#donuts span'),
		$status = $('#status'),
		$guests = $('#guests'),
		$donuts = $('#donuts');

	$guests.find('button').eq(0).click(function() {
		guestCount += 1;
		$guestNum.text(guestCount);
	});

	$guests.find('button').eq(1).click(function() {
		if (guestCount > 0) {
		guestCount -= 1;
		$guestNum.text(guestCount);
		}
	});

	$donuts.find('button').eq(0).click(function() {
		donutCount += 1;
		$donutNum.text(donutCount);
	});

	$donuts.find('button').eq(1).click(function() {
		if (donutCount > 0) {
		donutCount -= 1;
		$donutNum.text(donutCount);
		}
	});

	$('#check button').click(function(){
		if (donutCount < guestCount){
			$status.text('Guests are hungry');
		} else {
			$status.text('Guests are happy');
		}
		});

});