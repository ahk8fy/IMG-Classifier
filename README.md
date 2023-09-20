# image-classifier-js
This application uses Tensorflow.JS and ML5.JS to predict the contents of any image provided. The current version uses the MobileNet pretrained model therefore bias is present.
### How to Host Locally
1. Install Node.JS
2. From the Project Directory, open a terminal. Run these commands to initialize a node js project, install packages, and run the server
    - `npm init -y`
    - `npm i express`
    - `npm i bootstrap@5.3.2`
    - `npm server.js`
3. open localhost:8080 in a web browser (port 8080 is set in server.js)
4. Upload any JPG or PNG to the web app and select "Process Image" for the mobilenet pretrained model to predict the contents.
