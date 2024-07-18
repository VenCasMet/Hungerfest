//defining variables

let inputDir = { x: 0, y: 0 };
let lasttime = 0;
let sec = 8;
let snake = [{ x: 19, y: 10 }]
let score = 0;
food = { x: 9, y: 5 }
obs1 = { x: 10, y: 10 }
obs2 = { x: 10, y: 11 }
obs3 = { x: 10, y: 12 }
obs4 = { x: 10, y: 13 }
obs5 = { x: 10, y: 14 }
obs11 = { x: 18, y: 15 }
obs12 = { x: 18, y: 16 }
obs13 = { x: 18, y: 17 }
obs14 = { x: 18, y: 18 }


//refreshing again and again using requestAnimationFrame

function main(ctime) {
    window.requestAnimationFrame(main);
    console.log(ctime)
    if ((ctime - lasttime) / 1000 < 1 / sec) {
        sec+=1/500;
        return;
    }
    lasttime = ctime;
    gameengine();
}


//collision function

function isCollide(snake) {
    for (let j = 1; j < snake.length; j++) {
        if (snake[j].x === snake[0].x && snake[j].y === snake[0].y) {
            return true;
        }
    }
    if (snake[0].x >= 25 || snake[0].x <= 0 || snake[0].y >= 25 || snake[0].y <= 0) {
        return true;
    }
    if (snake[0].x === obs1.x && snake[0].y === obs1.y) {
        return true;
    }
    if (snake[0].x === obs2.x && snake[0].y === obs2.y) {
        return true;
    }
    if (snake[0].x === obs3.x && snake[0].y === obs3.y) {
        return true;
    }
    if (snake[0].x === obs4.x && snake[0].y === obs4.y) {
        return true;
    }
    if (snake[0].x === obs5.x && snake[0].y === obs5.y) {
        return true;
    }
    if (snake[0].x === obs11.x && snake[0].y === obs11.y) {
        return true;
    }
    if (snake[0].x === obs12.x && snake[0].y === obs12.y) {
        return true;
    }
    if (snake[0].x === obs13.x && snake[0].y === obs13.y) {
        return true;
    }
    if (snake[0].x === obs14.x && snake[0].y === obs14.y) {
        return true;
    }
}


//all functions

function gameengine() {

    //collision

    if (isCollide(snake)) {
        inputDir = { x: 0, y: 0 };
        alert("Game Over!!! Press Any Key to Restart!", score);
        snake = [{ x: 19, y: 10 }];
        score = 0
        sec=5;
    }

    //food allocation

    if (snake[0].x === food.x && snake[0].y === food.y) {
        score +=1
        if(score>hiscoreval){
            hiscoreval=score;
            localStorage.setItem("hscoreb", JSON.stringify(hiscoreval));
            hscoreb.innerHTML= "HIGHSCORE: "+hiscoreval;
        }
        scoreb.innerHTML = "SCORE:- " + score;
        snake.unshift({ x: snake[0].x + inputDir.x, y: snake[0].y + inputDir.y })
        let a = 2;
        let b = 23;
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
        if (food.x === obs1.x && food.y === obs1.y) {
            food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
        }
        if (food.x === obs2.x && food.y === obs2.y) {
            food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
        }
        if (food.x === obs3.x && food.y === obs3.y) {
            food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
        }
        if (food.x === obs4.x && food.y === obs4.y) {
            food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
        }
        if (food.x === obs5.x && food.y === obs5.y) {
            food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
        }
        if (food.x === obs11.x && food.y === obs11.y) {
            food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
        }
        if (food.x === obs12.x && food.y === obs12.y) {
            food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
        }
        if (food.x === obs13.x && food.y === obs13.y) {
            food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
        }
        if (food.x === obs14.x && food.y === obs14.y) {
            food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
        }
    }

    //moving snake

    for (let j = snake.length - 2; j >= 0; j--) {
        snake[j + 1] = { ...snake[j] };
    }
    snake[0].x += inputDir.x;
    snake[0].y += inputDir.y;

    //snake head and body

    board.innerHTML = "";
    snake.forEach((e, index) => {
        snakeele = document.createElement('div');
        snakeele.style.gridRowStart = e.y;
        snakeele.style.gridColumnStart = e.x;
        if (index === 0) {
            snakeele.classList.add('head');
        }
        else { snakeele.classList.add('saanp'); }
        board.appendChild(snakeele);
    });

    //food

    foodele = document.createElement('div');
    foodele.style.gridRowStart = food.y;
    foodele.style.gridColumnStart = food.x;
    foodele.classList.add('food');
    board.appendChild(foodele);

    //obstruction

    obel = document.createElement('div');
    obel.style.gridRowStart = obs1.y;
    obel.style.gridColumnStart = obs1.x;
    obel.classList.add('obs1');
    board.appendChild(obel);

    obel1 = document.createElement('div');
    obel1.style.gridRowStart = obs2.y;
    obel1.style.gridColumnStart = obs2.x;
    obel1.classList.add('obs2');
    board.appendChild(obel1);

    obel2 = document.createElement('div');
    obel2.style.gridRowStart = obs3.y;
    obel2.style.gridColumnStart = obs3.x;
    obel2.classList.add('obs3');
    board.appendChild(obel2);

    obel3 = document.createElement('div');
    obel3.style.gridRowStart = obs4.y;
    obel3.style.gridColumnStart = obs4.x;
    obel3.classList.add('obs4');
    board.appendChild(obel3);

    obel4 = document.createElement('div');
    obel4.style.gridRowStart = obs5.y;
    obel4.style.gridColumnStart = obs5.x;
    obel4.classList.add('obs5');
    board.appendChild(obel4);

    obel11 = document.createElement('div');
    obel11.style.gridRowStart = obs12.y;
    obel11.style.gridColumnStart = obs12.x;
    obel11.classList.add('obs12');
    board.appendChild(obel11);

    obel12 = document.createElement('div');
    obel12.style.gridRowStart = obs13.y;
    obel12.style.gridColumnStart = obs13.x;
    obel12.classList.add('obs13');
    board.appendChild(obel12);

    obel13 = document.createElement('div');
    obel13.style.gridRowStart = obs14.y;
    obel13.style.gridColumnStart = obs14.x;
    obel13.classList.add('obs14');
    board.appendChild(obel13);

    obel14 = document.createElement('div');
    obel14.style.gridRowStart = obs11.y;
    obel14.style.gridColumnStart = obs11.x;
    obel14.classList.add('obs11');
    board.appendChild(obel14);
}


// main working

let hiscore = localStorage.getItem("hscoreb");
if(hiscore===null){
    hiscoreval=0;
    localStorage.setItem("hscoreb", JSON.stringify(hiscoreval));
}
else{
    hiscoreval=JSON.parse(hiscore);
    hscoreb.innerHTML= "HIGHSCORE: "+hiscore;
}
window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    inputDir = { x: 0, y: 1 };
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp")
            inputDir.x = 0;
            inputDir.y = -1;
            break;
        case "ArrowLeft":
            console.log("ArrowLeft")
            inputDir.x = -1;
            inputDir.y = 0;
            break;
        case "ArrowDown":
            console.log("ArrowDown")
            inputDir.x = 0;
            inputDir.y = 1;
            break;
        case "ArrowRight":
            console.log("ArrowRight")
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            break;
    }
});


const logoutBtn = document.querySelector(".logout");

logoutBtn.addEventListener("click",()=>{
    window.location.replace("http://localhost:2400/");
});