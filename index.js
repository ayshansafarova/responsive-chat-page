function DisplayCurrentTime(date) {
        var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        var time = hours + ":" + minutes;
        return time;
};


function insertText(text, time){
    if (time === undefined){
        time = 0;
    }
    var control = "";
    var date = DisplayCurrentTime(new Date());

    control = '<div class="d-flex justify-content-end mb-4">' + 
                                    '<div class="msg-send">' + text + '<div class="arrow-right">' + 
                                    '</div>' + 
                                    '</div>' + 
                                    '<div class="img-msg-content">' +
                                       '<img src="img/male.jpg" class="rounded-circle img-msg">' +
                                       '<span class="msg-time-send">' + date + '</span>' +
                                    '</div>' +
                                 '</div>' +
    setTimeout(
        function(){                        
            $(".chatboard .chat-body").append(control).scrollTop($(".chat-body").prop('scrollHeight'));
        }, time);
    
}

$(".send-btn").click(function(event) {
	var text = $.trim($(".card-footer .type").val());
	    if (text !== ""){
            insertText(text);              
            $(".card-footer .type").val('');
        }
});



