# Do I Have a Chance?

Enter bracket data to create an interactive predictor for who has a chance to win a pool.

## Available Scripts

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## How to update data for a new year
1. Make a local branch for the new pool
2. Print out a bracket and number the teams 0 through 63 (or, if using ESPN brackets, write down the team ID's from there)
3. Update `bracketdata.js` to include the 63 teams in this year's tournament with their ID
4. Copy the constants over to winners.js
5. In `App.js`, update the teams object to match the bracketdata display names
6. For CBS brackets, open someone's bracket on the web, look at the network tab, find the `EntryDetailsQuery`, and update `importer.js` mapCbsGameToReact to match the 5 unique characters from the end of the slotID (before the ='s signs) of each pick in the order listed. Check that the CBS SlotId is parsing the right characters of the ID.
7. To import each person's picks, open their bracket on the web, look at the network tab, find the `EntryDetailsQuery`, and copy the Response. Paste it in the `bracketjson.json`, save, and run yarn test. For any "null" rows returned, update the mapCbsTeamToReact array to include the 5 unique characters from the end of the itemID for that pick
8. Update the homepage in `package.json` to name the correct pool
9. Update `winners.js` to have the right currentRound (starting with 1)
10. Run `yarn build`; copy build folder into FTP site
11. Run `yarn start` to test locally (might need to upload winners.js and update URL)
12. Update game date/times on `App.js`

### Updating as the tournament continues
Make updates to `winners.js` as games complete to enter what team won the game (and update currentRound if we have moved to a new round). Change the filename to include a timestamp (like winners-315.js) to act as a cache bust; update the import in index.html to match the new file name.

