DECENTRABET
Application de paris en ligne decentralisée.

To-do list
|x| Créer un github pour le projet
|x| Commenter le smartContrat en natspec

|x| Corriger les failes de sécurité.

|x| Optimisation du contrat.

   Realiser le front en React
   
   Créer les composants de l'administrateur
   
   Créer les composants des parieurs
   
   Afficher les compostant des parieurs
   
   Afficher les compostant de l'administreur
   
 Travaille l'esthétique du front
 
 Faire une video de presentation de l'applicaiton de 5 mins sur ganache
 
 Deployer l'application sur un réseau de test
 
 Faire un readme contenenant un lien vers l'application deploiyé et la video
 
Installation
First ensure you are in an empty directory.

# Install depedencies
$ cd truffle
$ npm install
$ cd ..
Start ganach.

# lanch ganache in a new terminal
$ ganache
Start the react dev server.

$ cd client
$ npm install
$ npm start
From there, follow the instructions on the hosted React app. It will walk you through using Truffle and Ganache to deploy the Voting contract, making calls to it, and sending transactions to change the contract's state.

Video


le lien vers vercel













# React Truffle Box

This box comes with everything you need to start using Truffle to write, compile, test, and deploy smart contracts, and interact with them from a React app.

## Installation

First ensure you are in an empty directory.

Run the `unbox` command using 1 of 2 ways.

```sh
# Install Truffle globally and run `truffle unbox`
$ npm install -g truffle
$ truffle unbox react
```

```sh
# Alternatively, run `truffle unbox` via npx
$ npx truffle unbox react
```

Start the react dev server.

```sh
$ cd client
$ npm start
```

From there, follow the instructions on the hosted React app. It will walk you through using Truffle and Ganache to deploy the `SimpleStorage` contract, making calls to it, and sending transactions to change the contract's state.

## FAQ

- __How do I use this with Ganache (or any other network)?__

  The Truffle project is set to deploy to Ganache by default. If you'd like to change this, it's as easy as modifying the Truffle config file! Check out [our documentation on adding network configurations](https://trufflesuite.com/docs/truffle/reference/configuration/#networks). From there, you can run `truffle migrate` pointed to another network, restart the React dev server, and see the change take place.

- __Where can I find more resources?__

  This Box is a sweet combo of [Truffle](https://trufflesuite.com) and [Webpack](https://webpack.js.org). Either one would be a great place to start!
