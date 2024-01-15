import express from 'express';

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/',(req,res) => {
    return res.status(200).json({
        message: 'Hello from Full-CICD-Project-DEV using AWS, Docker, Jenkins, GitHub'
    })
})

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running via port ${port}`);

})