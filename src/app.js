import express from "express";
import bodyParser from "body-parser";
import productRoutes from "./routes/product.js";
import "dotenv/config";
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import fs from "fs"

const rawdata =  fs.readFileSync("./src/swagger.json")
const swaggerOptions =JSON.parse(rawdata)

const swaggerSpec = swaggerJsdoc(swaggerOptions);

const app = express();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", productRoutes);

app.listen(process.env.PORT, () => {
  console.log(`server on port ${process.env.PORT}`);
});
