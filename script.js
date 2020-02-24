document.getElementById('copyright').innerHTML = `&copy; Copyright ${new Date().getFullYear()} - Daniel Hessling`;

$(document).ready(function(){
    
    let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
      panel.classList.add('active');
    }
  });
}
        $('#port-one').hide();
        $('#port-two').hide();
        $('#port-three').hide();

    $('#fig-one').on('click', function(){
        $('#port-one').slideToggle();
        $('#port-two').hide();
        $('#port-three').hide();
    });

    $('#fig-two').on('click', function(){
        $('#port-one').hide();
        $('#port-two').slideToggle();
        $('#port-three').hide();
    });

    $('#fig-three').on('click', function(){
        $('#port-one').hide();
        $('#port-two').hide();
        $('#port-three').slideToggle();
    });

$(window).resize(function() {
  if ($(window).width() <= 700) {
     $('.panel').hide();
  }
 else {}
});

        $("#kontakt").submit(function(event){
                $('#success').fadeIn(500).fadeOut(3000);
});

}); // ready

/*
document.addEventListener("DOMContentLoaded", () => {
    anime
      .timeline({})
      .add({
        targets: ".dh-float",
        translateY: [-1200, 0] , 
        easing: 'easeInOutQuad',
        offset: 0,
      })
        .add({
        targets: "section",
        translateY: [-1200, 0] , 
        easing: 'easeInOutQuad',
        offset: 0})
      })
            .add({
        targets: "section",
  zIndex: {
    value: [1, 5],
    round: true
  },
        translateY: [-1200, 0] , 
        easing: 'easeInOutQuad',
        offset: 0
});
*/