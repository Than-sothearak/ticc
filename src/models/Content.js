import mongoose, { Schema, model, models } from "mongoose";

const ContentSchema = new Schema(
  {
    apply_link: {
      src: String,
      enabled: Boolean,
    },

    slide_show:
    {
      images: [{ type: String, required: true }],
    },

    information: {
      enabled: Boolean,

      weeks: {
        type: Map,
        of: Date, // or String if you prefer
        default: {},
      },
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

export const Content = models.Content || model("Content", ContentSchema);