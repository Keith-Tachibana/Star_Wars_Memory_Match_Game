Instructions - Flip One Card
--

### Overview

In this feature, you are adding the functionality that will reveal one card once it is clicked. After, you will then include a second card to reveal the card individually to then be used to match cards. 

### Feature Set
1. In your `index.html`, add a `<script>` tag with the `src` for the **jQuery** library.
   - https://code.jquery.com/jquery-3.1.0.js
2. Create a `script.js` file and include this in a separate `<script>` tag in your `index.html` file.
3. Start by commenting out all the other cards and leave two remaining.
4. Create a function, `flipCard`, that will be called when clicking on each of the cards on the webpage.
   - Once clicked, the card's back will be hidden and the front will be revealed.
5. Modify the `flipCard` function, to only flip the card that you have clicked on.
   - Hint: You may want to use `event.target` or `event.currentTarget`

<!-- TODO Will have design docs located here -->


### After each feature

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
  6. Go back to [Features](../../README.md), if you're still working through the project.