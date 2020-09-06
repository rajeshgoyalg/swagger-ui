const express = require('express')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
const port = process.env.PORT || 3000
app.use('/swagger.json', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
