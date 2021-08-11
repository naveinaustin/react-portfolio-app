# A Portfolio App - React

This is a Portfolio app to depict my information, experience and technology used.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Technology Used

This project was created using the following:
- React JS
- Node JS
- Javascript
- jQuery 
- Bootstrap
- Font Awesome
- [React Notifications](https://www.npmjs.com/package/react-notifications-component) 
- To store data of the form I used [apispreadsheets](https://www.apispreadsheets.com/)

[View the App](https://naveinaustin.github.io/resume/)

## Commands

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Deploy Node JS app to Github Pages
<details>
  <summary>Click to expand!</summary>
  
  ## Steps:
  ### Create a Repo and Upload Source
- Create a git repo in github say resume.
- Create a folder resume in your computer.
- Copy the project content to resume directory. Make sure not to copy the .git folder.
- Make sure the project starts
- Push the app to github (follow the commands shared in Github or the following steps)
    - cd resume
    - git init (Do this for the first time to initialize a new git repo)
    - Make sure to set username and email for git
        - git config user.name "{name}"
        - git config user.email {email}
    - git remote add origin https://github.com/username/resume.git
    - git add .
    - git commit -m "first commit"
    - git push origin master

### Configure gh-pages
- Run the command to install gh-pages - npm install gh-pages --save-dev
- Open package.json and make the following changes
    - Add a homepage property. The value would be https://username.github.io/repo_name
    - In the existing scripts property, we need to add the predeploy and deploy script fields:
        - "predeploy":"npm run build"
        - "deploy":"gh-pages -d build"
- Make sure to add and commit the files.
- Push the changes to Github
- When you deploy the app to your repo the repo name is added to context. So in case you are making calls to images or static files using the PUBLIC_URL you need to make sure /<repo name> is added. 
  Example: In local development if your accessing an image http://localhost:3000/image1.png in Github pages it will be http://localhost:3000/repo_name/image1.png.
  This needs to be changed in the app accordingly.
       
### Deploy the App
- Run the command - npm run deploy
- The command should push in changes to a branch gh-pages

### Errors:
- fatal: A branch named 'gh-pages' already exists - delete the folder: node_modules/.cache/gh-pages
- when npm run deploy a UI opens to ask password. It was taking it wrong and not deploying the app. Do the following to solve - 
 Create a token from your github account and clone the app using that 
 https://token@github.com/username/repository.git
 https://stackoverflow.com/questions/10054318/how-do-i-provide-a-username-and-password-when-running-git-clone-gitremote-git
  
</details>


# References
<details>
  <summary>Click to expand!</summary>
  
- https://dzone.com/articles/how-to-deploy-react-apps-for-free-with-github-page
- https://levelup.gitconnected.com/build-an-awesome-developer-portfolio-website-using-react-667abd7bab4d
- https://www.youtube.com/watch?v=Ej3VPf-BrYM&list=PL3KAvm6JMiowqFTXj3oPQkhP7aCgRHFTm&index=9
- https://medium.com/technoetics/create-a-developer-portfolio-using-reactjs-d34ea1bfb18e
- http://www.timbakerdev.com/#resume
- https://github.com/tbakerx/react-resume-template
- https://github.com/nordicgiant2/react-nice-resume
- https://dzone.com/articles/how-to-deploy-react-apps-for-free-with-github-page
- https://stackoverflow.com/questions/10054318/how-do-i-provide-a-username-and-password-when-running-git-clone-gitremote-git
- https://www.apispreadsheets.com/
- https://lovespreadsheets.medium.com/save-web-form-data-to-spreadsheets-880f95431f00
- https://www.npmjs.com/package/react-notifications-component
</details>
