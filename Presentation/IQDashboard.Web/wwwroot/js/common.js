
$("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#rightbar-wrapper").toggleClass("toggled");
        $('#menu ul').hide();
        $("#rightbar-wrapper").find("li").removeClass("inneractive");

    });
     $("#menu-toggle-2").click(function(e) {
        e.preventDefault();
        $("#rightbar-wrapper").toggleClass("toggled-2");
        $('#menu ul').hide();
        $("#rightbar-wrapper").find("li").removeClass("inneractive");
    });

     function initMenu() {
      $('#menu ul').hide();
      $('#menu ul').children('.current').parent().show();
         //$('#menu ul:first').show();

      $('#menu li a').click(
 function () {
     $("#rightbar-wrapper").find("li").removeClass("inneractive");
     $(".fa-angle-up").hide();
     $(".fa-angle-down").show();
     if ($("#rightbar-wrapper").hasClass("toggled-2") || $("#rightbar-wrapper").hasClass("toggled")) {
         var checkElement = $(this).next();
         if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
             $(this).find(".fa-angle-up").hide();
             $(this).find(".fa-angle-down").show();
             checkElement.slideUp('normal');
             return false;
         }
         if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
             $('#menu ul:visible').slideUp('normal');
             checkElement.slideDown('normal');
             $(this).parent("li").addClass("inneractive");
             $(this).find(".fa-angle-up").show();
             $(this).find(".fa-angle-down").hide();
             return false;
         }
     }
 }
 );
      }

     $(document).ready(function () {
         $(".fa-angle-up").hide();
         initMenu();
     });




        