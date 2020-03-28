# ccapdev-database
MongoDB Tutorial for CCAPDEV1920T2

This repository will help you integrate MongoDB to your web applications. This web application displays the profile of a certain user stored in the database based on their username provided as parameter in the URL requested by the client.

## Contents:

Each folder and file in this repository is properly documented. You may read the `README.md` file of each folder to understand its content. You may also read the inline comments of each file explaining the statements line-per-line.

- [controllers](https://github.com/arvention/ccapdev-database/tree/master/controllers) - This folder contains files which defines callback functions for client requests.
- [models](https://github.com/arvention/ccapdev-database/tree/master/models) - This folder contains files for database modeling and access.
- [public](https://github.com/arvention/ccapdev-database/tree/master/public) - This folder contains static assets such as css, js, and image files.
- [routes](https://github.com/arvention/ccapdev-database/tree/master/routes) - This folder contains files which describes the response of the server for each HTTP method request to a specific path in the server.
- [views](https://github.com/arvention/ccapdev-database/tree/master/views) - This folder contains all hbs files to be rendered when requested from the server.
- [add_data.js](https://github.com/arvention/ccapdev-database/blob/master/add_data.js) - This script creates the database and inserts 8 user details in the collection `profiles`.
- [index.js](https://github.com/arvention/ccapdev-database/blob/master/index.js) - The main entry point of the web application.

## To get started, follow the steps below to install MongoDB:
1. Download MongoDB Community Server from [here](https://www.mongodb.com/download-center/community).
2. Open the file.
3. Click Next.
4. Read and accept the terms in license agreement.
5. In the 'Choose Setup Type' screen, choose 'Complete'.
6. In the 'Server Configuration' screen, keep the default values. Click Next.
7. You may choose to install (or not) MongoDB Compass. This is similar to MySQL workbench.
8. Click Install.
9. Wait for installation to finish.
10. Once complete, you have successfully completed the installation of MongoDB.

## Follow the steps below to set-up and study this repository:
1. Clone the repository either using the command below (Note: git should be installed in your system for this to work), or by downloading the contents of the repository [here](https://github.com/arvention/ccapdev-database/archive/master.zip).
```
git clone https://github.com/arvention/ccapdev-database
```
2. Open Command Prompt
3. Navigate to the project folder - the folder containing the contents of the cloned or downloaded repository.
4. Run the command `npm install` to initialize and install all necessary modules used in the project.
5. Run the command `node add_data.js`. The javascript file [`add_data.js`](https://github.com/arvention/ccapdev-database/blob/master/add_data.js) contains statements which fills the database with initial data. This script fills the collection `profiles` with the following documents:

| fName    | lName     | username        | bio                                                                                                                                                                                                                                                          |
|----------|-----------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Ned      | Stark     | LordHandStark   | You think my life is some precious thing to me? That I would trade my honour for a few more years of...of what?! You grew up with actors; you learned their craft and you learnt it well. But I grew up with soldiers. I learned how to die a long time ago. |
| Bran     | Stark     | BranTheBroken   | It wasn't for the murder that the Gods cursed the Rat Cook, or for serving the King's son in a pie. He killed a guest beneath his roof. That's something the Gods can't forgive.                                                                             |
| Jon      | Snow      | TheWhiteWolf    | I'm not going to swear an oath I can't uphold. When enough people make false promises, words stop meaning anything. Then there are no more answers, only better and better lies.                                                                             |
| Sansa    | Stark     | QueenInTheNorth | I'm A Slow Learner, It's True. But I Learn.                                                                                                                                                                                                                  |
| Arya     | Stark     | FacelessMan     | Not today.                                                                                                                                                                                                                                                   |
| Cersei   | Lannister | QueenMother     | When you play the Game of Thrones you win, or you die. There is no middle ground.                                                                                                                                                                            |
| Tyrion   | Lannister | TheHalfman      | Never forget what you are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you                                                                                                                                          |
| Daenerys | Targaryen | BreakerOfChains | Lannister, Targaryen, Baratheon, Stark, Tyrell – they’re all just spokes on a wheel. This one’s on top, then that one’s on top, and on and on it spins, crushing those on the ground. I’m not going to stop the wheel. I’m going to break the wheel.         |

Upon running the command, your Command Prompt should display the following statements:
```
Database created!
1 document inserted
1 document inserted
1 document inserted
1 document inserted
1 document inserted
1 document inserted
1 document inserted
1 document inserted
```

Feel free to open the file and read through the in-line comments to understand its content. This file uses the methods in the file [`models/db.js`](https://github.com/arvention/ccapdev-database/blob/master/models/db.js) to perform CRUD (Create, Read, Update, Delete) operations on the database.

Upon understanding the code, you may now add more statements to add more documents in the collection `profiles`.

6. Since we have properly initialized our database with documents, we may now run our server. To do this, we run the command `node index.js`. Upon running the command, your Command Prompt should display the following statement:
```
app listening at port 9090
```

7. Based on the description above, this web application displays the profile of a certain user stored in the database based on their username provided as parameter in the URL requested by the client. To do this, we have to study the following files:

- We need to have an `hbs` file which will be rendered with details from the database. Go to [`views/profile.hbs`](https://github.com/arvention/ccapdev-database/blob/master/views/profile.hbs) and study the needed values to be rendered in the profile page.
- Check [`models\db.js`](https://github.com/arvention/ccapdev-database/blob/master/models/db.js) which contains necessary database functions for CRUD (Create, Read, Update, Delete) operations. These methods were discussed in the video lecture. You may read through the inline comments in the [`file`](https://github.com/arvention/ccapdev-database/blob/master/models/db.js) to review.
- Check [`routes\routes.js`](https://github.com/arvention/ccapdev-database/blob/master/routes/routes.js) which connects a specific callback function defined in [`controllers/controller.js`](https://github.com/arvention/ccapdev-database/blob/master/controllers/controller.js) to its corresponding path and HTTP method.
- Study the callback functions defined in [`controllers/controller.js`](https://github.com/arvention/ccapdev-database/blob/master/controllers/controller.js). These functions are called when a client requests for a specific defined path in our server.

All of these mentioned files are properly documented so you might want to open them to understand their content more.

8. Now, upon reading up on the inline documentation of the code, how do we display a certain profile from the database? We have to match the path `/:username`, where `username` is the username of a document in the collection `profiles`. So to display the profile of Ned Stark, we have to open a client (in this case, a browser), the go to
```
http://localhost:9090/LordHandStark
```

It should display a web page like below:
![alt text](https://github.com/arvention/ccapdev-database/blob/master/profile-LordHandStark.png "Ned Stark | Profile")

9. Upon understanding the whole web application, try now to access other profiles using their usernames :sunglasses:
