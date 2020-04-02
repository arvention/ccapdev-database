/*
    This script creates the database
    and inserts 8 user details in the collection `profiles`
*/

// import module from `./models/db.js`
const db = require('./models/db.js');

/*
    name of the collection (table)
    to perform CRUD (Create, Read, Update, Delete) operations
*/
const collection = 'profiles';

/*
    calls the function createDatabase()
    defined in the `database` object in `./models/db.js`
*/
db.createDatabase();

/*
    creates an object
    containing first name, last name, username, and bio of a user
*/
var user = {
    fName: 'Ned',
    lName: 'Stark',
    username: 'LordHandStark',
    bio: `You think my life is some precious thing to me?
    That I would trade my honour for a few more years of...of what?!
    You grew up with actors; you learned their craft and you learnt it well.
    But I grew up with soldiers. I learned how to die a long time ago.`
};

/*
    calls the function insertOne()
    defined in the `database` object in `./models/db.js`
    stores the object `user` in the collection (table) `profiles`
*/
db.insertOne(collection, user);

/*
    creates an object
    containing first name, last name, username, and bio of a user
*/
var user = {
    fName: 'Bran',
    lName: 'Stark',
    username: 'BranTheBroken',
    bio: `It wasn't for the murder that the Gods cursed the Rat Cook,
    or for serving the King's son in a pie. He killed a guest beneath his roof.
    That's something the Gods can't forgive.`
};

/*
    calls the function insertOne()
    defined in the `database` object in `./models/db.js`
    stores the object `user` in the collection (table) `profiles`
*/
db.insertOne(collection, user);

/*
    creates an object
    containing first name, last name, username, and bio of a user
*/
var user = {
    fName: 'Jon',
    lName: 'Snow',
    username: 'TheWhiteWolf',
    bio: `I'm not going to swear an oath I can't uphold.
    When enough people make false promises, words stop meaning anything.
    Then there are no more answers, only better and better lies.`
};

/*
    calls the function insertOne()
    defined in the `database` object in `./models/db.js`
    stores the object `user` in the collection (table) `profiles`
*/
db.insertOne(collection, user);

/*
    creates an object
    containing first name, last name, username, and bio of a user
*/
var user = {
    fName: 'Sansa',
    lName: 'Stark',
    username: 'QueenInTheNorth',
    bio: `I'm A Slow Learner, It's True. But I Learn.`
};

/*
    calls the function insertOne()
    defined in the `database` object in `./models/db.js`
    stores the object `user` in the collection (table) `profiles`
*/
db.insertOne(collection, user);

/*
    creates an object
    containing first name, last name, username, and bio of a user
*/
var user = {
    fName: 'Arya',
    lName: 'Stark',
    username: 'FacelessMan',
    bio: `Not today.`
};

/*
    calls the function insertOne()
    defined in the `database` object in `./models/db.js`
    stores the object `user` in the collection (table) `profiles`
*/
db.insertOne(collection, user);

/*
    creates an object
    containing first name, last name, username, and bio of a user
*/
var user = {
    fName: 'Cersei',
    lName: 'Lannister',
    username: 'QueenMother',
    bio: `When you play the Game of Thrones you win, or you die.
    There is no middle ground.`
};

/*
    calls the function insertOne()
    defined in the `database` object in `./models/db.js`
    stores the object `user` in the collection (table) `profiles`
*/
db.insertOne(collection, user);

/*
    creates an object
    containing first name, last name, username, and bio of a user
*/
var user = {
    fName: 'Tyrion',
    lName: 'Lannister',
    username: 'TheHalfman',
    bio: `Never forget what you are. The rest of the world will not.
    Wear it like armor, and it can never be used to hurt you`
};

/*
    calls the function insertOne()
    defined in the `database` object in `./models/db.js`
    stores the object `user` in the collection (table) `profiles`
*/
db.insertOne(collection, user);

/*
    creates an object
    containing first name, last name, username, and bio of a user
*/
var user = {
    fName: 'Daenerys',
    lName: 'Targaryen',
    username: 'BreakerOfChains',
    bio: `Lannister, Targaryen, Baratheon, Stark, Tyrell –
    they’re all just spokes on a wheel. This one’s on top,
    then that one’s on top, and on and on it spins,
    crushing those on the ground. I’m not going to stop the wheel.
    I’m going to break the wheel.`
};

/*
    calls the function insertOne()
    defined in the `database` object in `./models/db.js`
    stores the object `user` in the collection (table) `profiles`
*/
db.insertOne(collection, user);

