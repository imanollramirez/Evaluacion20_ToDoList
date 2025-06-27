import tasksModel from "../models/tasks.js";

const tasksController = {};

tasksController.getTasks = async (req,res) => {
    const tasks = await tasksModel.find();
    res.json(tasks);
};

tasksController.getTasksById = async (req,res) => {
  const task = await tasksModel.findById(req.params.id);
  res.json(task);
};

tasksController.insertTasks = async(req,res) => {
    const {title,description,completed} = req.body;
    const newTask = tasksModel({title,description,completed})
    await newTask.save();

    res.status(200).json({message:"Task saved!"})
};

tasksController.updateTasks = async(req,res) => {
    const {title,description,completed} = req.body;

    await tasksModel.findByIdAndUpdate(
        req.params.id,
        {title,description,completed},
        { new: true }
    );

      res.status(200).json({ message: "Task updated!" });
};

tasksController.deleteTask = async(req,res) => {
    const deleteTask = await tasksModel.findByIdAndDelete(req.params.id);
    if (!deleteTask) {
      return res.status(404).json({ message: "Task wasn't found!" });
    }
    res.json({ message: "Task deleted!"});
  };

  export default tasksController;