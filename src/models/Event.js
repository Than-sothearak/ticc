import mongoose, { Schema, model, models } from "mongoose";

const EventSchema = new Schema(
  {
    // Event main info
    title: { type: String, required: true },
    year: { type: Number, required: true },
    season: { type: String }, // e.g., "Spring", "Fall"
    // Event description (HTML from RichTextEditor)
    description: { type: String, default: "" },
    postby: { type: String, default: "" },
    // Poster images
    images: [
      {
        type: String, // store URL
        required: true,
      },
    ],
    prototypes: [
      {
        type: String,
      },
    ],


    // Metadata
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },

  },
  {
    timestamps: true, // automatically create createdAt and updatedAt
  }
);

export const Event = models.Event || model("Event", EventSchema);
