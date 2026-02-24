import mongoose, { model, Schema, models } from "mongoose";

const FqaSchema = new Schema({
  question: {type: String, require: true},
  answer: {type: String, require: true},
}, {timestamps: true});

export const Fqa = models.Fqa || model("Fqa", FqaSchema);
