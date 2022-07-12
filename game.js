//CRIANDO OS OBJETOS
const snake = new Snake
const apple = new Apple

addEventListener('keydown',keyPressed)                      

window.onload = () =>{
    alert("Use as setas para movimentar")
    setInterval(gameLoop, 1000/15);
}

function gameLoop(){
    draw()
    update()
}

function draw(){
    //CENÁRIO 
    ctx.fillStyle = '#606c38'
    ctx.fillRect(0,0,canvas.width,canvas.height)
    //COBRA
    snake.draw()
    //MACÃ 
    apple.draw()
    //TEXTO DE PONTUACÃO
    ctx.font =  `25px Gotham Rounded`
    ctx.fillStyle = '#fefae0'
    ctx.fillText(`Score: ${score}`,10,30)
}
function update(){
    //MOVIMENTACÃO DA COBRA
    snake.move()
    //DERROTA CASO A COBRA COMA O PROPRIO RABO
    snake.lose()
    //COMER A MACÃ
    eatApple()
}

function eatApple(){
    for (let i = 0; i < snake.trail.length; i++) {
        if(snake.trail[i].x == apple.x && snake.trail[i].y == apple.y){
            snake.tail++
            score++
            apple.x = Math.floor(Math.random()*qt)
            apple.y = Math.floor(Math.random()*qt)
            //CONDICÃO PARA MACÃ NÃO SPAWNAR DENTRO DA COBRA
            for (let i = 0; i < snake.trail.length; i++) {
                if(apple.x == snake.trail[i].x*apple.size && apple.y == snake.trail[i].y*(apple.size+5))
                    apple.x = Math.floor(Math.random()*qt)
                    apple.y = Math.floor(Math.random()*qt)
            }
        }
    } 
}

//EVENTO PARA MOVIMENTACÃO DA COBRA
function keyPressed(e){
    switch(String(e.key).toLocaleLowerCase()){
        case "arrowleft":
            if(snake.vx == snake.vel){
                break
            }
            snake.vx = -snake.vel
            snake.vy = 0
            break
        case 'arrowup':
            if(snake.vy == snake.vel){
                break
            }
            snake.vx = 0
            snake.vy = -snake.vel
            break
        case 'arrowright':
            if(snake.vx == -snake.vel){
                break
            }
            snake.vx = snake.vel
            snake.vy = 0   
            break
        case 'arrowdown':
            if(snake.vy == -snake.vel){
                break
            }
            snake.vx = 0
            snake.vy = snake.vel
            break
    }
}
