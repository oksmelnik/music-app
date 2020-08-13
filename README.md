# Music store app
For installation & running the app best use: Yarn - Dependency Management

Open terminal, run "yarn install" start or "npm install" depending on your setup. Then run "yarn start" or "npm start" This will run the app on port 3000 in your web browser.

# Possible improvements
* Add styling
* Search not only by album name, but also by category, artist etc.
* Add filtered list to the store and save it while navigating to the album and back
* Optimise for mobile
* Add typescript


# Most challenging parts of the assignment
* Testing of react-select (had to use ‘react-select-event’) as a core part of an assignment
* Using typescript. Realised I remember less of it than I thought so used props types for types validation. 


# Assignment

The aim of this assignment is to get a feeling how you approach requirements and come up with a technical solution and structure for them.

Create a music store app using React.

Your goal is to display top 100 albums in a searchable list. Albums should have a detail view (e.g. can look at details of an album). Client side routing is desirable, but not required.

## Requirements:

- Use React.
- Use Typescript.
- Show top 100 albums based on the json feed here: https://itunes.apple.com/us/rss/topalbums/limit=100/json
- Have client-side search of albums.

## Notes:

- You can use `create-react-app` and such.
- You can use your preferred way to style your application. You can use a CSS framework.

## Preferences:

At Userlike, we use the following libraries. It's preferable if you use some of them. But if it doesn't make sense, don't force yourself to use them:

- redux
- rxjs
- fp-ts & io-ts
