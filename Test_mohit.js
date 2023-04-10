const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const port = 5005;
app.use(bodyParser.json());

console.log(path.join(__dirname));
app.post('/form',(req,res) => {
    // res.json(req.body);
    let data = JSON.stringify({"data": [req.body]});
    postRec(data); 
})
function postRec(data){
    var accesstoken ="Your API Access Token";
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://www.zohoapis.in/crm/v2.1/Leads',
      headers: { 
        'Authorization': 'Zoho-oauthtoken '+accesstoken, 
        'Content-Type': 'application/json'
    },
      data : data
    };
  
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  }
app.get("/",(req,res)=>
{
    res.sendFile(path.join(__dirname,'form.html'));
   
})

app.listen(port,()=>{
    console.log(`Port is listen at ${port}`);
})
