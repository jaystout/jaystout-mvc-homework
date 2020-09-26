//this is my controller for my app
function showText(data) {
        $(".content").html(data);
        $(".loader").fadeOut(300);
}


function initListeners() {
    $("nav a").click(function(e){ // e stands for event
        //this is using e to find id console.log("click", e.currentTarget.id); 
       // this is using jquery's way to do it console.log("jquery", this.id);
       let btnId = this.id;
       $(".loader").fadeIn(300);

       MODEL.getText(showText, btnId);
       //MODEL.showAlert(btnId); //if you hold down CTRL and hover, you can see where it is
       console.log("btnId ", btnId);
       //this syntax is called template literal
       //$(".content").html(`<h1>this is a variable name ${btnId}</h1>`);//(btnId.toUpperCase()) //append and prepend to but at end or beginning
       //$(".loader").fadeOut(300);
    });
    
}

$(document).ready(function (){
    //alert ("hello");
    initListeners();
});