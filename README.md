# poet-angular
Problem Statement:
The Poet
 

Using Angular if possible or javascript or typescript, complete the following and be ready to execute and explain your work during the interview:
1. Review the  https://poetrydb.org/ api.
2. Write a script or webpage to make rest calls to the server (author and title endpoint) and inspect the response.
3. The script should throw an error if a 200 is not received.
4. Enhance the script to retrieve both author and title by name and log all relevant data.
5. Be prepared to expand the functionality of your solution during the interview.

## How the App Works:
Poetic Profiles is a web application that displays Poets and their work easily. The main page has a list of all Poets in the PoetryDB at https://poetrydb.org. Click on a Poet's name and it will take you to a list of all of their poems by title. Click on a title and it will take you to a page where it says the poem's Name, the poem's contents, and who it is written by.

If you see:
Error Status: /${STATUS_CODE}
Error Reason: /${DESCRIPTION_OF_STATUS}

This means there was a problem with your request. Check your URL and confirm the Author and Title of the poem are correct.

## TODO
1. Add pagination to lists
2. Add search functionality on Poets page
3. Make error handling more user friendly
4. Enforce typing (remove any from service)

## Running the Application:
This repository is set up to work with github codespaces. To start development, create a new github codespace on this repository and give the devcontainer time to set up. Once all commands are given time to complete, the codespace will automatically serve the application. You can go to "ports" tab at the bottom of the codespace. There will be a link to port 4300. Click on that link and it will take you to a running version of the application.

You can also run this application locally if you have node, npm, and angular installed. To serve the application, run the command "npm start" at the base of the repository.
