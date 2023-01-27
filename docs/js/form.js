var form = document.getElementById("log");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

async function redirect() {
    let pwr = document.getElementById("password");
    pwr.classList.remove("error");
    data = await (await fetch("https://raw.githubusercontent.com/Leo-Corporation/LeoCorp-Docs/master/Liens/Tests/values.json")).json();
    acc = getAcc();
    console.log(pwr.value)
    console.log(acc)

    for (let i = 0; i < data.length; i++) {
        console.log(data[i].case + " Perm: " + data[i].perm + " ACC " + acc)
        if (data[i].case == pwr.value && data[i].perm == acc) {
            window.location.href = data[i].url;
            return;
        }
    }
    pwr.classList.add("error");
    a = document.getElementById("cita").innerHTML;
    document.getElementById("cita").innerHTML = "Accéder à des documents confidentiels sans autorisation est non seulement illégal, mais c'est également moralement répréhensible, car cela viole la confiance et la vie privée des individus concernés.";
    setTimeout(function () { pwr.classList.remove("error"); document.getElementById("cita").innerHTML = a }, 4500);
    return false;
}

function getAcc() {
    let a = document.getElementById("A_acc")
    let j = document.getElementById("J_acc")
    let g = document.getElementById("G_acc")
    let s = document.getElementById("S_acc")

    if (a.checked) {
        return "a"
    }
    else if (j.checked) {
        return "j"
    }
    else if (g.checked) {
        return "g"
    }
    else if (s.checked) {
        return "s"
    }
    else {
        return "none"
    }
}