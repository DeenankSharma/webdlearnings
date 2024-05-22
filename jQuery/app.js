// $(document).ready(function(){
    
// $("h1").addClass("big_title margin-50");
// console.log($("h1").hasClass("big_title"))
// 
// $("button").html("<em>hello ji</em>")
// 
// 

// $("h1").click(function(){
//     $("h1").css("color","purple")
// })

// $("input").keypress(function(event){
//     $("h1").text(event.key);
// })

// $("h1").on("mouseover",function(){
//     $("h1").css("color","red")
// })
// $("h1").before("<button>Hello Ji</button>")

// $("h1").show();

// $("button").on("click",function(){
//     // $("h1").toggle();
//     $("h1").slideToggle();
// })
$("button").on("click",function(){
    // $("h1").toggle();
    // $("h1").animate({opacity :0.5});
    $("h1").slideUp().slideDown().animate({opacity:0.5}); //chaining the functions
})
