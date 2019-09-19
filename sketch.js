function setup (){
    createCanvas(1000, 1000);
    
    background(0, 175, 175);


    for (var i = 0; i < 1000; i = i + 50){
        for (var n = 0; n < 1000; n = n + 50){
        
        stroke(i*.3);
        line(i, n, i+50, n+50);
        line(i, n+50, i+50, n);
    } }
}

function draw() {
    

}

