
// This function is to toggle navbar in the small device
document.querySelectorAll(".navbar-collapse .nav-link")
    .forEach((link) => {
        link.addEventListener("click", function (e) {
            let section = document.querySelector(e.target.getAttribute("href"));
            if (section) {
                e.preventDefault(); // Prevent default anchor click behavior
                let navbarHeight = document.querySelector(".navbar-toggler").offsetHeight;
                window.scroll({
                    top: section.offsetTop - navbarHeight, // Adjust for navbar height
                    behavior: "smooth",
                });
                document
                    .querySelector(".navbar-collapse")
                    .classList.remove("show"); // Collapse navbar
            }
        });
    });


    // javascript function to add balls to the canvas
    // if the user chosed 1 kilo, the balls whould be added to the two canvases 
    // if the user chosed 1/2 kilo the balls woulb be just added to one canvas 
    
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const canvas1 = document.getElementById("myCanvas1");
    const ctx1 = canvas1.getContext("2d");
    var x=0;
    var y=0;
    var r=40;
    var count=0;

    function AddFlavor(color){
    if(x==0 &&y==0)
    {
        x=50;
        y=50;
    }
    else
    {
    if(y==50)
    {
        if(x==350)
        {
            y=150;
            x=50;
        }
        else
        {
            x+=100;
        }
    }
    else
    {
        if(x<350)
        {
        x+=100;
        }
    }
    }
    drawCircle(x,y,color);
    
    }

    // Hear is the draw function
    function drawCircle(x,y,color){

    if(count<8)
    {
    if(y==0 || y==50)
    {
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.fillStyle = color;
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    count++;
    }
    else
    {
    ctx1.beginPath();
    ctx1.strokeStyle=color;
    ctx1.fillStyle = color;
    y=50;
    ctx1.arc(x, y, r, 0, 2 * Math.PI);
    ctx1.fill();
    ctx1.stroke();
    count++;

    }
    }
}

// Hear I delete the canvas if the user chosed 1/2 kilo
function removeCanvac(){
    document.getElementById("myCanvas1").style.visibility="hidden";
}

// Hear I add the canvas if the user chosed 1 kilo
function addCanvac(){
    document.getElementById("myCanvas1").style.visibility="visible";
}