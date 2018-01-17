$(function(){
	$(".range-slider").ionRangeSlider({
	    grid: true,
	    from: 3,
	    values: [1, 2, 3, 4, 5,6, 7, 8, 9, 10]
	});


	
	var $slide_1 = $('#int-info'),
		$slide_1_value = $('#int-info').val(),
		$slide_1_parent = $slide_1.parents('.interview-item__body').find('.interview-item__value').children('span');

	$slide_1_parent.html($slide_1_value);

	$('#int-info').on('change', function(){
		$slide_1_value = $(this).val();
		console.log($slide_1_value);

		$slide_1_parent.html($slide_1_value);
	});

});