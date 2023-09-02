// contentScript.js

// Create an iframe element
const iframe = document.createElement("iframe");
const el = document.getElementsByClassName("ytd-page-manager")[0];
// Set attributes for the iframe
iframe.src = "https://final.syntheyesis.repl.co/detect"; // Replace with the URL you want to embed
iframe.width = "400";
iframe.height = "1000";
iframe.id = "finall";
iframe.style.position = "fixed";
iframe. allow="camera https://final.syntheyesis.repl.co"

// Append the iframe to the YouTube page's body


document.body.appendChild(iframe);
console.log(iframe.contentWindow.document.getElementsByClassName("blend-shapes-label"));