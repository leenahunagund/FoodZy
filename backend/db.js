const mongoose = require('mongoose');

const mongoURI = 'url';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected successfully");

        const fetched_data = await mongoose.connection.db.collection("fooditems");
        const data = await fetched_data.find({}).toArray();

        const foodcategory = await mongoose.connection.db.collection("foodcategory");
        const CatData = await foodcategory.find({}).toArray();

        global.fooditems = data;
        global.foodcategory = CatData;

    } catch (err) {
        console.log('---', err);
    }
};

module.exports = mongoDB;
