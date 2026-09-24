# Overview

Now that the api key is stored and ready to be used its time to work on sumbitting the code and transfering the user to the other explainer page.

## Tasks
[x] save the sumbitted code to a variable in the backend so i can pass to gemini later on 
[x] move the user to the explainer page

I think we should keep the actual AI Logic in the next task, but first i need to understand how does this work. 

basically, We send gemini the code with a prompt. we get back the response in json format so we can send it to the front end and work with it. Yes that is the whole process. 

We will do that line in the next task. For now our focus is to get the submitted code to the backend and navigation. 

### Task #1: Save submitted code to variable

This is diffrent from the API key process as the text area is in a form. We have 2 options: 1) don't use a form. 2) Learn how to send this data to the backend with a form. I picked option 2 as I will learn smth new. 

even though approach 1 is the more modern and correct approach, but i want to learn how to do the second way. Chnaged my mind appriach 1 seems to be way faster and feels way smoother. Either way i will still learn something new in the end (fetch API with forms) and practice using fetch API.

#### Problems 
- the written text is stuck to the side of the textarea field. There is no space.

