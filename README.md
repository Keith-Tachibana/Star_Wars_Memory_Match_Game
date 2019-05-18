# Memory Match

## What are the specifications for the app?
<details>
<summary> &#8592; Click arrow for details</summary>

1. Memory match is a matching game in which a player attempts to match the images contained on "playing cards".
2. There are a total of 18 cards:
    - Each card contains 1 of 9 images
    - There are two of each image allowing for 9 total matches
3. The following stats are tracked:
    - Total number of games played
    - Total number of matches for the current game
    - The accuracy of the players attempts to match the cards in relation to the current game (as a percentage)
4. The cards are displayed face down and "flip" over when they are clicked.
5. Two cards can be flipped each round.
6. If the images of the two cards which are flipped over match:
    - The cards remain flipped over and the player gets 1 point for the match
    - 1 point is added to the total number of attempted matches.
    - The player's accuracy is updated
7. If the two flipped over cards do not match:
    - The cards are flipped back over
    - 1 is added to the total number of attempts
    - The players accuracy is updated
    - The player must choose two cards again to continue searching for a match.
8. After each turn, stats are displayed, including:
    - The total number of matches made
    - The accuracy calculated from the total number of matches and total number of attempts
9. Once all 9 cards have been matched:
    - A modal is shown to the player telling them they have won.
    - A button is provided which can reset the game by clicking on it.
10. Resetting the game performs the following actions:
    - All cards are flipped back over
    - The number of games played is increased
    - The total number of matches are reset
    - The accuracy percentage is reset to 0%
11. For a bonus challenge in the initial build
    - Create the cards dynamically
    - Shuffle the cards every time the game is reset
    - DO NOT PERFORM THIS PRIOR TO THE COMPLETION OF MVP
        - The "boss" will not be happy...
</details>

### Project Setup

Before starting on this project, you will need to **fork** and then **clone** this repository into your `lfz` folder on your current development environment.

1. Fork this repository from LearningFuze
    - Click on the <kbd>**Fork**</kbd> button at the top right of the page.
    - Select your Github user name to complete the fork

2. Clone this repository to your development environment
    - In your terminal, navigate to the location of your `lfz` folder
    - `cd ~/lfz` or `cd ~/Desktop/lfz`
    - `git clone https://github.com/[Your User Name]/memory_match.git`

3. Navigate into the `memory_match` directory
    - `cd memory_match`
    - You are now ready to get started!
    - If you are not in the proper directory, navigate to the `lfz` folder, if you're not sure how, contact an instructor.

## Getting Started

After navigating into this repository, you will want to start by creating a new branch off of the `master` branch to contain the code required for the next feature of this project.

### Before each feature

- Make sure that the current branch says `master`.
  - Check that with the `git status` command.
    1. If you are on `master`:
       - `git pull origin master`, will get your most up to date changes and update this branch.
       - `git checkout -b FEATURE_NAME_HERE`, will create a new branch based on the name provided to represent this next feature.
    2. If not, `git checkout master`, will take you back to the default branch.
       - Go back to step 1.
    3. If you're not sure how, contact an instructor.
- **Example**
  - `git status`
  - `git checkout master`
  - `git pull origin master`
  - `git checkout -b skeleton`

You are now ready to start on the first feature!

### Features
- HTML Skeleton - [Instructions](guides/features/skeleton.md)
- Flip One Card - [Instructions](guides/features/flip-one-card.md)
- Match Two Cards - [Instructions](guides/features/match-two-cards.md)
- Win Condition - [Instructions](guides/features/win-condition.md)
- Tracking Stats - [Instructions](guides/features/tracking-stats.md)
- Resetting Game - [Instructions](guides/features/resetting-game.md)

### Bonus Feature / Challenge
- Shuffling cards
- Dynamically creating cards
