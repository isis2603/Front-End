/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


define(['delegate/_loginDelegate'], function() {
    App.Delegate.LoginDelegate =({

        loginUser: function(login, callback, callbackError) {
            alert('ALERT DELEGATE');
			alert('JSON Enviado: '+JSON.stringify(login));
            $.ajax({
                type: "POST",
                url: "http://back-endsport.herokuapp.com/webresources/Auth/login",
                crossDomain: true,
                dataType: 'json',
				data : JSON.stringify(login),
                contentType: "application/json",
				}).done(_.bind(function(data) {
                console.log(data);
				alert('USUARIO AUTHENTICADO');
                callback(data);
               
           }, this)).error(_.bind(function(data) {
               console.log("data");
			   alert('USUARIO NO AUTHENTICADO');
			   window.location.href = 'http://localhost:8089/error.html';
               callbackError(data);
           }, this));
       }
		
});


});


