const scrollNavHide = () => {
    $(window).scroll(() => {
        let $nav = $('.navbar');
        let navHeight = $nav.height();
        let navDisplay = $nav.css('display');

        let scroll = $(document).scrollTop();
        // console.log(`Scroll: ${scroll} \n Nav height: ${navHeight} \n Nav Display${navDisplay}`);
        if(scroll > navHeight && navDisplay !== 'none') {
            $('.navbar.header').fadeOut(200);
            // $('.navbar.footer').fadeOut(200);

        } else {
            $('.navbar.header').fadeIn(200);
        }

        if(scroll + $(window).height() == $(document).height() - navHeight) {
            $('.navbar.footer').fadeIn(200);
        }
    });
};


// local function to scroll to div
const scrollTo = (id) => {
    console.log($(id).offset().top);
    $('html, body').animate({
        scrollTop: $(id).offset().top + 100
    }, 256);
};


const expandOnClick = () => {



    // get current href of clicked element

    $('.expand').click(function(e) {

        let link = $(this).attr('href');
        // fade out navbar when project goes fs
        if($('.navbar').height() !== 0) {
            $('.navbar').fadeOut(200);
        }



        // dont jump to anchor
        e.preventDefault();
        // find use link href to find div id

        $(link).toggleClass('fullwidth');
        $(link).find('iframe').toggleClass('fullheight');

        setTimeout(scrollTo.bind(null, link), 500);
    });

}

$(document).ready(function() {
    let isNavHidden = false;



    // toggle navbar
    let isMobile = window.matchMedia('only screen and (max-width: 900px)').matches;

    // scrollNavHide();
    // wait until divs have loaded to set up event listeners.




    setTimeout(expandOnClick, 500);
    // ================
    // EVENT LISTENERS
    // ===============

    // ON CONTACT FORM SUBMIT
    // change to laoding spinner

    $('#contact').submit((e) => {
        $('#sendmsg').html(` <img class="spinner" src="assets/img/spinner.gif">`);
    });


    // On Mobile navbar toggle click
    // fade navbars
    $('.toggle').click((e) => {

        $('.navbar.header').fadeToggle(200);


    });


    // on click a lang dropdown
    $('.langpopup').click(function(e) {
        $(this).children().toggleClass('flip');
        $(this).next().toggleClass('hidden');
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
                spaces[idx] = str[idx];
                element.innerHTML = spaces.join("");
                if(idx === textLen) {
                    idx = -1;
                    spaces.fill(" ");
                }
            },
            speed);
    };

});