$(function () {

    $(".range-slider").ionRangeSlider({
        grid: true,
        from: 3,
        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    });

    function addText(elem) {
        var inputValue = +$(elem).val();
        var numHtml = $(elem).parents('.interview-item__rating').siblings('.interview-item__value').children('.interview-value');
        var textHtml = $(elem).parents('.interview-item__rating').siblings('.interview-item__value').children('.interview-value-txt');
        var $word = wordChange(inputValue);

        function wordChange(number) {
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
        numHtml.html(inputValue);
        textHtml.html($word);
    }

    addText('#int-info');
    addText('#int-service');
    addText('#int-worker');

    $('#int-info').on('change', function () {
        addText(this);
    });

    $('#int-service').on('change', function () {
        addText(this);
    });

    $('#int-worker').on('change', function () {
        addText(this);
    });

});