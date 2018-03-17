
$(document).ready(function() 
{
	// SECTION GENERATES BACON IPSUM PARAGRAPHS IN DIV #TEST WITH BACONIPSUM API
		// $.getJSON('https://baconipsum.com/api/?callback=?', 
		// 	{ 'type':'meat-and-filler', 'start-with-lorem':'1', 'paras':'10' }, function(baconGoodness){
		// 	if (baconGoodness && baconGoodness.length > 0)
		// 	{
		// 		$("#test").html('');
		// 		for (var i = 0; i < baconGoodness.length; i++)
		// 			$("#test").append('<p>' + baconGoodness[i] + '</p>');
		// 		$("#test").show();
		// 	}
		// });

});
		
		var klik = function() {
			$("wartosc").html($("suwak").value);
			console.log($("suwak").value);
		}
// var klik = function(){
// 	var name = document.getElementById('imie');
// 	var wzr = document.getElementById('wzr');
// 	console.log(name.value);
// 	document.getElementById('test').innerHTML = "<h1>"+name.value+", wzrost: " + wzr.value +"cm</h1>";
// }