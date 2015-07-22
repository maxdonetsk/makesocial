var heightEqualizing = function () {
    var element1 = $('.tm-whatwedo li p'),
            element2 = $('.tm-casestudies li').find('span'),
            element3 = $('.tm-values li>div'),
            i,
            elements = [element1, element2, element3];

    var maxHeight;

    (function () {
        for (i = 0; i < elements.length; i++) {
            maxHeight = 0;
            elements[i].each(function () {
                switch (i) {
                    case 2:
                        height = $(this).css('height', 'auto').outerHeight();
                        break;
                    default:
                        height = $(this).css('height', 'auto').height();
                }
                if (height > maxHeight) {
                    maxHeight = height;
                }
                elements[i].css('height', maxHeight);
            });
        }
    })();

    var why1height = $('.tm-why-us-text-01').outerHeight();
    var why2height = $('.tm-why-us-text-02').outerHeight();
    var why3height = $('.tm-why-us-text-03').outerHeight();
    var why4height = $('.tm-why-us-text-04').outerHeight();
    var why5height = $('.tm-why-us-text-05').outerHeight();
    var why6height = $('.tm-why-us-text-06').outerHeight();
    var joinheight = $('.tm-join-us-text').outerHeight();
    $('.tm-why-us-img-01').css('height', why1height);
    $('.tm-why-us-img-02').css('height', why2height);
    $('.tm-why-us-img-03').css('height', why3height);
    $('.tm-why-us-img-04').css('height', why4height);
    $('.tm-why-us-img-05').css('height', why5height);
    $('.tm-why-us-img-06').css('height', why6height);
    $('[class*="tm-join-us-img"]').css('height', joinheight);
};

$(window).load(heightEqualizing);
$(window).resize(heightEqualizing);

$(document).ready(function () {
    $('#why-us-content').closest('body').find('a[href*="why-us"]').addClass('tm-active');
});