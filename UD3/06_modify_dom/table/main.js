let id = 0
function onClick() {
    id++
    let tbody = document.getElementsByTagName('tbody')[0]

    let tr = document.createElement('tr')
    let td = document.createElement('td')
    td.innerText = id
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = 'Example'
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = 'Surname'
    tr.appendChild(td)

    td = document.createElement('td')
    link = document.createElement('a')
    link.innerText = 'enlace'
    link.href=`http://localhost/edit/${id}`

    // También se puede hacer si es un atributo raro hacerlo así
    /*let href = document.createAttribute('href')
    href.value = `http://localhost/edit/${id}`
    link.setAttributeNode(href);*/
    td.appendChild(link)
    tr.appendChild(td)

    tbody.appendChild(tr)
    console.log('add')
}