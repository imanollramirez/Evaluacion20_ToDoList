import { Schema, model } from "mongoose";

const tasksSchema = new Schema(
    {
        title: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        completed: {
            type: Boolean,
            require: true
        }
    },
    {
      timestamps: true,
      strict: false,
    }
);

export default model ("tasks", tasksSchema);