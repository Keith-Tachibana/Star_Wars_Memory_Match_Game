# Memory Match

> - Maintained by: `codingcodymiller`


## Project Setup

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



## Functionality Overview
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



## Features
1. Below is the breakdown of feature sets you need to complete in order to finish the MVP (Minimal Viable Product).

- User Can View Game - [Instructions](guides/features/skeleton.md)
- User Can Flip Cards - [Instructions](guides/features/flip-one-card.md)
- User can Match Two Cards - [Instructions](guides/features/match-two-cards.md)
- User Can Win Game - [Instructions](guides/features/win-condition.md)
<!-- - Tracking Stats - [Instructions](guides/features/tracking-stats.md)
- Resetting Game - [Instructions](guides/features/resetting-game.md) -->

### Bonus Feature / Challenge
- Shuffling cards
- Dynamically creating cards
