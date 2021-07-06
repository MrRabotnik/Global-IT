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


// Function that removes border

//Onmouseover
function border_none(){
    $(".current_nav_btn").css("border","none");
    $(".current_nav_btn").css("background","none");
    $(".current_nav_btn").css("color","#333333");
}

//Onmouseout
function border_bottom(){
    $(".current_nav_btn").css("borderBottom","3px solid #4B28C4");
    $(".current_nav_btn").css("background","rgba(95, 5, 128,0.05)");
    $(".current_nav_btn").css("color","#4B28C4");
}

//Changing background on mouse over
function background_change(){
    $(".qartez_btn").css({background:"none",color:"#4B28C4",border: "1px solid #4B28C4"});
    $(".cucak_btn").css({background:"linear-gradient(#4B28C4,#873FAF)",color:"white"});
}
// //Changing background on mouse out
function background_change_out(){
    $(".qartez_btn").css({background:"linear-gradient(#4B28C4,#873FAF)",color:"white"});
    $(".cucak_btn").css({background:"none", color:"#4B28C4"});
}