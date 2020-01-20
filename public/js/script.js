$(document).ready(function() {
    // toggle navbar 
    let isMobile = window.matchMedia('only screen and (max-width: 900px)').matches;

    $('.toggle').click((e) => {
        console.log('clicked toggle')
        $('.navbar.header').fadeToggle(200);
    })

    $('.expandproject').click(function(e) {

        if($('.navbar').height() !== 0) {
            // $('.navbar').fadeToggle(200);
        }
        $(this).parent().parent().toggleClass('fullwidth');
        $(this).parent().parent().find('iframe').toggleClass('fullheight');
        $(this).parent().parent().find('code').toggleClass('zoomtext');

        e.preventDefault();
        setTimeout((aid) => {
            var aid = $(this).attr("href");
            $('html,body').animate({
                scrollTop: $(aid).offset().top
            }, 'fast');
        }, 250);
    });











    // TOGGLE LANGUAGE POPUPS ON HOME PAGE
    $('.langpopup').click(function(e) {

        $(this).children().toggleClass('flip');
        $(this).next().toggleClass('hidden');
    });

    // Navbar hide on scroll
    $(window).scroll(() => {
        if(!isMobile) {
            let scroll = $(document).scrollTop();
            if(scroll >= $('.navbar').height() && $('.navbar').height() !== 0) {

                $('.navbar header').fadeOut(200);

            } else {
                $('.navbar').fadeIn(200);
            }

        }

    });

});



const animateText = (element, speed) => {
    // get length of text
    // split into array of letters
    // make new array filled with spaces
    // iterate through that array, and add a letter from orignal string at index

    const len = element.innerText.length;
    const str = element.innerText;
    const spaces = new Array(len).fill(" ");


    let idx = 0;
    const animation = setInterval(() => {

            element.innerHTML = spaces.join("")
                // spaces[idx % len] = str[idx % len]


            if(idx === len + 1) {
                idx = -1;
                spaces.fill(" ")
            }

            idx++;
        },
        speed);
}



if(document.location.pathname === "/") {
    anim = document.querySelector('.animated');
    // animateText(anim, 500);
};