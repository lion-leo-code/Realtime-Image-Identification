function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/064ATtwTV/model.json", modelLoaded);
}

function draw(){
    image(video, 0, 0, 500, 500);
    classifier.classify(video, gotResult);
    }


    function modelLoaded(){
        console.log("MODEL LOADED!");
    }
    
    
    function gotResult(error, results){
        if (error){
            console.error(error);
        }
        else{
            console.log(results);
            document.getElementById("result_object_name").innerHTML = results[0].label;
            accuracy123 = Math.floor(results[0].confidence * 100);
            document.getElementById("result_object_accuracy").innerHTML = accuracy123;
        }
    }