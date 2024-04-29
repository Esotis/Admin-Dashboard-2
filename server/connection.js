import dotenv from "dotenv";
import mongoose from "mongoose";

// data imports

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // // Only Add Mock datas one time
    // User.insertMany(dataUser);
    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat);
    // // Transaction.insertMany(dataTransaction);
    // // OverallStat.insertMany(dataOverallStat);
    // AffiliateStat.insertMany(dataAffiliateStat);
    console.log("Mongo Atlas successfully connected");
  })
  .catch((error) => console.log(error));
