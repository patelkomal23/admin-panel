
// $('.menu-icon').on('click', function(){
//     $(this).toggleClass('active');
//     $('.slidebar').slideToggle();
//     // $($(this).attr("for")).show();
//       $(".icon").toggle()
//       $("#dashboard").show()
//   })

  // $(".slidebar").show();


  // $(".menu-icon").on("click",function(){
  //     $(".slidebar").toggle("click",function(){
  //       $(".main-section").css("width","100%")
  //     });
  //     ($(this).attr("for")).show();
  //     })
 

  $(".slider-icon").on("click",function(){
    $(".sidebar").toggle("click",function(){
      // $(".contain").css("width","100%")
      $(".contain>div").css("width","100%")
    
    })    
})


$(".link").on("click",function(){
  $(".sidebar").hide()
})

//$(".sidebar").on("click",function(){
 // $(".sidebar").hide()
//})

