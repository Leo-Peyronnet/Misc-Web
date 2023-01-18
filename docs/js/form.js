var form = document.getElementById("log");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

async function redirect() {
    let pwr = document.getElementById("password");
    pwr.classList.remove("error");
    data = await (await fetch("https://raw.githubusercontent.com/Leo-Corporation/LeoCorp-Docs/master/Liens/Tests/values.json")).json();
    console.log(pwr.innerHTML)
    for (let i = 0; i < data.length; i++) {
        if (data[i].case == pwr.value) {
            window.location.href = data[i].url;
        }
    }
    pwr.classList.add("error");
    a = document.getElementById("cita").innerHTML;
    document.getElementById("cita").innerHTML = "Accéder à des documents confidentiels sans autorisation est non seulement illégal, mais c'est également moralement répréhensible, car cela viole la confiance et la vie privée des individus concernés.";
    setTimeout(function () { pwr.classList.remove("error"); document.getElementById("cita").innerHTML = a }, 4500);
    return false;
}