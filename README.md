<p align="center">
  <img src="./_images-angular-forms-templatedriven/angular_logo_1.png" alt="Angular logo" title="Angular logo" width="200" />
</p>

Angular Template Driven Forms
=====================

Working with existing/cloned/copied Angular App
---------------------
- Clone or Download the project/app from Github or any other sources
- If using Visual Studio Code / Insiders, open Command panel/terminal from menu: View -> Terminal (shortcut key is `CTRL + BackTick` OR `COMMAND + J`)
- Go inside the project/app directory, command: `cd _examples-angular-templateDrivenForm OR cd templateDrivenForm`
- Run command: `npm install` to install project/app dependencies `(node_modules)`
- To Build and run Angular App, command: `ng serve / npm start` OR `ng serve -o` OR `ng serve --open`
- To change the port from 4200 to other port - type command:  `ng serve --port 5000`
- To check the application in browser type path/URL: `localhost:4200 / 5000`

1 - Angular Forms - Introduction
=====================
1.1. Introduction to forms in Angular
---------------------
- Forms are the main, critical building block of any modern front-end Web/Mobile application
- `The real objective of forms is gathering data`
- While dealing with Forms one should create an efficient and effective workflow, User Experience (UX) and User Interface (UI) which guide users properly
- In the context of Form, the Angular framework provides support for `two-way data binding, change tracking, validation, and error handling`

#### Forms are an important and vital part of any business applications, Forms are used to:
- Authentication
- Register / Login / Profile creation
- Submit request / Place an Order
- Pay Bills
- Schedule appointments
- Also to perform many other countless data entry operations/tasks

#### As Developers while dealing with Forms, we have to perform the following tasks:
- Data binding
- Change tracking
- Validation
- Visual feedback
- Error messages
- Form submission

1.2. Prerequisites to working with Angular Forms (Basic to Intermediate knowledge):
---------------------
Basic familiarity with HTML, CSS, and JavaScript, Angular 2/4/5/6 is a must. 

- HTML          - Markup
- CSS           - Style, Formates
- JavaScript    - Behaviour, Click, Validations
- Angular       - Templates, Components, Data Binding, Modules, Services, etc.
- TypeScript basics - Advanced JS features (Class, Arrow Function, Spread Operator)
- Text Editor / Visual Text Editors

1.3. Setup the Angular development environment:    
---------------------
In this section, we will learn how to set up a local development environment to start developing Angular apps. 

- `Node`, (website: https://nodejs.org/en) 
- `NPM`, (Node Package Manager - comes inbuilt with Node)
- `Angular CLI = Command Line Interface`, Angular CLI (Command Line Interface) for angular (website:  https://cli.angular.io/), 
    - The quickest and easiest way of starting an Angular app is through the `Angular CLI (Command Line Interface)`. It allows/helps the developer to build/generate building blocks of angular application like component, services, routings, modules, etc. with best practices quicker and easier)
- `Text Editor`
    - Visual Studio Code / Visual Studio Code Insiders (website: https://code.visualstudio.com)
    - Sublime Text, 
    - Atom, 
    - Brackets etc.

1.4. Anatomy / Mechanism / Concept behind Angular Forms:
---------------------
Component Template Markup `(.HTML view - Collects data)` -> Class `(.TS - Binds Data)` -> Services `(.TS Send Data)` -> Server

1.5. Angular Forms Types/techniques/strategies/approaches:
---------------------
1. **Template Driven Forms**: 
    - Primarily depends on the component template (manual HTML)
    - Most of the code written in the component (.HTML) template file
    - Template-driven forms are useful for adding a simple form to an app, such as an email list, signup form, etc.
2. **Reactive Model Driven Forms**: 
    - Primarily depends on the component class (dynamic)
    - Majority of code written in component .ts class file
    - Reactive forms are more robust, scalable, reusable, and testable
    
