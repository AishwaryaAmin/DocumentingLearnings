const mongoose = require("mongoose");

main()
  .then(() => console.log("connect successful"))
  .catch((err) => console.log(err));

async function main() {
  mongoose.connect("mongodb://127.0.0.1:27017/document");
}

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

const order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

//Functions

const findCustomer = async () => {
  let result = await Customer.find({}).populate("orders");
  console.log(result[0]);
};
//Add the customers
const addCust = (async = () => {
    let newCust = new Customer({
        name: "Aish",
    });
});
//Add the function
