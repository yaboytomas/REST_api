const app = require('express')();
const PORT = 8080; 

// fire up the server
app.listen(PORT, () => {
  console.log(`Server is alive on http://localhost:${PORT}`);
}); 