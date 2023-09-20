const process = document.getElementById("process");
const upload = document.getElementById("upload");
const preview = document.getElementById("preview");
const resultBody = document.getElementById("classifyResults");
const result = document.getElementById("resultTable");

let mobilenet;

// When the model is loaded, remove loading message and make input visible
function modelLoaded() {
    console.log('Model Loaded!');

    let content = document.getElementById("waitMessage");
    content.innerText = "Select JPG or PNG"

    let button = document.getElementById("upload");
    button.removeAttribute("style");
}

//setup() is a p5.js function which is run on window load
function setup() {
    //button hidden until model is loaded and process button disabled
    let input = document.getElementById("upload");
    input.setAttribute("style","visibility: hidden");

    process.setAttribute("disabled","");

    // Initialize the Image Classifier method with MobileNet
    mobilenet = ml5.imageClassifier('MobileNet', modelLoaded);

    // When the user uploads the image, show it on the screen
    upload.onchange = function () {
        if (this.files && this.files[0]) {
        
          // using FileReader to read the image
          var reader = new FileReader();
          reader.onload = function (e) {
              preview.src = e.target.result;
          };
          reader.readAsDataURL(this.files[0]);
          
          //enable processing
          process.removeAttribute("disabled");
        }
    };
    
    // classify the image when the user clicks the button
    process.onclick = function (e) {
    
        // predict the image using the model
        mobilenet.classify(preview, function (err, outputs) {
          if (err) {
              return err;
          } else {
              //full output to console
              console.log(outputs);
              //clear table 
              resultBody.innerHTML = "";
              //populate table
              outputs.forEach(element => {
                resultBody.innerHTML+="<tr><th scope='row'>"+element.label+"</th><td>"+ element.confidence +"</td></tr>";
              });
              // make visible
              result.setAttribute("style","");
          }
        });
    };
}