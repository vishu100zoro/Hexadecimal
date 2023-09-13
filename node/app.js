const express=require('express')
const axios=require('axios')
// const cors = require('cors')
const app= express();

app.use(express.json());
// app.use(cors({
//     origin:["http://localhost:3000"],
//     method:["GET","POST","PUT","DELETE"],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     credentials:true,
// }))

const apilink="https://jsonplaceholder.typicode.com/users";
app.get('/api/data',async(req,res)=>{
    try{

      console.log("woking 1");
      const response=await axios.get(apilink);
      const data=response.data;
      
      console.log("woking 2");
        res.status(200).json(data);
        console.log(data);
        // console.log(response);

    }
    catch(error){
        console.error('error fetching dta:',error);
        res.status(500).json({error:'Error fetching data'});


    }
})
const port=4040;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});
