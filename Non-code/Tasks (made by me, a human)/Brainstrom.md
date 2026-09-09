# Brainstorm (free flowing thoughts)

**One main rule: We update and figure things as we go. The goal is to learn and build this project not to write perfect code or just hace the tool up and running, that can be done by AI, once we learn enough to use it**

We have a few files we want to build. 

We have 1 HTML file; an undefined nmber of css files, and 2 js files

the html file contains all 3 pages: home, explainer, and learner. The 2 js files are app.js and api.js. 

# Let's solve problem #1: CSS Pages

we want to keep things simple: we need a page for compontents, one for layouts (as layouts are annoying). I think that is enough for now. We also need a reset and variables page. so we have a total of 3 pages. the reset and vraiables are in a seperate page because they are ment to serve both pages. lets see if that works as I think it does.

so in short we have 3 pages:
1. reset and variables 
2. components
3. layouts

# Components

We we look at the design of the 3 pages a few clear components stand out

Lets just brain dump them and orgnize them later on

- buttons
- the "element" that will contain the submitted code and the gab (I think the best elemnt would be a code element or special designed div element)
- the text area for submitted code
- the text area for writing the rewrite
- the text area for writing the explnation
- cards (2): one for big picture explanation and one for line by line explanation

UPDATE:
decided to make the components style sheet into styles.css as that fits it intented purpose more 

This will only include looks


# JS start 

now we are supposed to start coding the actaul logic of the app. Lets think about what we need to develop in order from hardest and most important to easiest and least important.

this is a braindump 

1. navigation - This is key so the app actually functions
2. API key pop-up - This is important to get the key that ensures the whole app works
3. explanation flow - this is technically the whole app. Here we are trying to get the sumbitted code to the AI and then get the big picture explanation and the line by line explnation back to the app
4. learner page flow - here we need to do a couple of things like: 
    1. The functionality for the gab generation
    2. The fact checking of the rewrite and the explanation
    3. making the "go to the previous page" button work

this is a lot so lets make each step a task each as i never did this before and i don't even know javascript !!

but first: am i missing something?? No. I hope. 


# Problems encountered (should be solved)
1. unknown # of CSS pages and their purposes <solved>
2. What compontents do we need? <solved?>
3. How can we make the textarea of what input methode take in the sumbitted code while making it look like it is in an IDE
4. What element will take in the sumbitted code with the gab in the learner page
5. How can we create a button that moves us from the explainer page to the learner page (for now I will use an empty button element)
6. How can we create the button in the learner page that takes you back to explainer page
7. How can we create the button that facts checks the input written in the learner page
8. The text in the button seems to shift in position ever so slightly when i hover over the button
9. The "go to previous page" button in learner is, somehow, connected to the form (i.e i need to fill out the form to use it even though it's main use case happens when you cannot fill out the form)

