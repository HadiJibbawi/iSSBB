function toolbox(){
    return '<div class="d-flex justify-content-center bg-white mb-3">'
    + '<div class="p-2"><a class="btn btn-outline-danger" href="#">Search</a></div>'
    + '<div class="p-2"><a class="btn btn-outline-danger" href="#">Top 20</a></div>'
    + '<div class="p-2"><a class="btn btn-outline-danger" href="#">History</a></div>'
    + '<div class="p-2"><a class="btn btn-outline-danger" href="#">Reset</a></div>'
    + '</div>'
    + '</div>'
    + '<div>'
}
function loadTab1(){

    var content = toolbox();
    content = content   +   '<table class="table table-striped text-danger">'
        + '<thead >'
        +  '<tr>'
        +  '    <th>Firstname</th>'
        +  '    <th>Lastname</th>'
        +  '    <th>Email</th>'
        +  '  </tr>'
        +  '</thead>'
        +  ' <tbody class="font-weight-bold ">'
        +  '  <tr>'
        +  '    <td>John</td>'
        +  '    <td>Doe</td>'
        +  '    <td>john@example.com</td>'
        +  '  </tr>'
        +  '</tbody>'
        +  '</table>'
        + '</div>'
        
    $('#content').html(content);
}
