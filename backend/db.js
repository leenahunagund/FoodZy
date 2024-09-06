const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://foodDelivery:leens15@cluster0.c7fc3fd.mongodb.net/foodDeliveryMERN?retryWrites=true&w=majority&appName=Cluster0';

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
