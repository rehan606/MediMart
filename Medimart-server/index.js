const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); 
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
const port = process.env.PORT || 5000

// Middlewire
// app.use(cors())
// app.use(cors({ origin: 'https://medimart-cbe0f.web.app' }));
app.use(cors({
  origin: ['http://localhost:5173', ],
  credentials: true
}));


// app.use(cors({
//   origin: 'https://medimart-cbe0f.web.app',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   credentials: true
// }));

// app.use(cors({
//   origin: [ 'https://medimart-cbe0f.web.app'],
//   credentials: true,
//   methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE']
// }));

app.use(express.json())
// 'http://localhost:5173',




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jwii9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");




    const userCollection = client.db('mediMart').collection('users')
    const medicineCollection = client.db('mediMart').collection('medicine')
    const cartCollection = client.db('mediMart').collection('carts')
    const paymentCollection = client.db('mediMart').collection('payments')


    // JWT Token
    app.post('/jwt', async (req, res)=>{
      const user = req.body ;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1h'})
      res.send({token});
    })

    // jwt middleware
    const verifyToken = (req, res, next) =>{
      console.log('inside verify token', req.headers.authorization)
      if(!req.headers.authorization) {
        return res.status(401).send({message: 'forbidden access' });
      }
      const token = req.headers.authorization.split(' ')[1];
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) =>{
        if(err){
          return res.status(401).send({message: 'forbidden access'})
        }
        req.decoded = decoded 
        next()
      })
      
    }

    // admin middle ware
    const verifyAdmin = async(req, res, next)=>{
      const email = req.decoded.email;
      const query = {email: email};
      const user = await userCollection.findOne(query)
      const isAdmin = user?.role === 'admin';
      if(!isAdmin){
        return res.status(403).send({message: 'forbidden access'})
      }
      next();
    }
  

    // Display user in Ui from database
    app.get('/users', verifyToken, verifyAdmin, async(req, res)=>{
      const result = await userCollection.find().toArray()
      res.send(result)
    })


    app.post('/users', async(req,res)=>{
        const user = req.body 
        const query = {email: user.email}
        const existingUser = await userCollection.findOne(query)
        if(existingUser){
          return res.send({message: 'User already Exist', insertedId: null})
        }
        const result = await userCollection.insertOne(user)
        res.send(result)
    })

    
    // Delete User
    app.delete('/users/:id', verifyToken, verifyAdmin, async (req, res) =>{
      const id = req.params.id 
      const query = {_id: new ObjectId(id)}
      const result = await userCollection.deleteOne(query)
      res.send(result)
    })

    //make admin 
    app.patch('/users/admin/:id', verifyToken, verifyAdmin, async(req, res)=> {
      const id = req.params.id
      const filter = {_id: new ObjectId(id)}
      const updatedDoc = {
        $set: {
          role: 'admin'
        }
      }
      const result = await userCollection.updateOne(filter, updatedDoc)
      res.send(result)
    })

    // Admin

    app.get('/users/admin/:email', verifyToken, async(req, res)=>{
      const email = req.params.email;
      if(email !== req.decoded.email){
        return res.status(403).send({message: 'Unauthorized access'})
      }
      const query = {email: email}
      const user = await userCollection.findOne(query)
      try {
        const query = { email: email };
        const user = await userCollection.findOne(query);
        
        if (!user) {
          return res.status(404).send({ message: 'User not found' });
        }
        
        // Determine the role of the user
        const role = user.role || 'user'; // Default to 'user' if no role is defined
        const isAdmin = role === 'admin';
        const isSeller = role === 'seller';
    
        // Send role-based response
        res.send({
          role,
          isAdmin,
          isSeller,
          isUser: role === 'user' // Explicitly mention user role check
        });
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Server error' });
      }
    })

    // update admin role 
    app.patch('/users/role/:id', verifyToken , verifyAdmin , async (req, res) => {
      const id = req.params.id;
      const { role } = req.body;
  
      if (!role) {
          return res.status(400).send({ error: "Role is required" });
      }
  
      try {
          const filter = { _id: new ObjectId(id) };
          const updatedDoc = {
              $set: { role },
          };
          const result = await userCollection.updateOne(filter, updatedDoc);
          if (result.matchedCount === 0) {
              return res.status(404).send({ message: "User not found" });
          }
          res.send(result);
      } catch (error) {
          console.error("Error updating role:", error);
          res.status(500).send({ error: "Failed to update role" });
      }
    });
  
  
    // add medicine 
    app.post('/medicine', verifyToken, async(req, res)=>{
      const medicine = req.body 
      const result = await medicineCollection.insertOne(medicine)
      res.send(result)
    })

    // Display medicine in shop page
    // app.get('/medicine', async(req, res)=>{
    //   const result = await medicineCollection.find().toArray()
    //   res.send(result)
    // })

    app.get('/medicine', async(req, res)=>{
      console.log("Getting all medicine")
      const result = await medicineCollection.find().toArray()
      res.send(result)
    })


    // Get medicine by id 
    app.get('/medicine/:id', async(req, res)=>{
      const id  = req.params.id
      const query = { _id: new ObjectId(id) }
      const result = await medicineCollection.findOne(query)
      res.send(result)
    })

    // Add to cart 
    app.post('/carts',  async(req, res)=>{
      const cartItems = req.body
      const result = await cartCollection.insertOne(cartItems)
      res.send(result)
    })

    // Get cart data in
    app.get('/carts', async(req, res)=>{
      const email = req.query.email;
      const query = {email: email}
      const result = await cartCollection.find(query).toArray()
      res.send(result)
    })

    // delete cart item
    app.delete('/carts/:id', async(req, res)=>{
      const id = req.params.id
      const query = { _id: new ObjectId(id) }
      const result = await cartCollection.deleteOne(query)
      res.send(result)
    })

    

    //=========== Payment Method ==========

    // Create a PaymentIntent
    app.post('/create-payment-intent', async(req, res)=>{
      const { price } = req.body
      const amount = parseInt(price * 100)

      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: 'usd',
        payment_method_types: ['card']
      });

      res.send({
        clientSecret: paymentIntent.client_secret
      })
    })


    // Save Payment in Database
    app.post('/payments', async(req, res) =>{
      const payment = req.body
      const paymentResult = await paymentCollection.insertOne(payment)
      const query = { _id: {
        $in: payment.cartIds.map(id => new ObjectId(id))
      }}
      const deleteCart = await cartCollection.deleteMany(query);
      res.send({paymentResult, deleteCart})
    })

    // Display payment history in Ui 
    app.get('/payments/:email', verifyToken,  async(req, res) => {
      const query = {email: req.params.email}
      if(req.params.email !== req.decoded.email){
        return res.status(403).send({message: 'forbidden access'});
      }
      const result = await paymentCollection.find(query).toArray()
      res.send(result)
    })

    // Discount item
    app.get('/discount', async(req, res)=>{
      const result = await medicineCollection.find({discount: {$gt: 0}}).toArray()
      res.send(result)
    })

    // Payment Management 
    app.get('/payments', verifyToken, verifyAdmin, async(req, res)=>{
      const result = await paymentCollection.find().toArray()
      res.send(result)
    })

    // Display category
    app.get('/category', async(req, res)=>{
      
      const result = await medicineCollection.find().toArray()
      res.send(result)
    })

    // seller all medicine 
    app.get('/medicine/:email', async(req, res)=>{
      const email = req.params.email
      const query = {email: email}
      const result = await medicineCollection.find(query).toArray()
      res.send(result)
    })

    // API to fetch medicine by category
    app.get('/medicine/category/:category', async (req, res) => {
      const category = req.params.category; 
      try {
          
          const query = { category: category };
          const result = await medicineCollection.find(query).toArray();
          res.send(result); 
      } catch (error) {
          console.error("Error fetching category data: ", error);
          res.status(500).send({ error: "Failed to fetch data" });
      }
    });


    // Dashboard chart 

    // Get count of users by role
    // app.get('/user-role-count',  async (req, res) => {
    //   try {
    //     const roles = ['admin', 'seller', 'user'];
    //     const counts = await Promise.all(
    //       roles.map(async (role) => {
    //         const count = await userCollection.countDocuments({ role });
    //         return { role, count };
    //       })
    //     );
    //     res.send(counts);
    //   } catch (error) {
    //     console.error('User role count error:', error);
    //     res.status(500).send({ error: 'Failed to fetch user role counts' });
    //   }
    // });

    // Top selling medicines by quantity
    // app.get('/dashboard/sales-overview',  verifyAdmin, async (req, res) => {
    //   try {
    //     const pipeline = [
    //       { $unwind: '$items' },
    //       {
    //         $group: {
    //           _id: '$items.medicineId',
    //           name: { $first: '$items.name' },
    //           totalQuantity: { $sum: '$items.quantity' },
    //           totalSales: { $sum: '$items.price' },
    //         }
    //       },
    //       { $sort: { totalQuantity: -1 } },
    //       { $limit: 10 }
    //     ];
    //     const result = await paymentCollection.aggregate(pipeline).toArray();
    //     res.send(result);
    //   } catch (error) {
    //     console.error('Sales overview error:', error);
    //     res.status(500).send({ error: 'Failed to fetch sales overview' });
    //   }
    // });

    // Monthly order count
    // app.get('/dashboard/monthly-orders',  verifyAdmin, async (req, res) => {
    //   try {
    //     const pipeline = [
    //       {
    //         $group: {
    //           _id: {
    //             year: { $year: { $toDate: '$date' } },
    //             month: { $month: { $toDate: '$date' } },
    //           },
    //           totalOrders: { $sum: 1 }
    //         }
    //       },
    //       { $sort: { '_id.year': 1, '_id.month': 1 } }
    //     ];
    //     const result = await paymentCollection.aggregate(pipeline).toArray();
    //     res.send(result);
    //   } catch (error) {
    //     console.error('Monthly order error:', error);
    //     res.status(500).send({ error: 'Failed to fetch monthly orders' });
    //   }
    // });

    // Monthly revenue
    // app.get('/dashboard/monthly-revenue',  verifyAdmin, async (req, res) => {
    //   try {
    //     const pipeline = [
    //       {
    //         $group: {
    //           _id: {
    //             year: { $year: { $toDate: '$date' } },
    //             month: { $month: { $toDate: '$date' } },
    //           },
    //           totalRevenue: { $sum: '$price' }
    //         }
    //       },
    //       { $sort: { '_id.year': 1, '_id.month': 1 } }
    //     ];
    //     const result = await paymentCollection.aggregate(pipeline).toArray();
    //     res.send(result);
    //   } catch (error) {
    //     console.error('Monthly revenue error:', error);
    //     res.status(500).send({ error: 'Failed to fetch monthly revenue' });
    //   }
    // });













    

  
  
  

  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) =>{
    res.send('Welcome to MediMart server')
    
})

app.listen(port, () => {
    console.log(`MediMart Server is Running by Port ${port}`);
    
})