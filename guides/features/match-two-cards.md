Instructions - Match Two Cards
--

### Overview

In this feature, a third card will be introduced in order to update the functionality to check for properly matched cards and mismatched cards. 

### Feature Set

1. In your `index.html`, uncomment one more card.
   - There should be a total of three cards displaying on the page. 
2. In your `script.js`, create three variables:
   - `firstCard`
   - `secondCard`
   - `matches`
3. During each click of the cards:
   - If you've clicked on the first card, you will want to store that card in the `firstCard` variable.
   - If you've clicked on the second card, you will want to store that card in the `secondCard` variable.
4. After storing the second card:
   - If both cards **match**, increase the `matches` variable by one.
   - If both cards **do not match**, flip both cards back and reveal their card backs.

### Design Docs

<!-- TODO Will have design docs located here 

- Bullet
![Alt-text-for-image](/path/to/image.jpg)

-->


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
