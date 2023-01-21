 

function attachEvents() {
    $("#submit").click(attachSend);
 
    function attachSend() {
        let messageJson = {
            "author": $("#author").val(),
            "content": $("#content").val(),
            "timestamp": Date.now()
        };
 
        let sendMessageRequest = {
            url: "https://fmy-first-project.firebaseio.com/project.json",
            method: "POST",
            data: JSON.stringify(messageJson),
            success: attachRefresh
        };
 
        $.ajax(sendMessageRequest);
    }
 
    function attachRefresh() {
        $.get("https://fmy-first-project.firebaseio.com/project.json")
            .then(displayMessages);
    }
 
    function displayMessages(messages) {
        let output = $("#messages");
        output.empty();
        let messagesStr = "";
        for (let key in messages) {
            messagesStr += `${messages[key]["author"]}: ${messages[key]["content"]}\n`
        }
        output.text(messagesStr);
    }
}
