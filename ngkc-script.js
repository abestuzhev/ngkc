$(function(){
	$(".range-slider").ionRangeSlider({
	    grid: true,
	    from: 3,
	    values: [1, 2, 3, 4, 5,6, 7, 8, 9, 10]
	});


	
	// var $slide_1 = $('#int-info'),
	// 	$slide_1_value = $('#int-info').val(),
	// 	$slide_1_parent = $slide_1.parents('.interview-item__body').find('.interview-item__value').children('span');

	// $slide_1_parent.html($slide_1_value);


	

	function addText(elem){

		
		var elem = $(elem).val();
		var numHtml = $(elem).parents('.interview-item__body').find('.interview-item__value').find('.interview-value');
		var textHtml = $(elem).parents('.interview-item__body').find('.interview-item__value').find('.interview-value-txt');
		
		var $word = wordChange(elem);

		function wordChange (number){
			switch (number) {
				case 1:
					$word = "балл";
					break;
				case 2:
				case 3:
				case 4:
					$word = "балла";
					break;
				default: 
					$word = "баллов";
			}
			return $word;
		}


		numHtml.html(elem);
		textHtml.html($word);

	}

	addText('#int-info');

	

	$('#int-info').on('change', function(){
		// $slide_1_value = $(this).val();
		// console.log($slide_1_value);

		// $slide_1_parent.html($slide_1_value);
		addText('#int-info');
	});

});