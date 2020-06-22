# Topic 3

### NPM Official Website: [NPMJS](www.npmjs.com)

### Youtube Resources: [NPM](https://youtu.be/jHDhaSSKmB0)

## Basics of NPM and NPM Pacages

### What is NPM?

**NPM** is a package manager for Node.js packages, or modules if you like. [npmjs](www.npmjs.com) hosts thousands of free packages to download and use.

The NPM program is installed on your computer when you install Node.js

### What is a Package?

A package in Node.js contains all the files you need for a module.
Modules are JavaScript libraries you can include in your project.

### Downloading a Package

Open the command line interface and tell NPM to download the package you want.

```javascript
npm install package_name
```

### Using a Package

Once the package is installed, it is ready to use.

Include the package-name the same way you include any other module:

```javascript
var package-name = require('package-name');
```

### Some useful and famous packages

- express
- axios
- body-parser
- lodash
- mongoose
- nodemailer
- passport
- multer
- dotenv
- nodemon, etc...

## Things to try

### Try npm init (In a separate folder)

**npm init** can be used to set up a new or existing npm package.
this creates a **package.json** file where all your data like installed packages, custom scripts, versions, etc.

```javascript
npm init
```

After npm init it asks for various things just press enter till it isn't done.
Now a **pacakge.json** is created inside your folder.

for e.g. Now I want to download a package called "mongoose" so I do

```javascript
npm install mongoose
// or
npm i mongoose
```

Now you have downloaded and installed your first package!
NPM creates a folder named **node_modules**, where the package will be placed. All packages you install in the future will be placed in this folder. Also **mongoose** is added inside **package.json** you can check.
