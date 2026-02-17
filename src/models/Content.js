import mongoose, { Schema, model, models } from "mongoose";

const ContentSchema = new Schema({
  apply_link: {
    title: { type: String },
    src: String,
    enabled: Boolean,
    deadline: { type: Date },
  },

  slide_show: {
    images: [{ type: String, required: true }],
  },

  information: {
    enabled: Boolean,
    poster: [{ type: String, required: true }],
    weeks: {
      type: Map,
      of: Date, // or String if you prefer
      default: {},
    },
  },

});

export const Content = models.Content || model("Content", ContentSchema);
