// $('#form-salvar').on('submit', function(){
//     var memoria = $('#memoria').val();
//     var cpu = $('#cpu').val();
//     var form = $('#form-salvar');
//     var data = form.serialize();
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.open("POST", "/salvar", true); // false for synchronous request
//     xmlHttp.send( data );
//     return false;
//     // xmlHttp.setRequestHeader("Content-type", "application/json");
//     // var form = $('#form-salvar');
//     // var mem = $('#memoria').val();
//     // var cpu = $('#cpu').val();
//     // var data = {"memoria": mem, "cpu": cpu}
//     // console.log(data);
//     // $.ajax({
//     //     url: '/salvar',
//     //     type: 'post',
//     //     dataType: 'json',
//     //     contentType: 'text/html',
//     //     data: data
//     // }).done(function(json){
//     //     console.log(json);
//     // }).fail(function(err){
//     //     console.log("Não funcionou");
//     // });
// })

// Exemplo de requisição POST
// var xhr = new XMLHttpRequest();

// xhr.open('POST', '/salvar');
// xhr.onload = function(){
//     var data = xhr.responseText;
//     console.log(data);
// }
// xhr.send({filipe: "filipe"});
