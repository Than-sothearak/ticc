import mongoose, { Schema, model, models } from "mongoose";

const ContentSchema = new Schema (
    {
  apply_link: {
    src: String,
    enabled: Boolean,
  },

  slide_show: 
     {
       images: [{ type: String, required: true }],
  },

  discountSection: {
    enabled: Boolean,
    items: [
      {
        productId:{ type: mongoose.Types.ObjectId, ref: "Product" },
        discountValue: Number,
        startAt: Date,
        endAt: Date,
      }
    ]
  },

  specialPromotion: {
    title: String,
    description: String,
    banner: String,
    deadline: Date,
    promoCode: String,
    enabled: Boolean,
  },
}

)

export const  Content = models.Content || model("Content", ContentSchema);