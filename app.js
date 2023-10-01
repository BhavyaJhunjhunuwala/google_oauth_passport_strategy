const express= require('express');
const cors=require('cors');
const passport= require('passport');
const session=require('express-session')
const app=express();
const passportSetup=require('./passport');
const authRoute=require('./routes/auth')
const cookieParser=require('cookie-parser')

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    // cookie: { secure: true }
  }))
  app.use(passport.authenticate('session'));
  app.use(passport.initialize());
  app.use(passport.session());

  app.use(cors({
        origin:"http://localhost:3000",
        methods:"GET,POST,PUT,DELETE",
        credentials:true,
  }))
//   app.use(cookieParser());
app.use("/auth",authRoute);
app.get('/',(req,res)=>{
    res.send("oauth login learining");
})

app.listen(8080,(req,res)=>{
    console.log("listening at port 8080");
})
