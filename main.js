random_number=Math.floor((Math.random()*array_1.length)+1);
console.log(array_1[random_number]);
sketch=array_1[random_number];
document.getElementById("drawn_sketch").innerHTML=sketch;
timer_counter=0;
score=0;
timer_check;
drawn_sketch;
answer_holder;
quick_draw_data_set=["aircraft carrier","airplane","alarm clock","ambulance","angel","animal migration","ant","anvil","apple","arm","asparagus","axe","backpack","banana","bandage","barn","baseball","baseball bat","basket","basketball","bat","bathtub","beach","bear","beard","bed","bee","belt","bench","bicycle","binoculars","bird","birthday cake","blackberry","blueberry","book","boomerang","bottlecap","bowtie","bracelet","brain","bread","bridge","broccoli","broom","bucket","bulldozer","bus","bush","butterfly","cactus","cake","calculator","calendar","camel","camera","camouflage","campfire","candle","cannon","canoe","car","carrot","castle","cat","ceiling fan","cello","cell phone","chair","chandelier","church","circle","clarinet","clock","cloud","coffee cup","compass","computer","cookie","cooler","couch","cow","crab","crayon","crocodile","crown","cruise ship","cup","diamond","dishwasher","diving board","dog","dolphin","donut","door","dragon","dresser","drill","drums","duck","dumbbell","ear", "elbow","elephant","envelope","eraser","eye","eyeglasses","face","fan","feather","fence","finger","fire hydrant","fireplace","firetruck","fish","flamingo","flashlight","flip flops","floor lamp","flower","flying saucer","foot","fork","frog","frying pan","garden","garden hose","giraffe","goatee","golf club","grapes","grass","guitar","hamburger","hammer","hand","harp","hat","headphones","hedgehog","helicopter","helmet","hexagon","hockey puck","hockey stick","horse","hospital","hot air balloon","hot dog","hot tub","hourglass","house","house plant","hurricane","ice cream","jacket","jail","kangaroo","key","keyboard","knee","knife","ladder","lantern","laptop","leaf","leg","light bulb","lighter","lighthouse","lightning","line","lion","lipstick","lobster","lollipop","mailbox","map","marker","matches","megaphone","mermaid","microphone","microwave","monkey","moon","mosquito","motorbike","mountain","mouse","moustache","mouth","mug","mushroom","nail","necklace","nose","ocean","octagon","octopus","onion","oven","owl","paintbrush","paint can"];

function setup(){
    canvas=createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
}

function updateCanvas() { 
    background("white"); 
    random_number = Math.floor((Math.random() * quick_draw_data_set.length) + 1); 
    console.log(quick_draw_data_set[random_number]); 
    sketch = quick_draw_data_set[random_number]; 
    document.getElementById('sketch_name').innerHTML = 'Sketch To be Drawn: ' + sketch; 
}

function preload() {
    classifier=ml5.imageClassifier('DoodleNet');
}

function draw(){
    strokeWeight(13);
    stroke(0);
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
    check_sketch();
    if (sketch=drawn_sketch) {
       answer_holder="set";
       score=score+1;
       document.getElementById("score").innerHTML="Score : "+score;
    }
}

function classifyCanvas() {
    classifier.classify(canvas, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        drawn_sketch=results[0].label;
        document.getElementById("confidence").innerHTML="Confidence : "+Math.round(results[0].confidence*100)+"%";
        document.getElementById("ur_sketch").innerHTML="Your Sketch : "+drawn_sketch;
    }
}

function check_sketch(){
    timer_counter=timer_counter+1;
    document.getElementById("timer").innerHTML=timer_counter;
    console.log(timer_counter);
    if (timer_counter>400) {
        timer_counter=0;
        timer_check="completed";
    }

    if (answer_holder="set") {
        timer_check;
        answer_holder;
        updateCanvas();
    }

    if (timer_check="completed") {
        timer_check;
        answer_holder;
        updateCanvas();
    }
}