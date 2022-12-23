function start_classification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/PMjDvl0aG/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResult);
}

function gotResult(error, result){
if(error == true){
    console.log(error);
}
else{

    r = Math.floor(Math.random() * 255) + 1;
    g = Math.floor(Math.random() * 255) + 1;
    b = Math.floor(Math.random() * 255) + 1;
    document.getElementById("hearing").style.color = "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById("Accuracy").style.color = "rgb(" + r + "," + g + "," + b + ")";

    console.log(result);

    document.getElementById("hearing").innerHTML = "I can hear -" + result[0].label;
    document.getElementById("Accuracy").innerHTML = "Accuracy - " + (result[0].confidence* 100).toFixed(2) + "%";

    img1 = document.getElementById("1st_pic");
    img2 = document.getElementById("2nd_pic");
    img3 = document.getElementById("3rd_pic");

    if(result[0].label == "barking")
    {
        img1.src = "dog.gif";
        img2.src = "cat.png";
        img3.src = "lion.png";
    }
    else if(result[0].label == "meowing")
    {
        img1.src = "dog.png";
        img2.src = "cat.gif";
        img3.src = "lion.png";
    }
    else if(result[0].label == "roaring")
    {
        img1.src = "dog.png";
        img2.src = "cat.gif";
        img3.src = "lion.gif";
    }
    else{
        img1.src = "dog.gif";
        img2.src = "cat.gif";
        img3.src = "lion.gif";
    }
}
}