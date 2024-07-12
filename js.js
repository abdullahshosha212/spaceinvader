    let hero = {left: 880,top: 800};
    let bullet =[];
    let counter =0;
    let enemies = [
        { left: 200, top: 100 },
        { left: 400, top: 100 },
        { left: 600, top: 100 },
        { left: 800, top: 100 },
        { left: 1000, top: 100 },
        { left: 1200, top: 100 },
        { left: 1400, top: 100 },
        { left: 1600, top: 100 },
        { left: 200, top: 200 },
        { left: 400, top: 200 },
        { left: 600, top: 200 },
        { left: 800, top: 200 },
        { left: 1000, top: 200 },
        { left: 1200, top: 200 },
        { left: 1400, top: 200 },
        { left: 1600, top: 200 }
    ];
    

    
    
    function drawEnemies() {
        const enemies2 = document.getElementById("enemies");
        enemies2.innerHTML = "";
        for (let i = 0; i < enemies.length; i++) {
            enemies2.innerHTML +=
                `<div class="enemy" style="left: ${enemies[i].left}px; top: ${enemies[i].top}px;"></div>`;
        }
    }

    drawEnemies();


    function moveenmy(){
        for (let i = 0; i < enemies.length; i++){

            enemies[i].top = enemies[i].top+.5;
            
        }
        

    }
    

    function moveHero() {
        document.getElementById("hero").style.left = hero.left + "px";
    }

    document.addEventListener("keydown", function(e) {
        console.log(e.keyCode)
       
        if (e.keyCode == 39) {
            if (hero.left <= 1680) {
            hero.left = hero.left + 50;
            moveHero()
            }
        }
        
        if (e.keyCode == 37) {
            if (hero.left >= 10) {
            hero.left = hero.left - 50;
            moveHero()
            }
        }
        if (e.keyCode == 32) {
            bullet.push({left:hero.left,top:hero.top})
            
            playSound();
        }
        
    })


    function playSound() {
        const sound = document.getElementById("bulletSound");
        sound.play();
    }

    function drawbullet() {
        document.getElementById("bullet").innerHTML = "";
        for (let i = 0; i < bullet.length; i++) {
            
            document.getElementById("bullet").innerHTML +=
                `<div class="missile" style="left:${bullet[i].left+40}px; top:${bullet[i].top}px"></div>`;

                
        
            }
        
    }
    function movebullet(){
        for (let i = 0; i < bullet.length; i++){

            bullet[i].top = bullet[i].top-10;   
        }
    }

    function damage() {
        for (let x = 0; x < enemies.length; x++) {
            for (let z = 0; z < bullet.length; z++) {
                if (
                    (bullet[z].top >= enemies[x].top) &&
                    (bullet[z].top <= enemies[x].top + 50) &&
                    (bullet[z].left >= enemies[x].left) &&
                    (bullet[z].left <= enemies[x].left + 50)
        ) 
                (bullet.splice(z, 1),
                enemies.splice(x, 1),
                counter++,
                document.getElementById("score").innerHTML = "SCORE: "+counter)
                
                }
                }
        }
    
    
    
    
    

    

    function gameloop(){
        setTimeout(gameloop,50);
        damage();
        moveenmy();
        drawEnemies();
        movebullet();
        drawbullet();
        
        
    }
    gameloop();


