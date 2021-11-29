const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));


// app.get('/api/:key_secret', (req, res)=>{
    

//     const data = {
//         weather: 'Good Day',
//         temp: 26,
//         desc: 'Sunny weather'
//     }
//     res.json(data)

// })

//WHAT IS req and res
// const req = {
//     params: {},
//     body: {}
// }

// const res = {
//     send:{},
//     render:{}
// }
//WHAT IS req and res

const data = {
    key_secret: [1,2,3,4]
}

const user = {
    email: [],
    password: []
}

app.post('/login', (req, res)=>{
    //loging logic
})

app.get('/api/:key_secret', (req, res)=>{

    const keyByUser = req.params.key_secret
    const validData = {
                weather: 'Good Day',
                temp: 26,
                desc: 'Sunny weather'
    }    

    if(keyByUser == data.key_secret[0]){
        res.json(validData)
    } else {
        res.json({
            status: 'API is invalid'
        })
    }

    console.log(req.params);
})


app.listen(3000, ()=>console.log('server started on port 3000')) 