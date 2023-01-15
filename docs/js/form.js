var form = document.getElementById("log");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

function redirect() {
    let pwr = document.getElementById("password");
    pwr.classList.remove("error");

    switch (pwr.value) {
        case "super": // ?
            window.location.href = "https://1drv.ms/b/s!AqmbMbAJ0AVagaBjdkOokePavRZ3uQ?e=91hCg3";
            break;
        case "rus40480": // ne
            window.location.href = "https://1drv.ms/b/s!AqmbMbAJ0AVagaBiTeOsjZ_Ai7ZVlA?e=ctaa0W";
            break;

        default:
            pwr.classList.add("error");
            a = document.getElementById("cita").innerHTML;
            document.getElementById("cita").innerHTML = "Accéder à des documents confidentiels sans autorisation est non seulement illégal, mais c'est également moralement répréhensible, car cela viole la confiance et la vie privée des individus concernés.";
            setTimeout(function () { pwr.classList.remove("error"); document.getElementById("cita").innerHTML = a }, 4500);
            break;
    }
    return false;
}