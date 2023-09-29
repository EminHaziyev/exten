// Function to handle Button 1 click
function handleButton1Click() {
    alert("Button 1 Clicked!");
  
    // Get the active tab's ID
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tabId = tabs[0].id;
  
      // Access video cards on the YouTube page
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        function: () => {
            document.querySelectorAll(".ytd-video-renderer")[0].style.border = "10px solid red";

        },
      });
    });
  }
  
  // Function to handle Button 2 click
  function handleButton2Click() {
    alert("Button 2 Clicked!");
  }
  
  // Add click event listeners to the buttons
  document.getElementById("button1").addEventListener("click", handleButton1Click);
  document.getElementById("button2").addEventListener("click", handleButton2Click);
  











