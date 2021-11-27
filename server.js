const express = require('express');
const app = express();


app.get('/api/:key_secret', (req, res)=>{

    const key = req.params.key_secret

    const data = {
        weather: 'Good Day',
        temp: 26,
        desc: 'Sunny weather'
    }
    res.json(data)

})


app.post('/', (req, res)=>{
    console.log(req);
})

app.listen(3000, ()=>console.log('server started on port 3000')) 