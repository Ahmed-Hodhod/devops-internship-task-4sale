// if (process.env.NODE_ENV !== "production") {
//     require("dotenv").config();
//   }
  
  const express = require("express");
  const app = express();

  const port = process.env.PORT || 80;

  const axios = require('axios');

  app.listen(port,  () => {
    console.log("Server is up on port " + port);

  });

  app.get("/", async(req, res) => {

    try {
        const options = {
            method: 'GET',
            url: 'https://joke110.p.rapidapi.com/random_joke',
            headers: {
                'X-RapidAPI-Key': '786266adc5msheb6fad65e8189c3p1eabcfjsn1d82cf307463',
                'X-RapidAPI-Host': 'joke110.p.rapidapi.com'
            }
            };

    const response = await axios.request(options);
    res.send( `${response.data.setup} \n  ${response.data.punchline}` )
    } catch (error) {
    res.status(400).send(error);
    }
    
  });

  app.get("/quote", async(req, res) => {
    const options = {
        method: 'GET',
        url: 'https://quotes15.p.rapidapi.com/quotes/random/',
        headers: {
          'X-RapidAPI-Key': '786266adc5msheb6fad65e8189c3p1eabcfjsn1d82cf307463',
          'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
        }
      };
      
    try {
        const response = await axios.request(options);
        res.send(response.data.originator.name + " says: " + response.data.content);
        } catch (error) {
        res.status(400).send(error);
        }
    
  });

  const main = async () => {
  };
  
  main();
