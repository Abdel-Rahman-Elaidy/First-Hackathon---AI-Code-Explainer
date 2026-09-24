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
const submittedCodeTextareaForm = document.getElementById("submitted-code-form");

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
apiModalSubmitBtn.disabled = true;
let submitedApiKeyStatus = false;

// shows modal and changes opacity of background
submittedCodeTextarea.addEventListener("input", () => {
    // only unhide the modal if the api key hasn't been submitted yet
    if (submitedApiKeyStatus === true) {
        apiKeyModal.hidden = true;
        home.style.opacity = "1";
    } else {
        apiKeyModal.hidden = false;
        home.style.opacity = "0.5";
    }
});

// Insures the button is disabled unless there is an API key inserted
apiKeyInput.addEventListener("input", () => {
    if (apiKeyInput.value.length >= 1) {
        apiModalSubmitBtn.disabled = false;
    } else {
        apiModalSubmitBtn.disabled = true;
        alert("Please enter your API key to continue")
    }
})

// checks for clicks and hides the modal if clicked outside of modal
body.addEventListener("click", outsideClickHideModal);

// Sends api key to backend
apiModalSubmitBtn.addEventListener("click", async () => {
    apiModalSubmitBtn.disabled = true;

    const apiKey = apiKeyInput.value.trim();

    if (!apiKey) {
        alert("please enter an API Key");
        return;
    } else {
        apiModalSubmitBtn.disabled = false;
    };

    try {
        const response = await fetch("/store-key", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({apiKey})
        })

        const data = await response.json();

        if (response.ok) {
            alert("API Key is saved successfuly");
            submitedApiKeyStatus = true;
            apiKeyModal.hidden = true;
            home.style.opacity = "1";
        } else {
            console.error("Error: ", (data.message || "Unknown error"));
            alert("Failed to save API key.");
        }

    } catch (err) {
        console.error ("Failed to save API key:", err);
        alert ("Failed to save API key.");
    }
});


//Send submitted code to backend
submittedCodeTextareaForm.addEventListener("submit", async (event) => {
    event.preventDefault()

    const formData = new FormData(submittedCodeTextareaForm);
    const code = formData.get("submitted-code").trim();

    try {
        const response = await fetch("/submitted-code",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({code})
        });

        const data = await response.json();

        if (response.ok) {
            // navigation to explainer page logic 
            home.hidden = true;
            explainer.hidden = false;
        } else {
            console.error("Error: ", (data.message || "Unknown error"));
            alert("Failed to submit code. Try again.");
        }

    } catch(error) {
        console.error("Failed to submit code", error);
        alert("Failed to submit code. Try again.");
    }
})














