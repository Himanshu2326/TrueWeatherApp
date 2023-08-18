
// Dependencies :-
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 1000  // process.env.PORT it is used When we Host To a Real Port

const public = path.join(__dirname, '../public');


app.use(express.static(public))



// Live The Port:-
app.listen(port, () => {
    console.log(`Port :${port} is Live Now`)
})
