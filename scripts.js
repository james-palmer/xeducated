$("#subscribe-form").submit(function(e){
    e.preventDefault();
    submitSubscribeForm($("#subscribe-form"));
});

function submitSubscribeForm($form, $resultElement) {
    $.ajax({
        type: "GET",
        url: $form.attr("action"),
        data: $form.serialize(),
        cache: false,
        dataType: "jsonp",
        jsonp: "c",
        contentType: "application/json; charset=utf-8",

        error: function(error){},

        success: function(data){
            if (data.result != "success") {
                var message = data.msg || "Sorry. Unable to subscribe. Please try again later.";

                if (data.msg && data.msg.indexOf("already subscribed") >= 0) {
                    message = "You're already subscribed. Thank you.";
                }

                $resultElement.html(message);

            } else {
                alert("error subscribing")
                $resultElement.html("Thank you!<br>You must confirm the subscription in your inbox.");
            }
        }
    });
}