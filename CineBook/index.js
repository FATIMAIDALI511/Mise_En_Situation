let arr=[
    {
        firstname:"Ahmad",
        lastname:"Alloudi",
        age:20,
        genre:"H"
    },
    {
        firstname:"Khadija",
        lastname:"Amrani",
        age:30,
        genre:"F"
    },
    {
        firstname:"sara",
        lastname:"Amrani",
        age:30,
        genre:"F"
    }
]
const btn_genre = document.querySelectorAll("button") 
btn_genre.forEach(btn=>{
    btn.addEventListener("click", ()=>{
            afficheData(btn)


    })
})
afficheData=(btn)=>{
    arr.forEach(genre=>{

        if(genre.genre=="F" && btn.id=="famme"){
            document.getElementById("1").innerHTML+=`le nom : ${genre.firstname} ${genre.lastname} l'age est : ${genre.age}`
        }
        if(genre.genre=="H" && btn.id=="homme" )
            {
            document.getElementById("2").innerHTML+=`le nom : ${genre.firstname} ${genre.lastname} l'age est : ${genre.age}`
        }

    })

}