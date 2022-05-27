function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/yvm4RkaHx/model.json', modelReady);

}
function modelReady(){
    classifier.classify(gotResults);
    
}
function gotResults(error, results){
    if(error){
        console.error(error);

    }
    else{
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;
        document.getElementById("result_lbl").innerHTML='I can hear - '+results[0].label;
        document.getElementById("result_confidence").innerHTML='Accuracy - '+(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_lbl").style.color="rgb("+random_number_r+" , "+random_number_g+" , "+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_number_r+" , "+random_number_g+" , "+random_number_b+")";
        img=document.getElementById("ear");
        if (results[0].label=="barking"){
            img.src='dog.jpg';
          }
        else if(results[0].label=="meowing"){
            img.src='cat.jpg';
        }
        else if(results[0].label=="roaring"){
            img.src='lion.jpg';
        }
        else{
            img.src='rabbit.jpg';
        }
    }
    
}