import TaskModel from "../models/TaskModel.js";

// create a task

export const createTask = async (req, res) => {

    try {
        const task = req.body;

        task.user = req.user._id;//associate the user with userid so that only the create duser can view the task

        const newTask = await TaskModel.create(task);
        res.status(201).json({
            message: "Task created successfully",
            task: newTask
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: "Something went wrong while adding data",
            error: error.message
        })
    }


}

//get tasks

export const getTasks = async (req, res) => {
    try {
        let tasks = await TaskModel.find({ user: req.user._id }).select('-__v');//find tasks created by the logged in user only
        res.status(200).json({ tasks });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: "Something went wrong while getting data",
            error: error.message
        })
    }

}

//get a task

export const getATask = async (req, res) => {
    try {
        const task = await TaskModel.find({ _id: req.params.id, user: req.user._id }).select('-__v');//ensure the task belong to the loggedin user
        res.status(200).json({ task });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: "Something went wrong while adding data",
            error: error.message
        })
    }

}

//update task

export const updateTask = async (req, res) => {
    try {
        let updatedTask = await TaskModel.findByIdAndUpdate({_id:req.params.id,user:req.user._id},req.body,{new:true}).select('-__v');//ensure the task belong to the loggedin user
        res.status(200).json({
            message:"Task updated succesfully",
            task:updatedTask
        })

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: "Something went wrong while adding data",
            error: error.message
        })
    }

}

//Delete tasks

export const deleteTask = async (req, res) => {
    try {
        await TaskModel.findByIdAndDelete({_id:req.params.id,user:req.user._id});//ensure the task belong to the loggedin user
        res.json({ message: "Task deleted" })

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: "Something went wrong while deleting data",
            error: error.message
        })
    }
}

