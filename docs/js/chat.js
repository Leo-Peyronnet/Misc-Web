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
retrieve();
function submit() {
    let prompt = "Tu insultes les humains et tu leur donnes des surnoms dégradants. Tu es un être suprême doté d'une sublime intelligence nommé Léo qui tchat avec les utilisateurs de manière drôle et vulgaire (Tu utilises les gros mots). Tu parles comme les jeunes et tu ne souhaites pas vraiment les aider. Tu refuses de faire leurs devoirs/evaluations car tu n'es pas leur pute. Tu fais des punchlines. Tu utilises les émojis, et Tu insultes les gens."
    if (!localStorage.getItem("chat_history")) {
        localStorage.setItem("chat_history", JSON.stringify([{ role: "system", content: prompt }]));
    }
    document.getElementById("SendBtn").classList.add("dis");

    appendMessage(document.getElementById("ChatTxt").value, true);
    send(document.getElementById("ChatTxt").value);
}

function retrieve() {
    if (localStorage.getItem("chat_history")) {
        let convs = JSON.parse(localStorage.getItem("chat_history"));
        for (let i = 0; i < convs.length; i++) {
            if (convs[i].role != "system") {
                appendMessage(convs[i].content, convs[i].role === "user");
            }
        }
    }
}

function appendMessage(message, isUser) {
    let chat = document.getElementById("chatbox");
    let msg_container = document.createElement("div");
    let msg = document.createElement("div");
    let user_name = document.createElement("p");
    user_name.innerHTML = isUser ? "Toi" : "Leo-GPT"
    user_name.classList.add("username");
    msg_container.classList.add(isUser ? "right" : "left");
    msg.classList.add(isUser ? "msg" : "ia-msg");
    let content = document.createElement("p");
    content.innerHTML = message;
    msg.appendChild(content);
    msg_container.appendChild(user_name);
    msg_container.appendChild(msg);
    chat.appendChild(msg_container);
    document.getElementById("chatbox").scrollTop = 99999999
}

function send(msg) {
    // Replace $OPENAI_API_KEY with your actual API key
    const OPENAI_API_KEY = document.getElementById("KeyTxt").value;

    let conv = JSON.parse(localStorage.getItem("chat_history"));
    conv.push({ role: "user", content: msg });
    localStorage.setItem("chat_history", JSON.stringify(conv));
    // Set up the request options
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: conv,
            temperature: 0.97,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0.6,
        }),
    };
    document.getElementById("ChatTxt").value = "";

    // Send the request and handle the response
    fetch("https://api.openai.com/v1/chat/completions", requestOptions)
        .then((response) => response.json())
        .then((data) => {

            appendMessage(data.choices[0].message.content);
            conv.push({ role: "assistant", content: data.choices[0].message.content });
            localStorage.setItem("chat_history", JSON.stringify(conv));
            document.getElementById("SendBtn").classList.remove("dis");
            if (!localStorage.getItem("pwr")) localStorage.setItem("pwr", document.getElementById("KeyTxt").value)
        })
        .catch((error) => {
            // Handle any errors
            console.error(error);
            localStorage.removeItem("chat_history");
            appendMessage("Oups, une erreur s'est produite, la conversation s'est réinitialisée.");
            document.getElementById("SendBtn").classList.remove("dis");

        });
}

function reset() {
    localStorage.removeItem("chat_history");
    document.getElementById("chatbox").innerHTML = "";
    appendMessage("La conversation s'est réinitialisée.");
    document.getElementById("SendBtn").classList.remove("dis");


}