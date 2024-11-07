let mongoose=require('mongoose');

const url='mongodb+srv://raghavdhiman2006:1234@raghav.loyrcrt.mongodb.net/?retryWrites=true&w=majority&appName=Raghav';

mongoose.connect(url).then(()=>{
    console.log("connected");
}).catch((err)=>{
    console.log(err);
});


