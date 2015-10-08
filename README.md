# Memory Match

## Overview

Memory match is a game with 18 cards face down and the player has to try and match all 10 pairs of matching cards by 
remembering the position of the cards. Once the player has matched 2 cards they will be displayed face up until all 
pairs have been matched. 

<a href="https://drive.google.com/open?id=0B7eOl4joefDuWTRUQWU0eXdtRzg" target="_blank">Design Overview</a>

## Versions

### Version 0.1 (v0.1)

#### Overview

> This version is used to reinforce HTML, CSS & layout concepts to put your own flare into a classic game of 
concentration. The scope for this version asks the student to choose a theme for the game including: 

> - 9 card faces
- 1 card back
- Creating an about page describing about the game and the skills that went into creating it.

> This version will integrate with instructor built JavaScript to give the layout built by the student's functionality 
and show the ability of design & layout to be independent of functionality but strict requirements are needed 
(specific classes and id’s). In future versions the students will be building out the same functionality that is 
provided with each student providing their own flare and features. The students will pull the knowledge from what 
they have learned from the resources they have consumed and the prototypes they have completed and pull it into one 
cohesive version of this project. 

#### Related Videos

> - CSS Animation - <a href="https://www.youtube.com/watch?t=3&v=fjqT5mwbOCo" target="_blank">Video</a> | <a href="https://drive.google.com/a/learningfuze.com/file/d/0B7eOl4joefDub1BUOUtQMWdtbnc/view" 
target="_blank">Slides</a>
> - BootStrap Intro - <a href="https://www.youtube.com/watch?t=544&v=i7cnwkFbuko" target="_blank">Video</a> | <a 
href="https://drive.google.com/a/learningfuze.com/file/d/0B7eOl4joefDuS1l1THpsanlsWkU/view" target="_blank">Slides</a>
> - Bootstrap Redux - <a href="https://www.youtube.com/watch?v=HFhIYttrvWM" target="_blank">Video</a> | <a 
href="https://drive.google.com/a/learningfuze.com/file/d/0B7eOl4joefDuTWJrVk9YTXR5M2c/view" target="_blank">Slides</a>
> - Positioning & Floating - <a href="" target="_blank">Video</a> | <a href="https://drive.google.com/a/learningfuze.com/file/d/0B7eOl4joefDuOGVTZXpHOWtrNGM/view" target="_blank">Slides</a>
> - Box Model, Margin & Dimensions - <a href="" target="_blank">Video</a> | <a href="https://drive.google.com/a/learningfuze.com/file/d/0B7eOl4joefDueXdic3dWekhXdWc/view" target="_blank">Slides</a>
> - CSS Selectors, Cascading & Specificity - <a href="" target="_blank">Video</a> | <a href="https://drive.google.com/a/learningfuze.com/file/d/0B7eOl4joefDub3N1NWE3VmFxakE/view" 
target="_blank">Slides</a> 

#### Related Prototypes

> - <a href="https://github.com/Learning-Fuze/prototypes/tree/master/css_design_layout_1#prototype---css-design--layout-1-box-model-margin-padding-border-and-dimensions" target="_blank">CSS Design Layout 1</a>
> - <a href="https://github.com/Learning-Fuze/prototypes/tree/master/css_design_layout_2#prototype---css-design--layout-2--css-positioning-and-css-floating" target="_blank">CSS Design Layout 2</a>
> - <a href="https://github.com/Learning-Fuze/prototypes/tree/master/css_selectors#prototype---css-selectors" target="_blank">CSS Selectors</a>
> - <a href="https://github.com/Learning-Fuze/prototypes/tree/master/css_bootstrap_redux#bootstrap-redux" target="_blank">CSS Bootstrap Redux</a>


#### Getting Started

> - Fork this repo by clicking on the **Fork** button located at the top right of this page
> - Clone the newly created repo to your local machine
    - `git clone https://github.com/[your_user_name]/memory_match.git`
    - **Change [your_user_name] to your user name**
> - Create a feature branch
    - `git checkout -b v1`
> - Work on the scope defined <a href="https://github.com/Learning-Fuze/memory_match/tree/assets#v0.1">Below</a>
> - Save your work to gitHub
> - Add files to git
    - `git add .`
> - Commit files (Group files together)
    - `git commit -m "Memory Match v1 - Your Name"`
    - **Replace "Your Name" with your first and last name**
> - Send to gitHub (Push)
    - `git push origin v1`
    
---

### Version 0.5 (v0.5)
 
> #### Coming Soon
 
---

## Scopes

### v0.1

> ##### Choose / design a theme
>>  - Here are a couple examples of past designs
>>      - *Example 1 - Howard (C5) *
            <br><img src="https://github.com/Learning-Fuze/memory_match/blob/assets/images/Howard-MM.png?raw=true" width="400">
        
>>      - *Example 2 - Trevor (C5) *
            <br><img src="https://github.com/Learning-Fuze/memory_match/blob/assets/images/Trevor-MM.png?raw=true" width="400">

> ##### Layout Components
>>  - *General Layout concept*
        <br><img src="https://github.com/Learning-Fuze/memory_match/blob/assets/images/mm_wireframing.png?raw=true" width="400">
    
>>  - *Header Container*
>>    - Game Logo 
>>      - Game Title
>>      - Settings Link (links to no where yet)
>>      - About Link  (links to a page with a description of the game and what you did in it)

>>  - *Stats Container*
>>    - Games Played
>>      - element that has a class of **“games-played”**, inside this container:
>>        - element with class **"label"** with the text **“Games Played”**
>>        - element with class **"value"** with no text
>>      - Attempts (number of times the user has clicked on cards)
>>        - element that has a class of **“attempts”**, inside this container:
>>          - element with class **"label"** with the text **“attempts”**
>>          - element with class **"value"** with no text
>>      - Accuracy (how many times they got it right / number of total clicks for the current game)
>>        - element that has a class of **“accuracy”**, inside this container:
>>          - element with class **"label"** with the text **“Accuracy”**
>>          - element with class **"value"** with no text
>>      - Button Element with:
>>        - class of **“reset”**
>>        - Text of **“Reset Game”**

>>  - *Game Area*
>>      - Element with:
>>          - class of *“game-area”*
>>          - 9 matching card elements (18 total) inside with each element having:
>>              - class of **“card”**
>>              - Inside:
>>                  - Card front element with:
>>                      - class **“front”**
>>                      - img element inside with a valid source
>>                  - Card back element with:
>>                      - class **“back”**
>>                      - img element inside with a valid

> ##### Add Functionality:**
>>  - Inside of the head tag link the following javascript files in order
>>      - https://code.jquery.com/jquery-2.1.4.min.js
>>      - http://learning-fuze.github.io/memory_match/v0.1/script.js


> ##### Files in repo:
>>    - index.html - the main file
>>        - Provided HTML general layout
>>    - style.css - the main css file, referenced from index.html
>>        - link this in the index file
>>    - about.html - the about page for the game.
>>        - include a picture of you as the designer
>>        - include a link to your portfolio website. If you don't have this yet, put a dummy link to "#" as the href
>>        - include a description of what the game is about
>>        - include a list of skills you needed to make it. This list will grow.
