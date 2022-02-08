document.write('<script type="text/javascript" src="js/components/loadDonations.js" ></script>');

function loadHome(){
    var content = '<div class="w3-display-middle text-center">'
        + '<div>'
        +    '<img src="assets/favicon.ico">'
        + '</div>' 
        + '<h1 class="mt-4 text-danger">Welcome Hadi Jibbawi</h1>' 
        + '<h3 class="text-success">Last login: 24-03-2022 18:00</h3>'
        + '</div></div>';
    $('#content').html(content);   
}

$(document).ready( function() {
    loadHome();
});