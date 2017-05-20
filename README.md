# Hella Basic Calculator

By [Annie Pennell](https://www.linkedin.com/in/anniepennell/)

[anniepennell.com](http://anniepennell.com/)

**Hella Basic Calculator** is a simple boilerplate to get a site up and running with the basics

## Dependencies
Express and Node

## Instructions

1. Clone locally using `git clone https://github.com/apennell/Calculator-HW.git`
2. Install Node
3. `cd` in `Calculator-HW` directory
4. `node_modules` should already exist in there, as I was a young coder who didn't know about .gitignore when I built this, so you shouldn't need to install add any dependencies from package.json
5. Run `nodemon index.js` in your CLI
6. Navigate to http://localhost:3000/ in your browser
7. To add two numbers, type `localhost:3000/add` into the browser, followed by `/[first number]/[second number]`
8. To subtract a number from another number, type `localhost:3000/subtract` into the browser, followed by `/[first number]/[second number]`
9. To multiply two numbers, type `localhost:3000/multiply` into the browser, followed by `/[first number]/[second number]`
10. To add divide a number from another number, type `localhost:3000/divide` into the browser, followed by `/[first number]/[second number]`

### Example
http://localhost:3000/add/1/2 will print `1 + 2 = 3` in your browser

## Next Steps

* Add testing framework
* Add frontend accessing the API
