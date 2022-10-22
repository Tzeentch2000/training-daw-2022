window.onload = function(e) {
    console.log('documento cargado')
    //cambiar el nombre del h2
    document.getElementsByTagName('h2')[0].innerText = 'by Tzeentch'
    //seleccionar el id username
    console.log(document.getElementById('username'))

    let firstClass = document.querySelectorAll('article .first')
    //CAMBIAR COLOR
    /*for(let index in firstClass){
        firstClass[index].style.color = 'blue'
    }*/
    for(let i = 0; i<firstClass.length; i++){
        firstClass[i].style.color = 'blue'
    }

    //Selecciona todos los elementos de la clase li item
    console.log(document.querySelectorAll('li.item'))

    //Selecciona todos los buttons dentro de class buttons
    console.log(document.querySelectorAll('.buttons button'))

    //Cambiar el color de fondo del primer párrafo
    document.getElementsByTagName('p')[0].style.backgroundColor = 'grey'

    //Cambiar el color de frente forecolor de los elementos button dentro de la clase buttons
    let botones = document.querySelectorAll('.buttons button')
    for(let i = 0; i<botones.length; i++){
        botones[i].style.color = 'blue'
    }


    // document.getElementsByTagName('h1')[0].innerText = 'Changed from JS!!'
}