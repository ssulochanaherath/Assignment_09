var current_light_index = 0;
var max_light_count = 6;
var move = "Right"

function updateLightPanel(){
    $(".light").removeClass("light_on");
    $(".light").removeClass("light_on2");
    $(".light").eq(current_light_index).addClass("light_on");

    if (move==="Right"){
        if (current_light_index!==0) $(".light").eq(current_light_index-1).addClass("light_on2");

        ++current_light_index;
        if (current_light_index > max_light_count - 2){
            move = "Left";
        }
    } else {
        $(".light").eq(current_light_index+1).addClass("light_on2");
        --current_light_index;
        if (current_light_index===0){
            move = "Right";
        }
    }
}

$("#btn_start").on("click", ()=>{
    myInterval = setInterval(updateLightPanel, 80);
    $("#audio")[0].play();
})

$("#btn_stop").on("click", ()=>{
    clearInterval(myInterval);
    $("#audio")[0].pause();
})