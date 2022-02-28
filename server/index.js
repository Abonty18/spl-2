
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";
// import adminRouter from "./routes/admin.js";

const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
// app.use(adminJs.options.rootPath, router)
// app.listen(8080, () => console.log('AdminJS is under localhost:8080/admin'))

app.use('/posts', postRoutes);
app.use("/user", userRouter);
// app.use("/admin", adminRouter);

const CONNECTION_URL = 'mongodb://user8:user8@hobbyists-blog-shard-00-00.32zvf.mongodb.net:27017,hobbyists-blog-shard-00-01.32zvf.mongodb.net:27017,hobbyists-blog-shard-00-02.32zvf.mongodb.net:27017/hobbyists-blog?ssl=true&replicaSet=atlas-62s45h-shard-0&authSource=admin&retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);