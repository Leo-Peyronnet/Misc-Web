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
        case "s0uh3ib": // nsi
            window.location.href = "https://github.com/Leo-Peyronnet/Python-Stuff/tree/main/FR";
            break;
        case "ultime": // bac
            window.location.href = "https://1drv.ms/b/s!AqmbMbAJ0AVagZ9WxLyYAOKTLxDv9A?e=iWNDHw";
            break;
        case "cpu1": // NSI CPU
            window.location.href = "https://1drv.ms/w/s!AqmbMbAJ0AVagaBpuf_nXXZpw--EgA?e=hfYd11";
            break;
        case "cpu2": // NSI CPU2
            window.location.href = "https://1drv.ms/w/s!AqmbMbAJ0AVagaBoM1xQYzTBX1ioVw?e=acbQqW";
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