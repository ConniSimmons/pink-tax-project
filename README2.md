Project Overview 
After having explored Full Stack concepts in their respective layers (UI, API, DB), let's switch gears and work as if we are developers in the industry. More often than not, as a Full Stack developer, you will be expected to complete tasks along with the project vertical rather than it's horizontal. That is to say, the features you are assigned to work on will touch every layer of the application from the User Interface through the Application Programming Interface into the Database. So far, we've worked with and studied these layers using CRUD operations; now, we will apply a single CRUD operation across all three layers with the intent to have a Full Stack CRUD App complete by the end of this project.  

Phase Overview 
Before starting the principal development efforts on any project, it is critical to set up and configure your project ecosystem; this phase focus' exclusively on that process; it also serves as a reference for future projects that you might work on. In this phase, you will create and configure a Database using Mongo Atlas (Links to an external site.) (Links to an external site.). You will generate an API project using the Express Generator (Links to an external site.) (Links to an external site.), and you will create a UI project using Create React App (Links to an external site.) (Links to an external site.). In addition to those Node projects, you will setup Environment Variables using NPM's 'dotenv' (Links to an external site.) (Links to an external site.). Finally, you will push separate Repositories for your Frontend and Backend codebases to your GitHub (Links to an external site.) (Links to an external site.) using GIT.  

 Learning Objectives 
Use of Mongo Atlas 
Use of Express Generator 
Use of Create-React-App 
Use of Environment Variables 
Use of GitHub  
Prerequisites 
Node installed 
Git installed 
Github account 
Connection to the Internet 
Requirements 
Choose a Project Name 
*Throughout these instructions replace <ptax> with your chosen name 
*It helps if there are no spaces in your name, use hyphens instead 
*Make it something that is topically relevant to your work ahead 
*Create a Mongo Cluster using Mongo Atlas (Limit free one Cluster) 
*Typically, this is free Cluster is created when you first create an account 
*Either create an account or use your existing Cluster for the following 
*You shouldn't need to enter a Credit Card  
*When you create a Cluster, it should have you create a Database and a Collection 
*Name the Database <ptax> 
*Name the Collection after at least one of the Data Types you wish to store <NetTax> 
*Configure your Database  
*Create a DB User with Read/Write Access <ptaxuser !tac>
*Enable Proper Network Access by either adding access from anywhere or current IP 
*Using the CLI of your choosing and navigate to your Projects folder 
*Create a new folder called <ptax> 
*Change directory into <ptax> 
X Run the following command in the CLI from inside your <ptax> folder 
X npx express-generator --view=ejs <project-name>-api 
X Change directories into <project-name>-api 
*Run the following command  
*npm install dotenv 
*Open Visual Studio Code 
*Open the 'app.js' and add the following line below the require statements 
*require('dotenv').config 
*Create a Git Ignore file at <ptax>-api's root 
*.gitignore 
*Add the following lines 
*.env 
*node_modules 
*Run the following commands in the CLI from the <project-name>-api directory 
*git init 
*git add -A 
*git commit -m "Initial Commit of <project-name> API" 
*Create a .env file and add the following Key/Value pairs 
ATLAS_CONNECTION= mongodb+srv://<username>:<password>@cluster0-mznto.mongodb.net/test?retryWrites=true&w=majority
*PORT= 5555
*This will be used below as 5555 
XReturn to the <ptax> folder and run the following command in your CLI   
Xnpx create-react-app <project-name>-ui  
XChange directories into <project-name>-api 
*Open Visual Studio Code 
*Modify the .gitignore file with the following line: .env 
*Run the following commands in the CLI from the <ptax>-api directory: git add -A 
*git commit -m "Ignoring Environment Variables in <project-name> UI" 
X Create a .env file and add the following Key/Value pairs 
*API_URL= (for development this is http://localhost:<port-from-above>Links to an external site.Links to an external site.) 
XNote that you should still be in your named project folder with only two subdirectories 
X<project-name>-api 
X<project-name>-ui 
*The next several steps will involve pushing these two layers up to GitHub as unique Repos 
*Using the Web Browser of your choice, navigate to Github 
XCreate two new Repos that match the names of the folder 
X<project-name>-api 
X<project-name>-ui 
*Found on the dashboard screen for those two Repos are instructions for pushing to Git 
*Follow '…or push an existing repository from the command line' instruction set for both Repos 
*Congratulations! Your Full Stack Web App Project Ecosystem is ready to start development.
Deliverables:
Once the project is done, provide links to the hosted project and the GitHub URLs where your code lives. 

