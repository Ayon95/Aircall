# Aircall

A call-log application that shows a list of incoming and outgoing calls. Users can archive and unarchive a call. Archived calls are displayed in a separate Archived tab.

Link to the application: https://aircall-react-app.netlify.app

## Tools and technologies used

- React
- React Router
- styled components

## Get started

Open a terminal and clone this repo:

```bash
# Clone this repository
$ git clone https://github.com/Ayon95/Aircall

# Go into the repository
$ cd Aircall

# Remove current origin repository
$ git remote remove origin

# If you want, you can add a new remote repository
$ git remote add origin https://github.com/<your-github-username>/<your-repo-name>.git
```

### Installing project dependencies

Once you are in the project root directory, you can install the project dependencies using npm:

```bash
# Install dependencies
$ npm install

# Start development server
$ npm start
```

This will start a development server and open the app in your default browser.

### Deploying the client app to Netlify

First, create a [Netlify](https://netlify.com/) account if you do not have one already. Log in to your account. If your project is already on GitHub, then you can opt for Netlify's continuous deployment:

- Click `New site from git`, then select `GitHub`
- Select the project repository that you want to link to your Netlify site for continuous deployment
- Click `Deploy Site`

If you do not have a git repository for your project on GitHub, then you have to manually generate a production build of the client app:

```bash
# create a production build
$ npm run build
```

You can use this `build` folder to deploy the client app to Netlify.
