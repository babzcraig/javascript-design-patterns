# Design Patterns In Javascript

Design Patterns can help us write more efficient, maintainable and clearer code. They're time tested solutions to common problems in software design. I've recently taken a closer interest in design patterns and decided to document the types of design patterns I've come across, as they apply specifically to Javascript. A lot of the examples out there are pre-ES2015 and I thought it would be nice to redo them in more mordern syntax.

Please note that not all examples have been converted fully to ES6. It is a work in progress and I'll be refactoring the code as I progress.

Each folder contains a small app which illustrates a design pattern. The folders are named after the design patterns they illustrate. The samples are simplistic and intended only to illustrate the features of each pattern.

## Walkthrough

You can find articles walking through each design pattern on my Medium. Currently the first article on the **Factory Pattern** is up. As I add more articles, I'll list the links below:

### Creational Design Patterns

- Factory Pattern - [Link](https://medium.com/@thebabscraig/javascript-design-patterns-part-1-the-factory-pattern-5f135e881192)

### Behavioural Design Patterns

- Publisher/Subscriber Pattern - TBD
- Strategy Pattern - TBD
- Observer Pattern - TBD
- Chain of Responsibility Pattern - TBD
- Mediator Pattern - TBD
- Iterator Pattern - TBD

### Structural Design Patterns

- Facade Pattern - TBD
- Decorator Pattern - TBD
- Adapter Pattern - TBD
- Composite Pattern - TBD
- Proxy Pattern - TBD

## To run the files:

1.  `git clone` the repo to a local folder.
2.  Run `npm install` to install the node_modules (this is mainly for nodemon so we can run node with autorefresh enabled)
3.  There are two commands, `npm start` and `npm run start-dev`.
4.  To run the examples, pass in the folder name for the specific design pattern as an npm argument. For example, to run the "**factory**" design pattern, you would enter the command `PATTERN=factory npm run start-dev` in your temrinal.
5.  The folder names correspond to the design pattern names.

---

This is still a work in progress and I'll be adding more design patterns

If you have any suggestions or would like to contribute in any way, please feel free to open an issue or make a PR.
