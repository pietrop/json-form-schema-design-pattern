# Json Form Schema (Design) Pattern

<!-- _One liner + link to confluence page_
_Screenshot of UI - optional_ -->
A deep dive into the Json Form Schema (Design) Pattern. See [storybook](https://pietropassarelli.net/json-form-schema-design-pattern) intro doc for more info. This is a learning resource.

## Setup

<!-- _stack - optional_
_How to build and run the code/app_ -->

Assuming you have your mac setup already with git, node and yarn.

Pull the repo        
```
git clone git@github.com:pietrop/json-form-schema-design-pattern.git
```
         
Go into the folder        
```
cd json-form-schema-design-pattern
```
         
Install dependencies        
```
yarn
```

## Usage

Run 

```
yarn storybook
```
to see your component's stories at `http://localhost:6006`


or 
```
yarn storybook-docs
```

## System Architecture

<!-- _High level overview of system architecture_ -->
For system architecture of the design pattern [See Storybook](https://pietropassarelli.net/json-form-schema-design-pattern)

<details><summary>System Architecture docs from the storybook boostrap that ues CRA see here</summary>

<!-- _High level overview of system architecture_ -->

See [Storybook Architecture mdx doc](./src/Architecture.stories.mdx)

The Project itself was initially scaffolded using [Storybook Tutorials](https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/)

### 🔎 What's inside?

> A quick look at the top-level files and directories included with this template.

    .
    ├── .storybook
    ├── node_modules
    ├── public
    ├── src
    ├── .gitignore
    ├── LICENSE
    ├── package.json
    ├── yarn.lock
    └── README.md

> 1.  **`.storybook`**: This directory contains Storybook's [configuration](https://storybook.js.org/docs/react/configure/overview) files.
> 
> 2.  **`node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages).
>
> 3.  **`public`**: This directory will contain the development and production build of the site.
>
> 4.  **`src`**: This directory will contain all of the code related to what you will see on your application.
>
> 5.  **`.gitignore`**: This file tells git which files it should not track or maintain during the development process of your project.
> 
> 6.  **`LICENSE`**: The template is licensed under the MIT licence.
> 
> 7.  **`package.json`**: Standard manifest file for Node.js projects, which typically includes project specific metadata (such as the project's name, the author among other information). It's based on this file that npm will know which packages are necessary to the project.
> 
> 8.  **`yarn.lock`**: This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(Do not change it manually).**
> 
> 9.  **`README.md`**: A text file containing useful reference information about the project.

### Learning Storybook

> 1. Read our introductory tutorial at [Learn Storybook](https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/).
> 2. Learn how to transform your component libraries into design systems in our [Design Systems for Developers](https://storybook.js.org/tutorials/design-systems-for-developers/) tutorial.
> 3. See our official documentation at [Storybook](https://storybook.js.org/).

</details>

## Documentation

[See Storybook](https://pietropassarelli.net/json-form-schema-design-pattern)

<!--

There's a [docs](./docs) folder in this repository.

[docs/notes](./docs/notes) contains dev draft notes on various aspects of the project. This would generally be converted either into ADRs or guides when ready.

[docs/adr](./docs/adr) contains [Architecture Decision Record](https://github.com/joelparkerhenderson/architecture_decision_record).

> An architectural decision record (ADR) is a document that captures an important architectural decision made along with its context and consequences.

We are using [this template for ADR](https://gist.github.com/iaincollins/92923cc2c309c2751aea6f1b34b31d95) -->

## Development env

 <!-- _How to run the development environment_ -->

- npm > `6.14.14`
- [Node 14](https://nodejs.org/docs/latest-v14.x/api/)

Node version is set in node version manager [`.nvmrc`](https://github.com/creationix/nvm#nvmrc)

```
nvm use
```


<!-- _Coding style convention ref optional, eg which linter to use_ -->

<!-- _Linting, github pre-push hook - optional_ -->

## Build

<!-- _How to run build_ -->

```
yarn build-storybook
```
or 
```
yarn build-storybook-docs
```
## Tests

<!-- _How to carry out tests_ -->

```
yarn test
```

## Deployment

<!-- _How to deploy the code/app into test/staging/production_ -->

To update the github pages storybook docs 

```
yarn deploy:ghpages
```
