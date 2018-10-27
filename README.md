# This is a repo of design patterns in Javascript

I've recently taken a closer interest in design patterns and decided to document the types of design patterns I've come across in Javascript. A lot of the examples out there are pre-ES2015 and I thought it would be nice to redo them.

The examples aren't all written in ES6 but I'll be refactoring them one by one.

Each folder contains a small app which illustrates a design pattern. The folders are named after the design patterns they illustrate.

## Medium Articles

You can find an article walking through each design pattern on Medium. Currently the first article is a work in progress but will be completed soon. I'll list all the articles below:

- Factory Pattern - [Link](https://medium.com/p/5f135e881192/edit)

## To run the files:

1.  `git clone` the repo to a local folder.
2.  Run `npm install` to install the node_modules (this is mainly for nodemon so we can run node with autorefresh enabled)
3.  There are two commands, `npm start` and `npm run start-dev`.
4.  To run the examples, pass in the folder name for the specific design pattern as an npm argument. For example, to run the **"factory"** design pattern, you would enter the command `PATTERN=factory npm run start-dev` in your temrinal.
5.  The folder names correspond to the design pattern names.

This is still a work in progress and I'll be adding more design patterns

If you have any suggestions or would like to contribute in any way, please feel free to open an issue or make a PR.
