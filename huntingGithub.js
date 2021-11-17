console.log("hello");
/*
window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        console.log("jQuery has loaded!");
        alert("Yeah!");
    } else {
        // jQuery is not loaded
        console.log("Doesn't Work");
        alert("Doesn't Work");
    }
}
*/

function getQuery( event ){
    $.get( "https://api.github.com/users/totto-ro", displayName )
    function displayName( data ) {
        console.log( data );
        document.querySelector('.infoUser').innerHTML = `
        <h1>Name: ${data.name}</h1>
        <img src = "${data.avatar_url}">`;

    }
}

let querybutton = document.querySelector('.button')
querybutton.addEventListener('click', getQuery);



