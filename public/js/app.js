// comment rules: I will explain everything so as i would type the commit before or as i create the code. This helps me focus.

// Refrenced HTML elements

const body = document.body;

const home = document.getElementById("Home");
const explainer = document.getElementById("Explainer");
const learner = document.getElementById("Learner");

const apiKeyModal = document.getElementById("api-key-modal");
const successModal = document.getElementById("success-modal");

const hintModal = document.getElementById("hint-modal");
const solutionModal = document.getElementById("solution-modal");

const submittedCodeTextarea = document.getElementById("submitted-code-textarea");
const apiModalSubmitBtn = document.getElementById("api-modal-submit-btn");
const apiKeyInput = document.getElementById("api-key-input");

// == Functions ==

// Hides modal when clicked outside
function outsideClickHideModal (event) {
    if (!apiKeyModal.contains(event.target)) {
        apiKeyModal.hidden = true;
        home.style.opacity = "1";
    }
}

// once the js runs
home.hidden = false;

// shows modal and changes opacity of background
submittedCodeTextarea.addEventListener("input", () => {
    apiKeyModal.hidden = false
    home.style.opacity = "0.5"
});

// checks for clicks and hides the modal if clicked outside of modal
body.addEventListener("click", outsideClickHideModal);


// Insures the button is disabled unless there is an API key inserted
apiKeyInput.addEventListener("input", () => {
    if (apiKeyInput.value.length >= 1) {
        apiModalSubmitBtn.disabled = false;
    } else {
        apiModalSubmitBtn.disabled = true;
        alert("Please enter your API key to continue")
    }
})

apiModalSubmitBtn.addEventListener("click", () => {
    const apikey = apiKeyInput.value

    fetch("http://localhost:3000/api/key", {
        method: "POST",
        body: apikey
    })

    console.log("submit button is clicked")
})










