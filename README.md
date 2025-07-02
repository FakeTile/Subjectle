# Subjectle
[Subjectle access link](https://faketile.github.io/Subjectle/)

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
git push origin &&
cd .. &&
&& rm -rf Subbjectle/

----------------------------------------------------------------------

HOW TO RUN LOCALLY  
cookies dont work directly from a file, so int the terminal run  
$ python3 -m http.server  
Then the server should be at   
http://localhost:8000/  

----------------------------------------------------------------------

// TODO:

Get everybody on

Fix google analytics

Changelog

Settings Menu (popup, move all preexisting settings into it, plus add new ones [themes {?}, statistic view {when done}, changelog, etc])

Make all popups exit-able through clicking on empty space outside the popup itself

Add tooltips to all settings buttons

Get all data correct (remote etc.)
Isabella jara vidal remote???
narelle remote

Cookies
 - Keep stats from previous guesses

Improve searching
- Support alternate names

  - source from this folder, not main
  - Add python script to get the google sheet, reformat, do any name substitutions or alternates, add this to js files automatically
  - Potentially encrypt names, so you cant just look them up in inspect element
