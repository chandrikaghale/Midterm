const Task = require('../model/task');

exports.getAllTasks = async(req, res)=>{
    try{
        //const tasks = await Task.find();
        const tasks = await Task.find({}, { _id: 0, taskID: 1, title: 1, status: 1 });
        res.json(tasks);
    }
    catch(error){
        console.error(error);
        res.status(500).json({error:"Internal server error"})

    }
};

exports.findTask= async(req, res)=>{
  try{
      const id = req.params.id;
      const task =  await Task.findById(id);
      if (!task) {
          return res.status(404).json({ error: "Task not found" });
      }
      res.json(findTask);
    }
    catch(error){
      console.error(error);
      res.status(500).json({error:"Internal server error"})
  }

exports.getAllDetails = async(req, res)=>{
     try{
         const details = await Task.distinct('details')
        res.json(details);
    }
     catch(error){
         console.error(error);
         res.status(500).json({error:"Internal server error"})
     }
    }
 };

exports.getTasksByStatus = async(req, res)=>{
    try{
         const status = req.params.status;
         const tasks = await Task.find({ cuisine });
         res.json(tasks);
     }
     catch(error){
         console.error(error);
         res.status(500).json({error:"Internal server error"})

     }
 };

