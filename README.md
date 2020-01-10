## Table of Contents

* [About the Project](#about)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Acknowledgements](#acknowledgments)

# ReferGG
![refergg](https://i.imgur.com/SO9LXP5.png)

## About
Please note that this project is still **early** in development. ReferGG is targeted towards gamers and acts as a keychain to store accounts and platforms you use to easily refer to others through a simple url, refer.gg. The goal was to remove the hassle of having to remember different aliases and instead allow the user to store everything under one place to share to others. 

View the site live [here](http://refer.gg/).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
If you haven't already installed node head over to:

```
https://nodejs.org/en/download/
```

### Installation

1. Clone the respository

```
git clone https://github.com/alexbarksdale/Refer.git
```

2. Make sure you're in the correct directory

3. You now need to install all of the necessary packages for the project, type the following in your terminal in both main and api directories:

```
npm install
```

----------------------------------------------------------------
## IMPORTANT
You will need to use a database to get this project running on your machine. Feel free to use any database you want. The instructions below only apply to those using MongoDB.

### MongoDB Atlas Setup
1. Before setting up your Atlas, make sure you installed dotenv with npm. You can find it [here](https://www.npmjs.com/package/dotenv).
2. Create **.env** file inside the **api** the folder and make sure to add it your **.gitignore** file before pushing to GitHub. You can also see **example.env** in the **api** folder as a reference.
3. Create an account [here](https://www.mongodb.com/cloud/atlas).
4. Once you're signed in you should be brought to the dashboard.
5. Build a new cluster for your database.
6. Locate the **'connect'** button, you should be prompted with a **'Connect to (ClusterName)'**.
7. Click **'Connect Your Application'** and select **'Node.js'** as the driver and the version of your node.js.
8. Copy the **'Connection String Only'** and it should look something like:

```
mongodb+srv://(YOUR_USERNAME):<password>@(CLUSTER_NAME)-(LOTS_OF_TEXT)
```

9. Go to your **.env** file and type the following:

```
MONGO_URI=YOUR_MONGODB_LINK
```

----------------------------------------------------------------
## COMPLETE 'IMPORTANT' before running!

3. If you aren't connecting Steam and Battle.net you can ignore this step. However if you using Steam and Battle.net you can learn more about the Steam and Battle.net api here: 
	- [Steam](https://steamcommunity.com/dev)
	- [Battle.net](https://develop.battle.net/)

4. Change directories to the api folder and run the backend:

```
npm run dev
```

5. Change directories to the main folder and run react:

```
npm start
```

## Built With

* [MongoDB](https://www.mongodb.com/)
* [Express](https://expressjs.com/)
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Node.js](https://nodejs.org/en/)
* [Axios](https://www.npmjs.com/package/axios)
* [Passport](http://www.passportjs.org/)
* [Mongooose](https://mongoosejs.com)


## Acknowledgments

* Received help from my friends: Daman Sahi, Nirmal Vettiankal, and Noah Krause.
