var arr = [
    { dp: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", story: "https://images.unsplash.com/photo-1792936136559-989d35cc536f?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
    { dp: "https://images.unsplash.com/photo-1582639590011-f5a8416d1101?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", story: "https://images.unsplash.com/photo-1605248259586-a64eb06b6970?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
    { dp: "https://images.unsplash.com/photo-1789758489965-2d37002e46d7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDE%3D", story: "https://images.unsplash.com/photo-1792802140887-496b712f1046?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
    { dp: "https://images.unsplash.com/photo-1583900985737-6d0495555783?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", story: "https://images.unsplash.com/photo-1652715256284-6cba3e829a70?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },

]



var storiyan = document.querySelector("#storiyan")
var clutter = ""
arr.forEach(function (elem, idx) {
    clutter += `<div class="story">
                <img id = "${idx}" src="${elem.dp}" alt="">
            </div>`
})

storiyan.innerHTML = clutter;


storiyan.addEventListener("click", function (dets) {

    document.querySelector("#full-screen").style.display = "block"

    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`


  setTimeout(function(){
    document.querySelector("#full-screen").style.display = "none"
  },2000)

});
