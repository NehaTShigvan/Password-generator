class Password{
    generateStrongPassword(){
        let set = []
        let lower = [...Array(26)].map((_, i)=> String.fromCharCode(i+97))
        // console.log(lower)
        for(let i=0; i<lower.length; i++){
            set.push(lower[i])
        }
        let upper = [...Array(26)].map((_, i)=> String.fromCharCode(i+65))
        for(let i=0; i<upper.length; i++){
            set.push(upper[i])
        }
        // console.log(upper)
        set.push(0,1,2,3,4,5,6,7,8,9)
        set.push("!","@","#","$","%","^","&","*")
        let password = []
        for(let i=0;i<8;i++){
            let randm = Math.floor(Math.random()*set.length)
            password.push(set[randm])
        }
        password = password.join("")
        ip.value = password

    }
    generateVeryStrongPassword(){
        let set = []
        let lower = [...Array(26)].map((_, i)=> String.fromCharCode(i+97))
        // console.log(lower)
        for(let i=0; i<lower.length; i++){
            set.push(lower[i])
        }
        let upper = [...Array(26)].map((_, i)=> String.fromCharCode(i+65))
        for(let i=0; i<upper.length; i++){
            set.push(upper[i])
        }
        // console.log(upper)
        set.push(0,1,2,3,4,5,6,7,8,9)
        set.push("!","@","#","$","%","^","&","*")
        let password = []
        for(let i=0;i<10;i++){
            let randm = Math.floor(Math.random()*set.length)
            password.push(set[randm])
        }
        password = password.join("")
        ip.value = password

    }
    generateWeakPassword(){
        let name = ["ishaa","minuu","pinky","shila","gitaa","sonuu","monuu","pintuu","rinkuu","sheruu","viru"]
        let randm =  Math.floor(Math.random()*name.length)
        ip.value = name[randm]
    }
    generateFunnyPassword(){
        let funny = ["password","incorrect","Idonotknow","mypasswordis","babubhaiyaa"]
        let randm =  Math.floor(Math.random()*funny.length)
        ip.value = funny[randm]
    }
}

let p =new Password()
// p.generateStrongPassword()
// p.generateVeryStrongPassword()
// p.generateWeakPassword()
// p.generateFunnyPassword()

strong.addEventListener("click",()=>{
    p.generateStrongPassword()
})
Vstrong.addEventListener("click",()=>{
    p.generateVeryStrongPassword()
})
weak.addEventListener("click",()=>{
    p.generateWeakPassword()
})
funny.addEventListener("click",()=>{
    p.generateFunnyPassword()
})