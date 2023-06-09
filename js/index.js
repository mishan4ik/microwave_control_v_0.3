let btn_reheating = document.querySelector(".reheating_food");
let btn_defrosting = document.querySelector(".defrosting_food");
let btn_grill = document.querySelector(".grill_food");
let reheating = document.querySelector(".block_time_reheating");
let defrosting = document.querySelector(".block_time_defrosting");
let grill = document.querySelector(".block_grill_dish");
let start = document.querySelector(".btn_start_app");
let answer = document.querySelector(".answer_text_start");
let time_reheating = document.querySelector(".time_reheating");
let time_defrosting = document.querySelector(".time_defrosting");
let dish_soup = document.getElementById("soup_dish");
let buckwheat_dish = document.getElementById("buckwheat_dish");
let pasta_dish = document.getElementById("pasta_dish");


btn_reheating.onclick = function func(){

    if(reheating.style.display == ""){

        reheating.style.display = "block"

    }
    else{

        reheating.style.display = ""

    }

}

btn_defrosting.onclick = function func(){

    if(defrosting.style.display == ""){

        defrosting.style.display = "block"

    }
    else{

        defrosting.style.display = ""

    }

}

btn_grill.onclick = function func(){

    if(grill.style.display == ""){

        grill.style.display = "block"

    }
    else{

        grill.style.display = ""

    }

}


let time_soup = 5;
let time_buckwheat = 6;
let time_pasta = 10;

function timer () {

     

    time_reheating = document.querySelector(".time_reheating");
    time_defrosting = document.querySelector(".time_defrosting");
       

    
    if(time_reheating.value == 0 || time_defrosting.value == 0){


        answer.innerHTML = "Готово ";
        document.getElementById("microwave").style.border = "";


    }
    if(time_reheating.value > 0 ){

        answer.innerHTML = "Зачекайте " + time_reheating.value--;
        document.getElementById("microwave").style.border = "4px solid orange";

    }
    if(time_defrosting.value > 0 ){

        answer.innerHTML = "Зачекайте " + time_defrosting.value--;
        document.getElementById("microwave").style.border = "4px solid orange";

    }
    
    if(dish_soup.checked){

        answer.innerHTML = "Зачекайте " + time_soup--;
        document.getElementById("microwave").style.border = "4px solid orange";

    }
    if(time_soup <= 0 ){


        answer.innerHTML = "Готово ";
        document.getElementById("microwave").style.border = "";


    }
    if(buckwheat_dish.checked){

        answer.innerHTML = "Зачекайте " + time_buckwheat--;
        document.getElementById("microwave").style.border = "4px solid orange";

    }

    if(time_buckwheat <= 0){


        answer.innerHTML = "Готово ";
        document.getElementById("microwave").style.border = "";


    }
    if(pasta_dish.checked){

        answer.innerHTML = "Зачекайте " + time_pasta--;
        document.getElementById("microwave").style.border = "4px solid orange";

    }

    if(time_pasta <= 0){


        answer.innerHTML = "Готово ";
        document.getElementById("microwave").style.border = "";


    }

}

start.onclick = function func() {


    setInterval(timer,1000)
    



}
