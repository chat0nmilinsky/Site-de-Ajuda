const name = window.prompt('Як тебе звати?')

if (name) {
    document.getElementById('name').innerHTML = "Привіт, " + name
} else {
    document.getElementById('name').innerHTML = "Що ти таке, Долбоёб?"
}