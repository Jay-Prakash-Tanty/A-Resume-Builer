const seconddiv = document.getElementById("second_div");



// Personal Details
const nameinput = document.getElementById("name_input");
const address_1_input = document.getElementById("address_1_input");
const address_2_input = document.getElementById("address_2_input");

// Contact Ination
const phonenoinput = document.getElementById("phone_no_input");
const emailidinput = document.getElementById("email_id_input");
const linkedinidinput = document.getElementById("linkedin_id_input");
const instagramidinput = document.getElementById("instagram_id_input");

// //Educational Details
const one= document.getElementById("class_10_percentage_input");
const class10schoolnameinput = document.getElementById("class_10_school_name_input");
const class10passoutyearinput = document.getElementById("class_10_pass_out_year_input");
const class12percentageinput = document.getElementById("class_12_percentage_input");
const class12schoolnameinput = document.getElementById("class_12_school_name_input");
const class12passoutyearinput = document.getElementById("class_12_pass_out_year_input");

// Achievements
const achievement1input = document.getElementById("achievement_1_input");
const achievement2input = document.getElementById("achievement_2_input");

// Projects
const project1input = document.getElementById("project_1_input");
const project2input = document.getElementById("project_2_input");


seconddiv.addEventListener('submit', function(e) {
    e.preventDefault();



    // Personal Details
    const nameinputvalue = nameinput.value;
    const address_1_input_value = address_1_input.value;
    const address_2_input_value = address_2_input.value;

    // Contact Ination
    const phonenoinput_value = phonenoinput.value;
    const emailidinput_value = emailidinput.value;
    const linkedinidinput_value = linkedinidinput.value;
    const instagramidinput_value = instagramidinput.value;

    // //Educational Details
    const two = one.value;
    const class10schoolnameinput_value = class10schoolnameinput.value;
    const class10passoutyearinput_value = class10passoutyearinput.value;
    const class12percentageinput_value = class12percentageinput.value;
    const class12schoolnameinput_value = class12schoolnameinput.value;
    const class12passoutyearinput_value = class12passoutyearinput.value;

    // Achievements
    const achievement1input_value = achievement1input.value;
    const achievement2input_value = achievement2input.value;

    // Projects
    const project1input_value = project1input.value;
    const project2input_value = project2input.value;


    // Personal Details
    localStorage.setItem("name-input", nameinputvalue);
    localStorage.setItem("address_1_input", address_1_input_value);
    localStorage.setItem("address_2_input", address_2_input_value);

    // Contact Ination
    localStorage.setItem("phoneno_input", phonenoinput_value);
    localStorage.setItem("emailid_input", emailidinput_value);
    localStorage.setItem("linkedinid_input", linkedinidinput_value);
    localStorage.setItem("instagramid_input", instagramidinput_value);

    // //Educational Details
    localStorage.setItem("three", two);
    localStorage.setItem("class10schoolname_input", class10schoolnameinput_value);
    localStorage.setItem("class10passoutyear_input", class10passoutyearinput_value);
    localStorage.setItem("class12percentage_input", class12percentageinput_value);
    localStorage.setItem("class12schoolname_input", class12schoolnameinput_value);
    localStorage.setItem("class12passoutyear_input", class12passoutyearinput_value);

    // Achievements
    localStorage.setItem("achievement1_input", achievement1input_value);
    localStorage.setItem("achievement2_input", achievement2input_value);

    // Projects
    localStorage.setItem("project1_input", project1input_value);
    localStorage.setItem("project2_input", project2input_value);



    window.location.href = "index2.html";

})




// add and delete section

const java_additional_project_label_plus_form = document.getElementById("additional_project_label_plus_form");
                                                                                                                    const java_additional_achievement_label_plus_form =document.getElementById("additional_achievement_label_plus_form");


const project_add_btn = document.getElementById("additional_project_btn");
                                                                                                                    const achievement_add_btn = document.getElementById("additional_achievement_btn");


let array_one=[];
                                                                                                                    let array_two=[];


let first_objstr = localStorage.getItem("names");
                                                                                                                    let second_objstr = localStorage.getItem("games");


if(first_objstr!=null)
    {
        array_one = JSON.parse(first_objstr);
    }
    DisplayInfo();

    project_add_btn.onclick=() => 
        {
            array_one.push({"name": null});
            saveInfo(array_one);
            console.log(array_one);
            DisplayInfo();
            let us = 3;
            additional_proj_disp(us);
        };

                                                                                                                    if(second_objstr!=null)
                                                                                                                        {
                                                                                                                            array_two = JSON.parse(second_objstr);
                                                                                                                        }
                                                                                                                        Display_2nd_Info();
                                                                                                                    
                                                                                                                        achievement_add_btn.onclick=() => 
                                                                                                                            {
                                                                                                                                array_two.push({"game": null});
                                                                                                                                save_2nd_Info(array_two);
                                                                                                                                console.log(array_two);
                                                                                                                                Display_2nd_Info();
                                                                                                                                let us = 3;
                                                                                                                                additional_achie_disp(us);
                                                                                                                            };
                                                                                                                    
function additional_proj_disp(hey){

    while(localStorage.getItem(`dynmaic_${hey}_project`)!=null)
    {
        console.log("value of hey" + hey);
        const bota = localStorage.getItem(`dynmaic_${hey}_project`);
        const elphe = document.getElementById(`project_${hey}_input`);
        elphe.value=bota;
        hey++;
    

    }
    
}

                                                                                                                    function additional_achie_disp(hey){
                                                                                                                    
                                                                                                                        while(localStorage.getItem(`dynmaic_${hey}_achievement`)!=null)
                                                                                                                        {
                                                                                                                            console.log("value of hey" + hey);
                                                                                                                            const bota = localStorage.getItem(`dynmaic_${hey}_achievement`);
                                                                                                                            const elphe = document.getElementById(`achievement_${hey}_input`);
                                                                                                                            elphe.value=bota;
                                                                                                                            hey++;
                                                                                                                        
                                                                                                                    
                                                                                                                        }
                                                                                                                        
                                                                                                                    }

function saveInfo(array_one){
    let str = JSON.stringify(array_one);
    localStorage.setItem("names", str);

}

                                                                                                                  function save_2nd_Info(array_two){
                                                                                                                      let stro = JSON.stringify(array_two);
                                                                                                                      localStorage.setItem("games", stro);
                                                                                                                  
                                                                                                                  }


function DisplayInfo(){//${builder()}
    let statement="";
    array_one.forEach((apple,i) => {
        statement += `<div class="label_plus_form">
                        <span class="label_name">Project ${i+3}:</span>
                        
                        <input id="project_${i+3}_input" type="text" placeholder ="Project ${i+3}" class= "name_" >
                    </div>
                    <div><button class="save_button" id ="pro_${i+3}_save_btn"type ="button" onclick="Save_text_field_Btn(${i})">Save
                    <button class="delete_button" id ="pro_${i+3}_delete_btn"type ="button" onclick="Delete_Btn(${i})">Delete</div>`;    
    }); 
    java_additional_project_label_plus_form.innerHTML = statement;

}

                                                                                                                function Display_2nd_Info(){
                                                                                                                    let statement="";
                                                                                                                    array_two.forEach((apple,i) => {
                                                                                                                        statement += `<div class="label_plus_form">
                                                                                                                                        <span class="label_name">Achievement ${i+3}:</span>
                                                                                                                                        
                                                                                                                                        <input id="achievement_${i+3}_input" type="text" placeholder ="Achievement ${i+3}" class= "name_" >
                                                                                                                                    </div>
                                                                                                                                    <div><button class="save_button" id ="achievement_${i+3}_save_btn"type ="button" onclick="achievement_Save_text_field_Btn(${i})">Save
                                                                                                                                    <button class="delete_button" id ="pro_${i+3}_delete_btn"type ="button" onclick="achievement_Delete_Btn(${i})">Delete</div>`;    
                                                                                                                    }); 
                                                                                                                    java_additional_achievement_label_plus_form.innerHTML = statement;
                                                                                                                
                                                                                                                }

function Save_text_field_Btn(i){
    
    // console.log("orange");
    const additional_form = document.getElementById(`project_${i+3}_input`);
    const additional_form_value = additional_form.value;
    // console.log(additional_form_value);
    localStorage.setItem(`dynmaic_${i+3}_project`,additional_form_value);



}

                                                                                                                 function achievement_Save_text_field_Btn(i){
                                                                                                                     
                                                                                                                     // console.log("orange");
                                                                                                                     const additional_2nd_form = document.getElementById(`achievement_${i+3}_input`);
                                                                                                                     const additional_2nd_form_value = additional_2nd_form.value;
                                                                                                                     // console.log(additional_form_value);
                                                                                                                     localStorage.setItem(`dynmaic_${i+3}_achievement`,additional_2nd_form_value);
                                                                                                                 
                                                                                                                 
                                                                                                                 
                                                                                                                 }



function Delete_Btn(pakistan){


    console.log('array_one_before_splice:' + array_one);

    let k=pakistan+3;
    while(document.getElementById(`project_${k+1}_input`) != null)
    {
        k++;
    }
    console.log("1st k="+ k);

    array_one.splice(pakistan,1);

    console.log('array_one_after_splice:' + array_one);
    saveInfo(array_one);
    DisplayInfo();

    display_after_del(pakistan);


    while(document.getElementById(`project_${pakistan+3}_input`) != null){
        Save_text_field_Btn(pakistan);
        pakistan++;
    
    }

    console.log("2nd k=" + k);

    localStorage.removeItem(`dynmaic_${pakistan+3}_project`);


}
                                                                                                                                        
                                                                                                                                        function achievement_Delete_Btn(pakistan){
                                                                                                                                        
                                                                                                                                        
                                                                                                                                            console.log('array_one_before_splice:' + array_two);
                                                                                                                                        
                                                                                                                                            let k=pakistan+3;
                                                                                                                                            while(document.getElementById(`achievement_${k+1}_input`) != null)
                                                                                                                                            {
                                                                                                                                                k++;
                                                                                                                                            }
                                                                                                                                            console.log("1st k="+ k);
                                                                                                                                        
                                                                                                                                            array_two.splice(pakistan,1);
                                                                                                                                        
                                                                                                                                            console.log('array_one_after_splice:' + array_two);
                                                                                                                                            save_2nd_Info(array_two);
                                                                                                                                            Display_2nd_Info();
                                                                                                                                        
                                                                                                                                            achiev_display_after_del(pakistan);
                                                                                                                                        
                                                                                                                                        
                                                                                                                                            while(document.getElementById(`achievement_${pakistan+3}_input`) != null){
                                                                                                                                                achievement_Save_text_field_Btn(pakistan);
                                                                                                                                                pakistan++;
                                                                                                                                            
                                                                                                                                            }
                                                                                                                                        
                                                                                                                                            console.log("2nd k=" + k);
                                                                                                                                        
                                                                                                                                            localStorage.removeItem(`dynmaic_${pakistan+3}_achievement`);
                                                                                                                                        
                                                                                                                                        
                                                                                                                                        }
                                                                                                                                        
                                                  // important if chaos ensues un comment this   
function display_after_del(i){
    

    let j=i+3;
    let m=i+3;

    while(j>3){
        const betaaa = localStorage.getItem(`dynmaic_${j-1}_project`);
        const alphaaa = document.getElementById(`project_${j-1}_input`);
        alphaaa.value=betaaa;

        j--;
    }
    console.log("1st m=" + m);
    let u=i+3;
    while(document.getElementById(`project_${u+1}_input`) != null)
        {
            u++;
    
    
        }
    console.log("2nd m=" + m);
    console.log("1st u=" + u);
    let z=m-1;
    // if(m!=u){
    //     do{
    while(document.getElementById(`project_${m}_input`) != null)
        {
    
            const beto = localStorage.getItem(`dynmaic_${m+1}_project`);
            console.log("3rd m+1="+m);
            console.log("beto="+beto);
            
            const alpho = document.getElementById(`project_${m}_input`);
            console.log("4th m="+m);
            console.log("alpho="+alpho);
            alpho.value=beto;
            console.log("betaaa ="+beto);
    
            m++;

    
        }
    }
                                                                                                                                            function achiev_display_after_del(i){
                                                                                                                                            
                                                                                                                                                let j=i+3;
                                                                                                                                                let m=i+3;
                                                                                                                                            
                                                                                                                                                while(j>3){
                                                                                                                                                    const betaaa = localStorage.getItem(`dynmaic_${j-1}_achievement`);
                                                                                                                                                    const alphaaa = document.getElementById(`achievement_${j-1}_input`);
                                                                                                                                                    alphaaa.value=betaaa;
                                                                                                                                            
                                                                                                                                                    j--;
                                                                                                                                                }
                                                                                                                                                console.log("1st m=" + m);
                                                                                                                                                let u=i+3;
                                                                                                                                                while(document.getElementById(`achievement_${u+1}_input`) != null)
                                                                                                                                                    {
                                                                                                                                                        u++;
                                                                                                                                                
                                                                                                                                                
                                                                                                                                                    }
                                                                                                                                                console.log("2nd m=" + m);
                                                                                                                                                console.log("1st u=" + u);
                                                                                                                                                let z=m-1;
                                                                                                                                                // if(m!=u){
                                                                                                                                                //     do{
                                                                                                                                                while(document.getElementById(`achievement_${m}_input`) != null)
                                                                                                                                                    {
                                                                                                                                                
                                                                                                                                                        const beto = localStorage.getItem(`dynmaic_${m+1}_achievement`);
                                                                                                                                                        console.log("3rd m+1="+m);
                                                                                                                                                        console.log("beto="+beto);
                                                                                                                                                        
                                                                                                                                                        const alpho = document.getElementById(`achievement_${m}_input`);
                                                                                                                                                        console.log("4th m="+m);
                                                                                                                                                        console.log("alpho="+alpho);
                                                                                                                                                        alpho.value=beto;
                                                                                                                                                        console.log("betaaa ="+beto);
                                                                                                                                                
                                                                                                                                                        m++;
                                                                                                                                            
                                                                                                                                                
                                                                                                                                                    }
                                                                                                                                                
                                                                                                                                            }
    
    // while(document.getElementById(`project_${m+1}_input`) != null)
    // };


    // const betaaa = localStorage.getItem(`dynmaic_${m}_project`);
    // console.log("")
    // const alphaaa = document.getElementById(`project_${m-1}_input`);
    // alphaaa.value=betaaa;


    // const betaaa = localStorage.getItem(`dynmaic_${i+2}_project`);
    // const alphaaa = document.getElementById(`project_${i+2}_input`);


    // console.log(betaaa);


    // alphaaa.value=betaaa;

    // for(let j=3; j<`${i+3}`; j++){

    //     let u = 1;
    //     if(document.getElementById(`project_${i+3+u}_input`)==null){
            
    //     }
    //     else if(lijl){

    //     }
        
    // }


// }
                                                              // till here
// to make div in second page dynamically for additional projects and achievements


// localStorage.removeItem("names");
sessionStorage.clear();






// image displayer

const fileEl = document.getElementById("file-el");

// preview button
// const submit = document.getElementById("submit");

// submit.addEventListener("click", () => {

//     window.location.href="index2.html";
//     builder_2();



// })

// image saves in localstorage and paas to another page
fileEl.addEventListener("change", () => {

    const fr = new FileReader(); 

    fr.readAsDataURL(fileEl.files[0]);

    fr.addEventListener("load", ()=> {
        
        const url = fr.result;
        
        localStorage.setItem("profile-image", url);

    })
})


