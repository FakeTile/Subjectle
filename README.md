# Subjectle
[Subjectle access link](https://faketile.github.io/Subjectle/)

there is an error regarding certificates and all the rest, the school proxy blocks the site because its a new domain, should either resolve itself in a few days or til needs to do silly website tomfoolery

-----------------------------------------------------------------------
HOW TO UPDATE THE WORD LIST
Clone the repo
run update-ppl.py
check textbox.js and game.js to confirm nothing broke
push the changes to main

Alternatively, if your on bash copy these lines

$ gh repo clone https://github.com/FakeTile/Subjectle && 
cd Subjectle/ && 
python3 update-ppl.py && 
git add game.js && 
git add textbox.js && 
git commit -m "Updated people list" &&
git push origin

----------------------------------------------------------------------

HOW TO RUN LOCALLY
cookies dont work directly from a file, so int the terminal run
$ python3 -m http.server
Then the server should be at 
http://localhost:8000/

----------------------------------------------------------------------

// TODO:

Get everybody on

Changelog

Settings Menu

Get all data correct (remote etc.)

Game Functionality
- Some kind of introduction / key for colours, to help users get accustomed to rules
- Allow entering names in slightly wrong format (e.g. allow 'soham m' for 'Soham M' (DONE)

Cookies
 - Save settings
 - Keep guesses when page refresh
 - Keep stats from previous guesses

Proper popup on win/loss

Improve searching
  - Button to submit (DONE but needs a little more work)
  - Arrow keys, tab, space, click
  - Search through alternate names (eg: seraching isacc shows izaak) (DONE)

Improve screen scaling
  - Each card has target aspect ratio
  - Works on any res, aspect ratio, mobile without scrolling

Fancy CSS anitions

Refactor
  - Put all the websites in their own folder
  - source from this folder, not main
  - Add python script to get the google sheet, reformat, do any name substitutions or alternates, add this to js files automatically
  - Potentially encrypt names, so you cant just look them up in inspect element
