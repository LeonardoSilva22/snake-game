const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const size = 30
const qt = canvas.width / size
let score = 0

class Snake{
    constructor(){
        this.x = Math.floor(Math.random()*qt)
        this.y = Math.floor(Math.random()*qt)
        this.vel = 1
        this.vx = this.vy = 0
        this.trail = []
        this.tail = 3
    }
    draw(){
        for (let i = 0; i < this.trail.length; i++) {
            createRect(this.trail[i].x * size,this.trail[i].y*size,size,size,'#283618')
        }
        this.trail.push({x:this.x,y:this.y})
        //TAMANHO DA COBRA
        while(this.trail.length > this.tail){
            this.trail.shift()
        }
    }
    move(){
        this.x += this.vx
        this.y += this.vy
        
        if(this.x > qt-1){
            this.x = 0
        }
        if(this.y > qt-1){
            this.y = 0
        }
        if(this.x < 0){
            this.x = qt-1
        }
        if(this.y < 0){
            this.y = qt-1
        }
    }
    lose(){
        for (let i = 0; i < this.trail.length; i++) {
            if(this.trail[i].x == this.x && this.trail[i].y == this.y){
                this.vx = this.vy = 0
                score = 0
                this.tail = 3
                alert('FIM DE JOGO')
            }
        }
    }
    
}

class Apple{
    constructor(){
        this.x = Math.floor(Math.random()*qt)
        this.y = Math.floor(Math.random()*qt)
        this.size = 20
    }
    draw(){
        createRect(this.x*size,this.y*size,size,size,'#fb5607')
    }
}

//FUNCÃO PARA CRIAR CONTEXTOS
function createRect(x,y,width,height,color){
    ctx.fillStyle = color
    ctx.fillRect(x,y,width,height)
}
