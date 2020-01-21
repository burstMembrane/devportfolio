const scrollNavHide = () => {


    $(window).scroll(() => {

        let $nav = $('.navbar')
        let navHeight = $nav.height();
        let navDisplay = $nav.css('display');
        let scroll = $(document).scrollTop();

        console.log(`Scroll: ${scroll} \n Nav height: ${navHeight} \n Nav Display${navDisplay}`)
        if(scroll > navHeight && !navDisplay == "none") {

            $('.navbar').fadeOut(200);
        } else {
            $('.navbar').fadeIn(200);
        }

    });



}


$(function() {
    // toggle navbar
    let isMobile = window.matchMedia('only screen and (max-width: 900px)').matches;
    // Navbar hide on scroll
    // scrollNavHide();

    $('#contact').submit((e) => {
        $('#sendmsg').html(` <img class="spinner" src="assets/img/spinner.gif">`)
    })

    $('.toggle').click((e) => {
        console.log('clicked toggle')
        $('.navbar.header').fadeToggle(200);
    })

    $('.expandproject').click(function(e) {

        if($('.navbar').height() !== 0) {
            $('.navbar').fadeOut(200);
        }
        e.preventDefault();
        $(this).parent().parent().toggleClass('fullwidth');
        $(this).parent().parent().find('iframe').toggleClass('fullheight');


        const scrollTo = (id) => {
            console.log($(id).offset().top)
            $('html, body').animate({
                scrollTop: $(id).offset().top + 100
            }, 256);
        };

        let id = '#' + $(this).parent().parent().attr('id');
        setTimeout(scrollTo.bind(null, id), 500);

    });

})



setTimeout(function() {
    // TOGGLE LANGUAGE POPUPS ON HOME PAGE
    $('.langpopup').click(function(e) {
        $(this).children().toggleClass('flip');
        $(this).next().toggleClass('hidden');
    });
});




const animateText = (element, speed) => {
    // get length of text
    // split into array of letters
    // make new array filled with spaces
    // iterate through that array, and add a letter from orignal string at index
    const str = element.innerText;

    const textLen = element.innerText.length;


    const spaces = new Array(textLen).fill(`&nbsp;`);


    let idx = -1;
    setInterval(() => {

            idx++;

            spaces[idx] = str[idx]
            element.innerHTML = spaces.join("")

            if(idx === textLen) {
                idx = -1;
                spaces.fill(" ")
            }

        },
        speed);
}



if(document.location.pathname === "/") {






    //
};