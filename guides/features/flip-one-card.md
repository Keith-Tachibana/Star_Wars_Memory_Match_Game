Instructions - Flip One Card
--

### Overview

In this feature:
  - You are adding the functionality that will reveal the image on one card once it is clicked.

  - After you have completed this initial functionality:
    - You must add a second card and confirm that clicking on a card reveals the image on only the card that is clicked.
    - The reason for this test is that most initial attempts to flip the card will flip both cards once a second card is added.
    - This functionality must be properly completed prior to moving on to the next feature set.

### Feature Set

1. In your `index.html`, add a `<script>` tag with the `src` for the **jQuery** library.
   - https://code.jquery.com/jquery-3.1.0.js
2. In a `script.js` file and include this as the `src` in a second `<script>` tag in your `index.html` file.
    - Make sure that you load jQuery prior to your own JavaScript file
3. Alter the HTML for this Feature Set.
    - Begin by commenting out all of your card divs except the first one.
    - On that first card div that you did not comment out.
      - Add the "lfz-card" image to the first child div as a background image.
      - Add an instructor image to the second child div as a background image.
4. Now that the HTML is prepared, use jQuery to select your single card.
    - Add a click handler to that card.
    - This click handler will call a function called `handleCardClick`.
5. Next, declare a function, `handleCardClick`
    - This function will take a single parameter:
      - The parameter will be named `event`.
      - It will contain the `event` object that is passed forward by your click handler.
      - The `event` object will contain the information you need to target specific cards.
    - Initially, this function only needs to hide the first child div of the card you have clicked on.
      - To hide the card:
        - Create a CSS class selector called `.hidden`.
        - In the selector, add `display: none`.
        - Use jQuery to select the first child div of the card you clicked on.
        - Remember, that is where you added the "lfz-card" image as a background image!
        - Use jQuery to add the `hidden` class to the first child div you selected.
      - Once the first child is hidden, the background image of the instructor you added to the second child should be revealed.

6. After you achieve "flipping the card":
    - Uncomment the next card.
    - Add the background images as you did for the first card.
    - Make sure that clicking on the cards flips only the card you click on.
      - Remember the `event` object?
      - The data you need if both cards are flipping is in there!

### Design Docs

#### Flip One Card
![gif of card flip](../feature-gifs/flip-one-card.gif)

### After Each Feature

- When your feature implementation is complete, you will want to save and submit your work to the branch that you have created.
  - Use `git status` to check that you are on the correct branch that represents your feature.
  - You will want to **add**, **commit**, and **push** the code that you have written to the appropriate Github repository.
    1. `git add .`
    2. `git commit -m "Description of the feature that you have implemented"`
       - e.g. `git commit -m "Added simple HTML skeleton"`
    3. `git push origin FEATURE_NAME_HERE`
       - e.g. `git push origin skeleton`

- Finally, you will want to create a pull request. This will merge the code from your newly **completed** feature branch into your `master` branch.

  1. Navigate to <kbd>New Pull Request</kbd>:
  ![Navigate to pull requests](../post-feature/navigate-to-pull-request.gif)
  2. Compare changes to merge:
  ![Compare changes to merge](../post-feature/compare-changes.gif)
  3. Create a new pull request:
  ![Create new pull request](../post-feature/create-pull-request.gif)
  4. Merge pull request:
  ![Merge pull request](../post-feature/merge-pull-request.gif)
  5. Update master with the new changes:
  ![Update master](../post-feature/pull-new-changes.gif)
  6. Go back to [Features](../../README.md#features), if you're still working through the project.
