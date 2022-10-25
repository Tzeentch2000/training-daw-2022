window.onload = function(e) {
    console.log('documento cargado')
    //cambiar el nombre del h2
    document.getElementsByTagName('h2')[1].innerText = 'by Tzeentch'
    //seleccionar el id username
    console.log(document.getElementById('username'))
    //CAMBIAR COLOR
    document.querySelectorAll('article .first').forEach(item => item.style.color = 'blue')
    //debugger

    //Selecciona todos los elementos de la clase li item
    console.log(document.querySelectorAll('li.item'))

    //Selecciona todos los buttons dentro de class buttons
    console.log(document.querySelectorAll('.buttons button'))

    //Cambiar el color de fondo del primer párrafo
    document.getElementsByTagName('p')[0].style.backgroundColor = 'grey'

    //Cambiar el color de frente forecolor de los elementos button dentro de la clase buttons
    document.querySelectorAll('.buttons button').forEach(item => item.style.color = 'blue')


    // document.getElementsByTagName('h1')[0].innerText = 'Changed from JS!!'
}