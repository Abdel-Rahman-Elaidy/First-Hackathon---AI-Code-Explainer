# Overview 

here, after we have defined our classes and terms, we can confidnetly build out html page. 

we will build 3 sections, each section will corrospond to a seprate page. 

# Tasks to be done
1. importing style sheet (css + fonts) <done>
2. Building section 1: Home page <done>
3. Building section 2: Explainer page <done>
4. Building section 3: Learner page <done>
5. Create the base modal that will appear in the learner page once the user hits "Fact check my answers" <done>
    i. did 2 rather than one: one for hint and one for solution


# Home Page <done>
- simple nav bar with just my name on the left and the apps name on the right
- h1 that directs the user
- text area for sumbitted code
- 2 buttons (one start and one for how to guide)

# Explainer Page <done>
- this page will be split into 3 parts
- part 1: This will take all of the left side of the page and will show the submitted code
- part 2: This will be a card that will take up 1/2 of the right side of the page, and it will show the big picture explaination
- part 3: This will also be a card and will take up the remaining 1/2 of the right side and it will show the line by line explnation

- so basically we need a code element to show the code 
- and 2 divs with class="card" to show the explnations

# Learner Page <done>
- This page will have the same structure as the explainer page
- the code will have the submitted code with the gab this will take up the left side
- We will have a card for the user to write his rewrite
- We will also have a card for the user to write his explnation

- so we need a code element
- and 2 card elements as well

# Modals <done>

brainstorm: 
the modal should include
- supporive text
- maybe a friendly error icon 
- a space for the hint
- a button to close the modal

al though i think we can ignore the icon for now as it might be not fitting with our IDE type style and might be disencoraging for the user. 

**But if we have time we should at least test it to see if it would be nice. 

Requirements:
- The modal card
- an h2 tag for the main text
- a smaller box/card for the hint
- a p element for the hint itself
- the hint text should be styles diffrently than the actually hint and should be surrounded with the strong element
- a button to close the modal

i decided to add another modal for the final solution as that's set-up is a bit different. 