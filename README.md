# TrackNerd
Created React App with CodeSandbox

# Divided Task into 2 section
## login
## Vehicle List

## *login
### Installed bootStrap to add CSS
### login has 1 components :-
1. login.js :- component to take input value of email and password verify them and fetch user Data from "tracknerd.io/auth/login" using POST 


## *vehicle List
### Installed Firebase to get Db Data
### vehicle List has 2 components :-

1. vehicleList.js :- once token is recived from user data Vehicle Data is fetch from "tracknerd.io/v1/vehicle-groups/vehicles" using useEffect and then the Data is Displayed. Data is displayed such that every owners name is given with the number of vehicles for that owner. Once we click that, then location for the first vehicle of that owner is retireved from the DataBase and new tab is opened with the Location on Google Maps 

2. firebase.js :- used for initializing the DataBase with the Authentication Config.

## Resources Used
### https://getbootstrap.com/docs/
### https://firebase.google.com/docs/database/web/read-and-write
