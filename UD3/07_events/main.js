window.onload = function(e) {
    console.log('documento cargado')
}

const onClickHide = id =>{
    let numberId = id.substring(7)
    let p = document.getElementById(`contenidos_${numberId}`)
    if(p.style.display === 'none'){
        p.style.display = 'block'
        document.getElementById(id).innerHTML = 'Ocultar contenidos'
    } else {
        p.style.display = 'none'
        document.getElementById(id).innerHTML = 'Mostrar contenidos'
    }
}