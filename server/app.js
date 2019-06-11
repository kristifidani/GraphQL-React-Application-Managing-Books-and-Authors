const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors'); //package for cross origin communication

const app = express();

//allow cross origin calls
app.use(cors());

// connect to mlab database
mongoose.connect(
'mongodb://kristi123:kristi123@ds119548.mlab.com:19548/graphql-react-netninja-tut',
{ useNewUrlParser: true }
)
//Check connection
let dbc = mongoose.connection;
dbc.once("open", () => {
  console.log("Connected to MongoDB");
});
//Check for DB errors
dbc.on("error", err => {
  console.log(err);
});

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});