## Mobile Flashcards App

iOS version ONLY.
A small mobile app done with React Native that allows users to study collections of flashcards. The app allow users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.


## Prerequisites

This software was built and tested with React Native on a Mac machine. Emulation was on an iPhone 5s

https://facebook.github.io/react-native


## Installation
Tested with npm 4.6.1. Also tested with npm 5.* , no problems so far, but still could be some issues.
```
npm install
npm start
```

or
```
yarn //or yarn install
yarn start
```

It can complain about been unable to start the server, if thats the case, follow the instructions and put this on your terminal and try  again.
```
sudo sysctl -w kern.maxfiles=5242880
sudo sysctl -w kern.maxfilesperproc=524288
````


## Built With

* [create-react-native-app](https://facebook.github.io/react-native/docs/getting-started.html) - A React Native ready to go basic configuration
* [Redux](http://redux.js.org/) - The Redux pattern.


## Authors

* **Alejandro Zamora Reed** - [AZreed](https://github.com/AZReed)


## Licensing

The source code is licensed MIT.


## Contribution

https://github.com/AZReed/mobile-flashcards/blob/master/CONTRIBUTING.md


## Aknowledgments

The instructions for this project were given by [Udacity](https://www.udacity.com/)