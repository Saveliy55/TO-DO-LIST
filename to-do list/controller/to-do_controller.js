const mongoose = require('mongoose')
const TO$DO = require('../modul/to-do_modul')
module.exports.Get$to_do= async function(req,res) {
    const TO$DOAll = await TO$DO.find({})
    const targetTime = TO$DOAll.time
    function checkTime(){

        const now = new Date()
        const currentTime = now.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"})
        for(let i = 0; i<TO$DOAll.length;i++){
            // сделать проверку выполнена задача или нет если нет то вывести время задачи
            if(currentTime>=TO$DOAll[i].time){
                console.log('Время задачи вышло')
            }
        }
      
    }
    checkTime()
    res.render('to-do.hbs',{
      to_do: TO$DOAll,
    })
    
    
}
module.exports.Post$to_do = async function(req,res) {
  console.log(req.body)

    const to_do =new TO$DO ({
        name:req.body.name,
        description:req.body.description,
        time:req.body.time,
        date:req.body.date
    })

    const to$do = await TO$DO.findOne({ name:req.body.name})
    
    if(to$do){
        console.log(to$do)
        console.log('Задача уже есть');
        res.json({"message":"false"})
    } else{
        to_do.save().then(()=>{
        res.json({"message":"true"})
        console.log('Задача добавлена')
        })

    }
}
module.exports.Delete$to_do = async function (req,res) {
   try {
        const taskId = req.body.id
        console.log(taskId)
        TO$DO.findOneAndDelete({
            _id:taskId
        }).then((task) => {
            if (!task) {
            return res.status(404).json({
            message: 'Задача не найдена',
            })
            }
            
            res.json({
                succes: true
            })
            })
        
    
        } catch (error) {
        console.log(error)
        res.status(500).json({
        messgae: 'Не удалось получить задачу',
        })
        }  
   
}
module.exports.GetPut$to_do= async function(req,res){
    const TO$DOAID = req.params.id
    const TO$DOAll = await TO$DO.find({})


    res.render('to-doPut.hbs',{
      to_doID: TO$DOAID,
      to_do: TO$DOAll,
    })
}
module.exports.Put$to_do = async function (req,res) {
   try{
        const taskId = req.body.id
        console.log(taskId)
        await TO$DO.updateOne({
            _id:taskId
        },{
                name:req.body.name
        })
        res.json({
            succes: true
        })
        } catch(err){
            console.log(err, 'err');
            res.status(500).json({
                message: 'Не удалось обновить статью',
            });
        }
}

module.exports.SetStatus = async function (req,res) {
    const taskId = req.body.taskId
    const infoTask=await TO$DO.findOne({_id:req.body.taskId});

    if(infoTask.statusTask=='Выполнить'){
        console.log(infoTask.statusTask);
    const PutTask=await TO$DO.findOneAndUpdate({statusTask:'Выполнить'}, { $set: {statusTask: 'Выполнено'}});//Done
    if(PutTask){
            res.json({"message":"true"})
        }
    }else{
    const PutTask=await TO$DO.findOneAndUpdate({statusTask:'Выполнено'}, { $set: {statusTask: 'Выполнить'}}) // Existing
    if(PutTask){
            res.json({"message":"true"})
        }

    }

   
}