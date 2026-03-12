var btn = document.querySelector('#btn')
var table =document.querySelector('#table')

var colors = ['red','green','blue']
var count = 0

btn.addEventListener('click',function(){

    var row =   document.createElement('tr')
    var cell = document.createElement('td')

    cell.innerHTML= "Row" + (count+1)
    row.style.backgroundColor=colors[count%colors.length]

    row.appendChild(cell)
    table.appendChild(row)

    count++
})