![StockObservr](/client/assets/img/logo.png)

# Stock Observr: money never sleeps!

A RESTful application built using Angular 1.5, [ng-Redux](https://github.com/angular-redux/ng-redux) and [RxJS 5](https://github.com/ReactiveX/rxjs)


## Stack

- [NPM](https://www.npmjs.com/)
- [Webpack](https://webpack.github.io/)
- [Angular 1.5](https://docs.angularjs.org/guide)
- [Angular UI Router](https://github.com/angular-ui/ui-router) (with self-registering components)
- [ES 6](http://es6-features.org/) / [Babel](http://es6-features.org/) (Module Loading)
- [ng-redux](https://github.com/angular-redux/ng-redux)
- [ng-redux-ui](https://github.com/neilff/redux-ui-router)
- [RxJS 5](https://github.com/ReactiveX/rxjs)
- [ng-redux-observables](https://github.com/redux-observable/redux-observable)
- [SASS](https://sass-lang.com)
- [Angular Material](https://material.angularjs.org/) (Material, Animate, Aria)
- Tests
  - [Karma](http://karma-runner.github.io/) (Test Runner)
  - [Mocha](http://mochajs.org/) (Test Framework)
  - [Chai](http://chaijs.com/) (BDD/TSS assertion library)
  - [Sinon](http://sinonjs.org/) (Spies, Stubs & Mocks)

To add?

- Jade
- TypeScript

## Dependencies

You must have `node v >= 4.0` and `npm` installed (via `brew install node` or [NodeJS.org](https://nodejs.org/en/));

Install a few dependencies globally:

```
  $ npm install -g json-server
  $ npm install -g babel
  $ npm install -g webpack
  $ npm install -g webpack-dev-server
  $ npm install -g eslint
  $ npm install -g concurrently
```

## Getting Started

There are two main parts to this application. The first is the server which we are using `json-server` to simulate a REST api. The second part is the Angular application which we will use `webpack-dev-server` to display.  

To get started, run the commands below to install the dependencies

```
  $ npm install
```

Then navigate to [http://localhost:3001](http://localhost:3001) in your browser.

Create a JS bundle with Webpack::

```
  $ npm run build
```

Start the Webpack development server on 'localhost:3000':

```
  $ npm run start
```

Run tests:

```
  $ npm run test
```

Linting:

```
  $ npm run lint
```

Cleaning:

```
  $ npm run clean
```


## HTML Webpack Plugin

Installation:

```
  $ npm install html-webpack-plugin --save-dev
```

webpack.config.js:

```
  var HtmlWebpackPlugin = require('html-webpack-plugin')

  module.exports = {
    ...
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Website Starter',
        template: 'src/index.html',
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        }
      })
    ],
  }
```


## ES 6 Imports

Default import:

```
  import localName from 'src/my_lib';
```

Namespace import: imports the module as an object (with one property per named export)

```
  import * as my_lib from 'src/my_lib';
```

Named imports:

```
  import { name1, name2 } from 'src/my_lib';
```

Renaming named imports:

```
  // Renaming: import `name1` as `localName1`
  import { name1 as localName1, name2 } from 'src/my_lib';
```

*Empty import: only loads the module, doesn’t import anything. The first such import in a program executes the body of the module.*

```
  import 'src/my_lib';
```

Source: http://exploringjs.com/es6/ch_modules.html

Imports for broken modules:

```
  require('script!objectpath/lib/ObjectPath');
```

Source: https://webpack.github.io/docs/shimming-modules.html


## SASS Loader

Installation:

```
  $ npm install sass-loader --save-dev
```

Webpack Configuration (webpack.config.js):

```
  module.exports = {
    ...
    module: {
      loaders: [
        ...
        { test: /\.scss$/, loaders: ["style", "css?sourceMap", "sass?sourceMap"]},
      ]
    },
    devtool: 'source-map'
  }
```

Javascript:

```
  import Styles from './styles.scss';
```

SASS (styles.scss):

```
  body {
      padding-top: 80px;
  }
```

## Travis CI

- Enable Travis for repository

.travis.yml:

```
  language: node_js
  node_js:
  - 4.2.1
  cache:
    directories:
      - node_modules
  before_install:
    - export CHROME_BIN=chromium-browser
    - export DISPLAY=:99.0
    - sh -e /etc/init.d/xvfb start
  install:
  - npm install -g babel
  - npm install -g webpack
  - npm install -g webpack-dev-server
  - npm install -g eslint
  - npm install
  script:
  - npm run test
  notifications:
    email:
    - xavier@lozinguez.com
```

webpack.config.js::

  ...


## ESLint

Installation:

```
  $ npm install eslint -g
```

Sublime Text 3 Installation: https://github.com/roadhump/SublimeLinter-eslint

## Sources

- Webpack: https://github.com/faassen/bundle_example
- Angular: https://github.com/angular-class/NG6-starter
- Angular: http://angular-tips.com/blog/2015/06/using-angular-1-dot-x-with-es6-and-webpack/
- Webpack and Babel6: https://github.com/rauschma/webpack-babel-demo
- https://github.com/onehungrymind/fem-ng2-ngrx-app
- https://github.com/kitconcept/webpack-starter-angular

## General Resources

### Component Architecture

- Creating Angular 2 Style Components Using Angular 1: [Part 1](http://blog.rangle.io/angular2-components/) & [Part 2](http://blog.rangle.io/creating-angular-2-style-components-using-angular-1-part-2/)
- [Using Angular 2 Patterns in Angular 1.x Apps](https://www.gitbook.com/book/onehungrymind/angular2-patterns-in-angular1/details)
- [https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.edod5ewl4] 
- [Component-Based Architecture in AngularJS 1.x and ES6](https://frontendmasters.com/courses/angular-components-es6/)

### Redux

- [Redux](http://redux.js.org/)
- [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux)
- [Managing state with Redux and Angular](http://blog.rangle.io/managing-state-redux-angular/)

### Observables

- [Reactive Programming explained by Jafar Husain in 10 minutes](https://www.youtube.com/watch?v=dwP1TNXE6fc)
- ReactiveX: [Doc](http://reactivex.io/rxjs/identifiers.html) & [Observable Definition](http://reactivex.io/documentation/observable.html) 
- [Tutorial to learn Rx](http://reactivex.io/learnrx/)
- [Learning Observable by Building Observable](learning-observable-by-building-observable-d5da57405d87#.hcs3dzkdm)
- [RxMarbles](http://rxmarbles.com/)
- [Asynchronous Programming in Javascript (with Rx.js Observables)](https://frontendmasters.com/courses/asynchronous-javascript/)

### All Together

- [Redux Observables](https://medium.com/@benlesh/redux-observable-ec0b00d2eb52#.yvg2lzi0u)
- [Netflix JavaScript Talks - RxJS + Redux + React = Amazing!](https://www.youtube.com/watch?v=AslncyG8whg)

### Other Related resources
- [Rethinking Asynchronous Javascript](https://frontendmasters.com/courses/rethinking-async-js)