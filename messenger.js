console.log("start of messenger.js");

document.getElementById("send-btn").addEventListener('click', () => {
    let textToSend = document.getElementById("send-text").value
    console.log(textToSend)
});



document.getElementById("test-receive").addEventListener('click', handleReceivedMessage);

function handleReceivedMessage(event,value = "") {
    if ( value === "") {
        value = "test message";
    }

    let message = document.createElement("li")
    message.innerHTML = value;


    document.getElementById("message-container").append(message);
}

setInterval(handleReceivedMessage,5000);