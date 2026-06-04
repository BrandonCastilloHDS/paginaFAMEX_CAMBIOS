/*
 * https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js
 * https://cdnjs.cloudflare.com/ajax/libs/jquery.countdown/2.2.0/jquery.countdown.min.js
**/

$('#count').countdown('2027/04/21 08:00:00', function(event) {
	$(this).html(event.strftime('%Dd %Hh %Mm %Ss'));
});