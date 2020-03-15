const http = require('http');
const app = require('./app');
const mongoose = require('mongoose');

const URI = "mongodb+srv://markande:garav@1998@shoping-cart-bp5hh.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async() => {
    await mongoose.connect(URI , {
        useNewUrlParser: true ,
        useUnifiedTopology: true 
    });
}

connectDB();
mongoose.Promise = global.Promise;
const port = 3000;

const server = http.createServer(app);

server.listen(port);