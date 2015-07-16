function heightCalculation () {
    var element = $('.tm-whatwedo li > a p');
    var lastHeight = element.css('height');
    function checkForChanges() {
        if (element.css('height') != lastHeight)
        {
            lastHeight = element.css('height');
        }

        setTimeout(checkForChanges, 500);
    }
};

var heightEqualizing = function () {
    heightCalculation();
    var element = $('.tm-whatwedo li');
    // Get an array of all element heights
    var elementHeights = element.map(function () {
        return $(this).height();
    }).get();

    // Math.max takes a variable number of arguments
    // `apply` is equivalent to passing each height as an argument
    var maxHeight = Math.max.apply(null, elementHeights);

    // Set each height to the max height
    element.height(maxHeight);
    console.log(maxHeight);
};

$(window).resize(heightEqualizing);
$(document).ready(heightEqualizing);