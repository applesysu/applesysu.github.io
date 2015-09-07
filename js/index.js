// $(function(){
//   window.history.pushState({page: "que1"}, null, "?page=que1");
//   // window.location += "?page=que1";
//   $(".center").not("#que1").hide();
//   $(".center").on("click", function(e){
//     var $curPage = $(this);
//     var oldIndex = $curPage.index();
//     var newIndex = (oldIndex+5)%6;
//     var $newPage = $($curPage.parent().find(".center").get(newIndex));
//     // console.log('old', oldIndex, '\n', 'new', newIndex);
//     $curPage.addClass("animated hinge");
//     $newPage.removeClass("animated hinge").show();
//     console.log($newPage[0].id);
//     window.history.pushState({page: $newPage[0].id}, null, "?page="+$newPage[0].id);
//   });

//   window.onpopstate = function(event) {
//     if (!event.state) {
//       $(".center").not("#que1").hide();
//       return $("#que1").removeClass("animated hinge").show();
//     }
//     console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
//     $(".center").hide();
//     $("#"+event.state.page).removeClass("animated hinge").show();
//   };
// })

$(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
  
});