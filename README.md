# Getting Started with Remove dulicate Webapp

This is React app made with create react app using typescript template

To run this app -:

1. npm install
2. cd src
3. npm run start
4. Your app will start runnig at port 3000

I have used the following packages -:

1. react-router-dom
2. react-icons
3. validate.js
4. random color

This app home screen is the input screen where you have to write a string and then click submit it will redirect you to the second screen but if the entered string is empty or has only white spaces then it will refuse to go to second screen.

On the second screen we have each and every letter of the string displayed in form of card except the white spaces. Here if the cards having same letters then this means they also have the same background color to get this effect I have used the package called randomcolor. On each card there is a delete duplicates button at bottom right corner on clicking that button the program will find all the duplicates of that same character and delete it from the screen except the one we clicked on. After deleting the duplicates a newString appears which show the new string without the duplicates. After all the duplicates has been removed a popup will appear congratulating you on removing all the duplicates from the string.
There is button also below navbar saying "back" on clicking that button you go back to the home screen with input feild being completely clean.

I have also taken card design from https://codepen.io/wikyware-net/pen/dyKPRxQ and button desing from https://getcssscan.com/css-buttons-examples so huge thanks to them
