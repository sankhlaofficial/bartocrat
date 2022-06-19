import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "First name is required"],
    trim: true,
    text: true,
  },
  last_name: {
    type: String,
    required: [true, "Last name is required"],
    trim: true,
    text: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  address: {
    house_number: {
      type: String,
      required: [true, "House number is required"],
    },
    primary_address: {
      type: String,
      required: [true, "Primary address is required"],
    },
    secondary_address: {
      type: String,
    },
    pincode: {
      type: Number,
      required: [true, "Pin code is required"],
    },
  },

  mobile: {
    type: Number,
  },
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Products" }],
});

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, "Product name is required"],
    trim: true,
    text: true,
  },
  productPrice: {
    type: Number,
    required: [true, "Product price is required"],
  },
  productDescription: {
    type: String,
    required: [true, "Product description is required"],
  },

  productImage: {
    type: String,
    required: [true, "Product image is required"],
  },
  productCategory: {
    type: String,
    required: [true, "Product category is required"],
  },
  productSubCategory: {
    type: String,
    required: [true, "Product sub category is required"],
  },
  productQuantity: {
    type: Number,
    required: [true, "Product quantity is required"],
  },
  productBrand: {
    type: String,
    required: [true, "Product brand is required"],
  },
  seller: {
    name: {
      type: String,
      required: [true, "Seller name is required"],
      trim: true,
      text: true,
    },
    email: {
      type: String,
      required: [true, "Seller email is required"],
      trim: true,
      text: true,
    },
    mobile: {
      type: Number,
      required: [true, "Seller mobile is required"],
      trim: true,
    },
    address: {
      house_number: {
        type: String,
        required: [true, "Seller house number is required"],
      },
      primary_address: {
        type: String,
        required: [true, "Seller primary address is required"],
      },
      secondary_address: {
        type: String,
      },
      pincode: {
        type: Number,
        required: [true, "Seller pin code is required"],
      },
    },
  },
});

const Products = mongoose.model("Product", productSchema);
const Users = mongoose.model("User", userSchema);

export { Products, Users };
