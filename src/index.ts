import app from "./app/app";



import mongoose from "mongoose"

mongoose.connect(process.env.DB_URL ?? "mongodb://localhost:27017/portfolio")
.then(() => {
    console.log(`Database connection established`);
    app.listen(process.env.PORT ?? 3000, ( ) => {
        console.log(`Server has been running on port ${process.env.PORT ?? 3000}`);
    })

})
.catch((err: any) => {
    console.log("Error database connection " + err.message);
    
})

