$(document).ready(function() {
    $('.expandproject').click(function(e) {


        console.log($(this).parent().parent());
        $('.navbar').slideToggle(200);
  
        $(this).parent().parent().toggleClass('fullwidth');
        $(this).parent().parent().toggleClass('firstflex');





    })
    $('.langpopup').click(function(e) {
        e.preventDefault();
        $(this).next().toggle();

        console.log();
    });
});
const animate = document.querySelector('.animated')

function animateArrows() {
    const len = 7;
    let idx = 0;
    setInterval(() => {
        idx++;
        animate.innerHTML += ">";
        if(idx === len) {
            idx = 0;
            animate.innerHTML = ">";
        }
    }, 500);
}


if(document.location.pathname === "/") {
    animateArrows();

};