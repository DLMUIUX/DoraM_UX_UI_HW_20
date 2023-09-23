// hero-button click event

// console.log("My index.js file is loaded correctly!");

// $(".hero-button").click(function(){
//     console.log("You clicked the hero-button");
// });

$(document).ready(function(){
    $(".hero-button").click(function(){
        $(".hero-button").toggleClass("active");

        if($(this).hasClass("active")){
            $(this).css({"color" : "#c2723e"});
            $(this).css({"border" : "1px solid #2F82C2"});
            $(this).css({"font-weight" : "600"});
         }
        else {
            $(this).css({"color" : "#f4f5f5"});
            $(this).css({"border" : "1px solid #2F82C2"});
            $(this).css({"font-weight" : "400"});
        }       
    });
    
    $(".hero-name").hover(function()
    {
        $(this).stop().animate({fontSize:"3.5rem"});
    },
    function()
    {
        $(this).stop().animate({fontSize: "2.5rem"})
    });
    
})

    


