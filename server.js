import app from './app.js';
import config from './database/config.js';




const PORT=process.env.PORT || 5000;
config();

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})






