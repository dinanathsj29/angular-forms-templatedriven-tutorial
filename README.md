<p align="center">
  <img src="./_images-angular-forms-templatedriven/angular_logo_1.png" alt="Angular logo" title="Angular logo" width="200" />
</p>

1 - Angular Forms - Introduction
=====================
1.1. Introduction to forms in Angular
---------------------
Forms are the main, critical building block of any modern front-end Web/Mobile application. The real objective of forms is gathering data. While dealing with Forms one should create an efficient and effective workflow, User Experience (UX) and User Interface (UI) which guide users property.

#### Forms are an important and vital part of any business applications. Forms are used to:
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
Component Template Markup (Collect data) -> Class (Binds Data) -> Services (Send Data) -> Server

1.5. Angular Forms Types/approaches:
---------------------
1. **Template Driven Forms**: 
    - Heavily depends on the component template (manual HTML)
    - Most of the code written in component .html template file
    - Template-driven forms are useful for adding a simple form to an app, such as an email list signup form, etc.
2. **Reactive Model Driven Forms**: 
    - Heavily depends on the component class (dynamic)
    - Majority of code written in component .ts class file
    - Reactive forms are more robust, scalable, reusable, and testable
