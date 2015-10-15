```
     ___       ___           
 /\   |  |__| |__  |\ |  /\  
/~~\  |  |  | |___ | \| /~~\

```

Slush-Athena
============

[![NPM](https://nodei.co/npm/slush-athena.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.com/package/slush-athena)

[![npm version](https://badge.fury.io/js/slush-athena.svg)](http://badge.fury.io/js/slush-athena)
[![Dependency Status](https://david-dm.org/reaganthomas/slush-athena.svg)](https://david-dm.org/reaganthomas/slush-athena)

[![Pull Requests Status](http://issuestats.com/github/reaganthomas/slush-athena/badge/pr?style=flat)](http://issuestats.com/github/reaganthomas/slush-athena/badge/pr?style=flat)
[![Issues Status](http://issuestats.com/github/reaganthomas/slush-athena/badge/issue?style=flat)](http://issuestats.com/github/reaganthomas/slush-athena/badge/issue?style=flat)

A Slush generator for APIs

* [Slush-Athena](#slush-athena)
  * [Installation](#installation)
  * [Usage](#usage)
    * [Scaffold API](#scaffold)
    * [Scaffold Controller](#controller)
    * [Scaffold Model](#model)

<h2 id="installation">Installation</h2>

To use this generator you must have `gulp` and `slush` installed:

```
$ npm install -g gulp slush
```

Then install the generator:

```
$ npm install -g slush-athena
```

<h2 id="usage">Usage</h2>
<h3 id="scaffold">Scaffold API</h3>

With the generator installed make a new project directory:

```
$ mdkir new_project
$ cd new_project
```

Scaffold your API:

```
$ slush athena
```

This will generate the following files:

```
.
├── server
│   └── api
│       └── index.js
│   └── config
│       └── environment              # Environment configuration
│           ├── development.js
│           ├── index.js
│           ├── production.js
│           ├── staging.js
│           └── test.js
│       └── seed                     # Seed data
│           └── .gitkeep
│       └── express.js               # Express configuration
│   └── lib
│       └── enums                    # Static objects
│           ├── errors.js
│           ├── index.js
│       └── errorHandler             # Basic error handling
│           ├── errorHandler.spec.js
│           ├── index.js
│           ├── invalidPayload.js
│           ├── notFound.js
│           └── serverError.js
│   ├── app.js                       # Server bootstrap, config, and startup
│   └── routes.js                    # Routing
├── tasks                            # Modularized gulp tasks
│   ├── apidoc.js
│   ├── clean.js
│   ├── lint.js
│   ├── move.js
│   └── test.js
├── .athenarc                        # Athena generator configuration
├── .gitignore
├── .jshintrc
├── README.md
├── build-config.js                  # Build configuration for gulp
├── gulpfile.js
├── package.json
└── server.js                        # For simple app execution
```

<h3 id="controller">Scaffold Controller</h3>

```
$ slush athena:controller
```

Follow the prompts, and be sure to use a capitalcase name.

This will generate the following files:

```
.
├── server
│   ├── api
│       ├── <controller-name>
│           ├── index.js
│           ├── <controller-name>.controller.js
│           └── <controller-name>.controller.spec.js
```

<h3 id="model">Scaffold Model</h3>

```
$ slush athena:model
```

Follow the prompts, and be sure to use a capitalcase name.

This will generate the following files:

```
.
├── server
│   ├── api
│       ├── <model-name>
│           ├── <model-name>.model.js
│           └── <model-name>.model.spec.js
```
