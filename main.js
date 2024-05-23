
const span = document.getElementsByClassName('message');
const btn = document.getElementById('btn')

function setError() {
    span[0].style.display = 'block'
}

function unSetError() {
    span[0].style.display = 'none'
}

function formValido() {
    span[1].classList.add('correct');
    btn.removeAttribute('disabled')
}

function validaForm() {
    const numMaior = document.getElementById('numMaior');
    const numMenor = document.getElementById('numMenor');

    if (numMaior.value > numMenor.value) {
        setError()
    } else {
        unSetError()
        formValido()
    }
}