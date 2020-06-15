# Superhero Squad ⚡

## Steps to reproduce:
- #### git clone `https://github.com/nayemalam/superhero.git`
- #### cd `superhero`
- #### `npm install`

  - #### Development Mode:
    - `npm start` <br/>
    Runs the app in the development mode. <br/>
    Open http://localhost:3000 to view it in the browser. <br/>
    The page will reload if you make edits.
  
  - #### Production Mode:
    - `npm run build`
    - `npm run serve` <br/>
    OR <br />
    - `npm run bns` (this will do both build and serve) <br/>
    Runs the app in the production mode. <br/>
    Open http://localhost:5000 to view it in the browser. <br/>
    The page will not reload if you make edits.

#
#### What does this do?
- [x] Allows users to search for a superhero by name
- [x] Display search results in a list
- [x] Users can navigate to a selected superhero's details page
- [x] Users can add a hero to their team
- [x] Users are able to see an average of powerstats of the team they created.
#
#### Additional features:
- There is an `instructions` toggle button at the bottom of the main page to learn how to navigate through the website.
- Can also view the total powerstats of your team.
- Notification bar is added everytime a user adds a superhero to their team; if the hero is already in their team, it will alert the user.
- Added a `Members` section below team, this displays all the members user added to their team by name. If a user clicks on a name, it will route to the superhero's corresponding details page.
#
#### Note: 
- In order to make a successful API call, it needs an access token. I already included my access token within the file at `Main.jsx` on `line 17`. If you want to put your own token, you can get an access token from their API website (you need Facebook), and just replace my token on the aforementioned line number.
- There is no  state or db persistence, so  if the user refreshes the page, the page will unmount and the team will be cleared. You can however go back and forward between pages and the page will not unmount.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
