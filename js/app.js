// comment rules: I will explain everything so as i would type the commit before or as i create the code. This helps me focus.

// Refrence for page elements (vars, let, const)

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

// listen for an input update using events
submittedCodeTextarea.addEventListener("input", () => {
    apiKeyModal.hidden = false
    home.style.opacity = "0.5"
});

// checks for clicks and runs the function
body.addEventListener("click", outsideClickHideModal);







