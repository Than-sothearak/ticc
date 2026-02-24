import mongoose, { Schema, models, model } from "mongoose";

const MentorSchema = new Schema(
  {
    year: {
      type: Number,
      required: true,
      index: true, // 🔥 fast query by year
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String, // image URL or path
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

export const Mentor = models.Mentor || model("Mentor", MentorSchema);
