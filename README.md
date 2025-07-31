# Subjectle
[Subjectle access link](https://faketile.github.io/Subjectle/)

-----------------------------------------------------------------------
HOW TO UPDATE THE WORD LIST  
Clone the repo  
run update-ppl.py  
check textbox.js and game.js to confirm nothing broke  
push the changes to main  

Alternatively, if you're on bash copy these lines  

$ gh repo clone https://github.com/FakeTile/Subjectle && 
cd Subjectle/ && 
python3 update-ppl.py && 
git add . &&
git commit -m "Updated people list" &&
git push origin &&
cd .. &&
rm -rf Subjectle/

----------------------------------------------------------------------

HOW TO RUN LOCALLY  
cookies dont work directly from a file, so in the terminal run  
$ python3 -m http.server  
Then the server should be at   
http://localhost:8000/  
or, if wanting to run on another device connected to the same internet, run 
ifconfig or ipconfig (depending on if you run mac/linux or windows respectively)
find the wlan0 or wlp2s0 or other inet ip, then add your port (normally 8000)
so it should be http:// xxx.xxx.xx.xx:8000

----------------------------------------------------------------------

// TODO:

Get everybody on

Fix google analytics

Changelog

Settings Menu (add new settings [themes {?}, statistic view {when done}, changelog, game switcher, etc])

Add tooltips to all settings buttons

better histogram css

better file layout

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
  - Move popup stuff to shared
  - Improve name security
