var MODEL = (function(){
    var _showAlert = function (buttonName){
        alert("My button is " + buttonName);
    };

    var _getText = function (callback, buttonName) {
        let text = '';
        if(buttonName == 'about'){
            text = "<h1>About page</h1><p>This is a bunch of test text</p>" +
                        "<img src='https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png'>" 
                        ;
        } else if (buttonName == 'products'){
            text = "<h1>Products page</h1>" + "<p>This is product page text</p>" + 
            "<img src='https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg'>";
        } else if(buttonName == 'games'){
            text = "<h1>Games page</h1>" + "<p>This is games text</p>" +
            "<img src='https://upload.wikimedia.org/wikipedia/commons/0/03/Vulpes_vulpes_laying_in_snow.jpg'>";
        } else if(buttonName == 'contact'){
            text ="<h1>Contact Page</h1>" + "<p>This is contact page information</p>" + 
            "<img src='http://stoutjay.me/wp-content/uploads/2015/05/22a0ce_deae234754f44339b5a9e10c8b5e5fe51.jpg' width='880px' height='630px'>";
        } else {
            text = "<h1>Home</h1>" + "<p>This is the home page, where home information is displayed.</p>" + 
            "<img src='https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fred-yukon-gold-potatoes-difference.jpg%3Fitok%3Dz7bPTA69'>";
        }            
        return callback(text);
    }; 

    return{
        showAlert: _showAlert,
        getText:_getText,
    }
})();
//created a self executing function, because of () at the end makes FUNCTION FIRE IMMEDIATELY.
// _ means private to this class