import mongoose , {Schema} from 'mongoose'

const CreateCourse = new mongoose.Schema({
    name:{
        type:String
    },
    img:{
        type:String
    },

    title:{
        type:String
    },


    skile:{
        type:String
    },

    skile4:{
        type:String
    },

    skile3:{
        type:String
    },
    skile2:{
        type:String
    },
    skile1:{
        type:String
    },
})

const Course = mongoose.models.courses || mongoose.model("courses", CreateCourse)

export default Course;