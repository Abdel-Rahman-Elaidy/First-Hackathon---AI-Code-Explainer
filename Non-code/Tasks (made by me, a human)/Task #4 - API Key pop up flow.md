# Overview

here we are trying to get the api key and store it to local storage so we can activate the AI. 

Tasks:
1. Make API key modal pop up when the user clicks the pastes code into simbitted-code-textare or press the start-btn in the home page (use the easier one for coding)
2. store the api key for usage in local storage
3. Prevent the modal from opening again once the key is stored in local storage

I think that is it. Let's see how hard this is !!


# Task 1:

Now how can i do that. I don't know where to start looking. 

lets think about the logic and then try to find code that does these things.

1. We need to detect when someone writes something in the textarea in the home page. <done>
2. once dectected we need to unhide the API key pop up <done>
3. once the api key is pasted we need the sumbit button to do 2 things
    a. Hide the pop up (i.e hide it again)

that is the whole flow. Now we just need to learn how to 

1. Detect input in the textarea <done, i think>
2. How to make elements be hidden or unhidden (so display properity or html hiddent attribute?)
3. Store that information in local storage

now this seems a bit more doable, but first we need to get a quick overview on javascript using those overview videos. <done lets get to work>

# Brainstorming zone

how can i make elements appear and disappear

the easiet way to do this is just to remove the hidden attribute from the html code. so we need js to do the follwoing

1. identify the element that has the hidden attribute that we want to remove
2. target the hidden attribute 
3. remove / turn off the hidden attribute without making it be removed totally as it would be used later on down the line

so we need to learn js targeting html attributes

turns out their is a .hidden property. This changes things a bit.

The true order for task 2 is

1. refrence the elements that need to be hidden
2. make element.hidden = false when we need to show it
3. make element.hidden = true when we need to hide it

cool!!

now lets do this: How can we unhide the API key modal?

1. refrence elements that need to be hidden
2. make all elements be hidden at the start expect home (new problem: how am i supposed to do that?)
    problem solution: make all elements hidden by defualt (using html), and then when needed making them unhidden or hidden again as the js code runs. Not my idea but AI guided me too it rather than giving me the solution.
3. once value is dected in subCodeTextarea we unhide the api key modal

okay my if statment idea is wrong as it runs the moement the page loads and that makes it impossible to detect things. AI said learn events. 

here is the plan.

1. set-up an event listenr using the input event (which listens for updates in value in input related elements)
2. set-up an event handler that once the event lister is updated we show the api key modal

i think once this happens it happens once. no loops.

nice we did the first half of this task. now time to do the other half: hidding it again.

This modal can only be hidden by 2 ways:
1. Click outside the modal
2. clicking the submit button (if it has the API key in it)

I also want the background behind the body to get a bit dim once the modal appears

so now we have **3 problems**
1. How to hide the modal when we click outside <done>
2. how to dim the background <done>
3. How to unhide the modal again when we press the submit button 
    a. this third problem will take up to the second task from overview

problem #1: How to hide the modal when we click outside 

this is probably also done by an event that detects if the mouse clicks outside a specfic area, but how can we do that

turns out there is a property to figure out what element is clicked. 

--- what are we trying to do

- we are trying to figure out if the mouse clicks outside of the modal
- to do that we need to know what element did the mouse click on
- now we have 2 groups of elements: modal-elements (so everything inside the modal) and non modal elements
- we need to create a function that checks if the clicked element is a modal-element or not. 
    - if it is a modal element we do nothing 
    - if it is a non-modal element we hide the modal

now here is the problem. How can we figure out if the element is a modal element or not???

we use the element.contains() method. This sees if an element contains another node. Here we can reference all the element inside the modal element or we ca just use the event.target to see if the clicked value is contained in the element.contains() method. (i am one dumb bi##, AI helped with this one too)

so basically we need to create a function that checks for if the event.target is inside the modal, 
- if yes, we do nothing
- if no, we hide the modal

then we create an event list

--dim background

I have a few solutions
- Dim the home section using opacity property <used>
- add an "dim background element" that i can change it's opacity while its defualt being hidden / 100% transparent

lets try these out. solution 1 works and it gets the job done for now. (this is the first time I do what i think is right rather than following the AI guide, guess i am learning afterall :D)

## Local storage

here we face a couple of problems:
1. The API key input field isn't required which it should be (it is requred but it is not enforced) <fixed, as it is implicity reqired so the app can function - the explain code button shouldn't work if the api key isn't in local storage>
2. The button should only work (i.e store the data in local storage & hide the modal) if data is in the input field 
3. we should fact check the key somehow (the simpliest solution would be clear instructuons)
4. Actually storing the Key in local storage when we press the button

lets deal with each problem one by one

**lets fix problem #2.** 

To do this we need to do a few things:
- when we click the button, we need to check if the input field has the API key. (the simpleist way to do this is to just check if its empty or not) <done>
    - If yes, we hide the modal and store the API key in the backend
    - if no, we show an alert so the user knows the API key is required before proceeding <done>

to check for input field values we can use the element.value and see if its equal to the length of the minimum API key length. 

This made me relize a big problem. Local storage isn't secure enough; this means i need to lear backend!! This changes things massivley. Now i need to learn backend, js, and AI programming all in 20 days. I wil get roasted if i don't learn fast enough.

### Backend Problem

now to do the following task: If yes, we hide the modal and store the API key in the backend

We need to do a few things.
- Run the backend server <done>
- Save the API key to the backend server 
- hide the modal
- do the 2 tasks above when we click on the sbmit button

**Sending the API key to the backend**

from what i understood to do this we need to:
- use an app.post / POST request to get the data
- then parse that data using a middleware (so something like express.json)
- lastly we need to access the data in the POST request using req.body and assign it a variable to save it in memory. 

update of plans. 

the express.JSON deals with js objects, which API key isn't. it is just a string, so we will use a whole new process to send string (AI sucks lol)

now are using the fetch function. The process is as follows: 
- we will send the api key as string using the fetch function with the POST methode
- then we will store the key in a variable in our backend

lets do this



