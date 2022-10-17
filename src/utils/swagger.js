const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const options = require("./swagger.schema");
  
const specs = swaggerJsdoc(options);
module.exports = (app) => {
    app.use(
        "/api/doc",
        swaggerUi.serve,
        swaggerUi.setup(specs)
    );
}