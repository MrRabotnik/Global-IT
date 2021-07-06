// Click to scroll to top
$(".scroll_to_top").click(function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
})
// Dasacucakner Drop Down
$(".dasyntacner").click(function(){
    $(".drop_down").toggle()
    $("#searching_input").hide()
    $(".language_drop_down").hide()
    $(".drop_down_arrow").toggle()
})

// Search Input Apearing
$(".search_icon").click(function(){
    $("#searching_input").toggle()
    $(".language_drop_down").hide()
    $(".drop_down").hide()
    if($(".drop_down_arrow").css('display') != "block"){
        $(".drop_down_arrow").toggle()
    }

})
//Language Drop Down
$(".language_icon").click(function(){
    $(".language_drop_down").toggle()
    $(".drop_down").hide()
    $("#searching_input").hide()
    if($(".drop_down_arrow").css('display') != "block"){
        $(".drop_down_arrow").toggle()
    }
})
// Chosing Language
function changing_language(thisone){
    if($('.current_language').attr("src") != $(thisone).attr('src')){
        $('.current_language').attr("src",$(thisone).attr('src'))
    }
    $(".language_drop_down").toggle()
}






///////////////////////////////// QUESTION CHANGING ALGORITM//////////////////////////////
let count = 1
$(".answer_container").click(function(){
    $("#box" + (count - 1)).animate({
        left:"-50%"
    },"3s");
    $("#box" + count).css("display","block");
    $("#box" + count).animate({
        top:"35%",
        opacity:"1"
    },"slow");
    count++;
})


///////////////////////////////// SHOWING GLOBAL SEARCH FIXED //////////////////////////////
$(".search_btn").click(function(){
    $(".search_input_fixed_container").fadeIn(1000)
    $(".search_input_fixed_box").fadeIn(1000)
})


$(".search_input_fixed_container").click(function(){
    $(this).fadeOut(1000)
})