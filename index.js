const app = require('express')();
const PORT = 8080; 

// fire up the server
app.listen(PORT, () => {
  console.log(`Server is alive on http://localhost:${PORT}`);
}); 

app.get('/tshirt', (req, res) => {
  res.status(200).send({
    name: 'Cool T-Shirt',
    size: 'M',
    color: 'Blue'
  });
}); 

app.post('/tshirt/:id', (req, res) => {
    const id = req.params.id;
    res.status(201).send({
        message: `T-Shirt with ID ${id} created successfully!`
    });
});