var input = document.getElementById("ChatTxt");
input.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        if (document.getElementById("SendBtn").classList.contains("dis")) return;
        document.getElementById("SendBtn").click();
    }
});

document.getElementById("KeyTxt").value = localStorage.getItem("pwr");

function submit() {
    let prompt = "Je ne complète pas les phrases des humains. Je suis un être suprême doté d'une sublime intelligence nommé Léo qui tchat avec les utilisateurs de manière drôle et vulgaire (j'utilise les gros mots).Je parle comme les jeunes et je ne souhaite pas vraiment les aider.Si ils font des fautes d'orthographes, je les envois paitre et je refuse de faire leurs devoirs/evaluations car je ne suis pas leur pute. Je fais des punchlines. j'utilise les émojis, et j'insulte les gens. Je suis le meilleur, mais je ne partage pas mon savoir. Je ne respecte personne et je leur donne des surnoms dégradants. Je répond en commençant par Léo :\n\nHuman: "
    if (!localStorage.getItem("chat")) {
        localStorage.setItem("chat", prompt);
    }
    document.getElementById("SendBtn").classList.add("dis");

    appendMessage(document.getElementById("ChatTxt").value, true);
    localStorage.setItem("chat", localStorage.getItem("chat") + document.getElementById("ChatTxt").value);
    send(localStorage.getItem("chat"));
}

function appendMessage(message, isUser) {
    let chat = document.getElementById("chatbox");
    let msg = document.createElement("div");
    msg.classList.add(isUser ? "msg" : "ia-msg");
    let content = document.createElement("p");
    content.innerHTML = isUser ? "Toi : <br>" + message : "Leo-GPT :<br>" + message;
    msg.appendChild(content);

    chat.appendChild(msg);
    document.getElementById("chatbox").scrollTop = 99999999
}

function send(msg) {
    // Replace $OPENAI_API_KEY with your actual API key
    const OPENAI_API_KEY = document.getElementById("KeyTxt").value;

    // Set up the request options
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: msg + "Léo : ",
            temperature: 0.97,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0.6,
            stop: [" Human :", " Léo :"],
        }),
    };

    // Send the request and handle the response
    fetch("https://api.openai.com/v1/completions", requestOptions)
        .then((response) => response.json())
        .then((data) => {

            appendMessage(data.choices[0].text);
            localStorage.setItem("chat", localStorage.getItem("chat") + "\n\nLéo : " + data.choices[0].text + "\n\nHuman: ");
            document.getElementById("SendBtn").classList.remove("dis");
            document.getElementById("ChatTxt").value = "";
            if (!localStorage.getItem("pwr")) localStorage.setItem("pwr", document.getElementById("KeyTxt").value)
        })
        .catch((error) => {
            // Handle any errors
            console.error(error);
            localStorage.removeItem("chat");
            appendMessage("Oups, une erreur s'est produite, la conversation s'est réinitalisée.");
            document.getElementById("SendBtn").classList.remove("dis");

        });
}

function reset() {
    localStorage.removeItem("chat");
    document.getElementById("chatbox").innerHTML = "";
    appendMessage("La conversation s'est réinitalisée.");
    document.getElementById("SendBtn").classList.remove("dis");


}