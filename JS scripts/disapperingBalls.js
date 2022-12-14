const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray = [];


//constantly resizes canvas accordingly with the window.
window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// creates a mouse element with x and y axis of mouse location
const mouse = {
    x: undefined,
    y: undefined,
}

//finds click location
canvas.addEventListener('click', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(event);
})


//finds mouse movement and gives location to mouse object
canvas.addEventListener('mousemove',function(event){
    mouse.x = event.x;
    mouse.y = event.y;
})

class Particle {
    constructor(){
        //this.x = mouse.x;
        //this.y = mouse.y;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 10 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.size > 0.2) this.size -= 0.1;
    }
    draw(){    
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    }
}

function init(){
    for(let i = 0; i < 100; i++){
        particlesArray.push(new Particle())
    }
}
init();

function handleParticles(){
    for (let i = 0; i < particlesArray.length; i++){
        particlesArray[i].update();
        particlesArray[i].draw();
        if ( particlesArray[i].size <= 0.3){
            particlesArray.splice(i,1);
            i--;
        }
    }
}

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate);
}
animate();