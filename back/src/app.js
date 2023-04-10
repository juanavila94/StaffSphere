const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const verifyJWT= require('./middlewares/authMiddlewares/verifyJWT');
const usersRouter = require('./routes/usersRouter');
const informationRouter = require('./routes/informationRouter');
const companiesRouter = require('./routes/companiesRouter');
const reviewsRouter = require('./routes/reviewsRouter');
const positionsRouter = require('./routes/positionsRouter');
const areasRouter = require('./routes/areasRouter');
const rolesRouter = require('./routes/rolesRouter');
const protectedRouter = require('./routes/protectedRouter');
const sendGridRouter = require('./routes/sendGridRouter');
const eventsRouter = require('./routes/eventsRouter');



const server = express();

server.use(express.json());
server.use(cors());
server.use(cookieParser());
server.use(morgan('dev'));

server.use('/info', informationRouter);
server.use('/companies', companiesRouter);
server.use('/roles', rolesRouter)
server.use('/notifications', sendGridRouter);
server.use('/positions', positionsRouter);
server.use('/areas', areasRouter);
server.use('/users', usersRouter);
server.use('/reviews', reviewsRouter);
server.use('/events', eventsRouter);

server.use('/protected',verifyJWT, protectedRouter);

const { resolve } = require("path");
const env = require("dotenv").config({ path: '../.env' });

console.log('STATIC_DIR:', process.env.STATIC_DIR);
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01",
});

server.use(express.static(process.env.STATIC_DIR));

server.get("/", (req, res) => {
    const path = resolve(process.env.STATIC_DIR + "/index.html");
    res.sendFile(path);
  });

  server.get("/config", (req, res) => {
    res.send({
      publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    });
  });

  server.post("/create-payment-intent", async (req, res) => {
    console.log("por aca si pasa")
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        currency: "USD",
        amount: 200000,
        automatic_payment_methods: { enabled: true },
      });
  
      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (e) {
      return res.status(400).send({
        error: {
          message: e.message,
        },
      });
    }

    
  });
module.exports = server;