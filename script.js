var bdy = document.querySelector('#bdy')
var btn = document.querySelector('#btn')
// var colors = ['red','blue','green']
// var i = 0

// btn.addEventListener('click',function(){

//     bdy.style.backgroundColor=colors[i]
//     i++

//     if(i>=colors.length){
//         i=0
//     }
// })


btn.addEventListener('click',function(){
    var r = Math.floor(Math.random()*265)
    var g = Math.floor(Math.random()*265)
    var b = Math.floor(Math.random()*265)
    var color = "rgb("+r+","+g+","+b+")"

    bdy.style.backgroundColor=color;
})