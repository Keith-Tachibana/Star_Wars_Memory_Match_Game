Instructions - Match Two Cards
--

### Overview

In this feature, a third card will be introduced in order to update the functionality to check for properly matched cards and mismatched cards.

### Feature Set

1. In your `index.html`, uncomment one more card.
   - Apply background images to the child divs.
    - Make sure that two of the instructor images match on the second child divs of the cards which are uncommented.
    - There should be a total of three cards displaying on the page.
      - Two that contain matching instructor images, and one with another instructor
2. In your `script.js`, declare three variables in the global space near the top of the page:
   - `firstCardClicked`
   - `secondCardClicked`
   - `matches`
   - Set their initial values to `null`.
3. Now when you click on the cards:
   - if `firstCardClicked` is still containing a `null` value:
      - Store the jQuery reference for the first card you clicked in the `firstCardClicked` variable.
     - **Example:** `firstCardClicked = $(event.currentTarget)`
        - You are storing this reference in a variable to prevent jQuery from having to search the DOM every time you want to use the element reference
   - If `firstCardClicked` has already been assigned a jQuery element reference:
     - then store the jQuery reference for the card you clicked in the `secondCardClicked` variable.

4. After clicking two cards and storing the jQuery reference into the `secondCardClicked` variable:
   - Check if the background image urls for the instructor images on the second child divs of `firstCardClicked` and `secondCardClicked` match.
      - To do this:
        - Use jQuery to select the second child div of the element references you saved in `firstCardClicked` and `secondCardClicked`
        - Then retrieve the background image urls from those child elements and compare them.
          - This is a great opportunity to use the jQuery `.find()` method noted earlier
            - Documentation: https://www.w3schools.com/jquery/traversing_find.asp
          - It is also very helpful to use the jQuery `.css()` method to get the background image urls
            - Documentation: https://www.w3schools.com/jquery/jquery_css.asp
    - If the urls match:
      - `console.log` `"cards match"`
      - Increase the value of the `matches` variable by 1.
      - The instructor images should remain uncovered
        - You will notice they disappear in the example gif below. This is not required, but if completed later, it reveals the entire background image nicely!
    - If both cards **do not match**,
      - Flip the cards back to their original state after 1.5 seconds.
        - Do this by removing the `hidden` class you added to the first child div of `firstCardClicked` and `secondCardClicked` to hide them
        - Use a setTimout() function to get the proper 1500ms delay
          - Documentation: https://www.w3schools.com/jsref/met_win_settimeout.asp

### Design Docs

#### Matching Two Cards
![match two cards](../feature-gifs/match-two-cards.gif)
#### Flipping Cards Back
![flip cards back](../feature-gifs/flip-card-back.gif)




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
