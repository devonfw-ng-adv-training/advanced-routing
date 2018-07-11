## Getting started

### Install prerequisites

#### Git
Check if you have a Git client already installed:

```
git --version
```

If your OS can not recognize this command, install Git. For details please refer to [this page](http://git-scm.com).
When installing under Windows, please make sure you check the following option:

* Use git from Windows command prompt

#### Node.js

All examples have been implemented using [Node.js](https://nodejs.org/) `8.11.1`. 

It is highly recommended to install the [Node Version Manager](https://github.com/creationix/nvm) which manages multiple active
[Node.js](https://nodejs.org/) versions on your machine. The latest windows version of nvm can be downloaded [here](https://github.com/coreybutler/nvm-windows/releases/download/1.1.6/nvm-setup.zip).

Having the [Node Version Manager](https://github.com/creationix/nvm) installed, install Node.js:

```
nvm install 8.11.1
```

and set it to be used:

```
nvm use 8.11.1
```

#### npm

Having the Node.js installed you have also its package manager - [npm](https://www.npmjs.com/) installed. We have been using the `5.6.0` version of [npm](https://www.npmjs.com/).

Check your current [npm](https://www.npmjs.com/) version: 

```
npm --version
```

If it's less than `5.6.0`, then:

```
npm install -g npm@5.6.0
```

#### Angular CLI

Having [npm](https://www.npmjs.com/) installed you can install [Angular CLI](https://github.com/angular/angular-cli). We have been using the `1.7.4` version:

```
npm install -g @angular/cli@1.7.4
```

### Clone, install dependencies and run

Clone this repository and go to the `0-start` branch:
```
git clone https://github.com/devonfw-ng-adv-training/pwa.git -b 0-start
```

Install dependencies using [npm](https://www.npmjs.com/):
```
cd pwa
npm install
```
This may take several minutes...

Start the application:
```
npm start
```

This npm script starts the backend server on port `9000` and the frontend development server on port `4200`
which proxies all REST calls to the backend server. Go to [http://localhost:4200](http://localhost:4200)  
