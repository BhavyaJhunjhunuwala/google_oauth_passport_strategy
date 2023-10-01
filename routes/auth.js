const express= require('express');
const router=express.Router();
const passport=require('passport');
const session=require('express-session')

router.get('/login/success',(req,res)=>{
    if(req.user){
        res.status(200).json({
            error:false,
            message:"login success",
            user:req.user
        });
    }
    else{
    res.status(403).json({
        error:true,
        message:"login faliure"
    });
    }
    // console.log("**********************************************************************************")
    // console.log(req.user.displayName);
    // res.send("login_success");
})


router.get('/login/false',(req,res)=>{
    res.status(401).json({
        error:true,
        message:"login faliure"
    });
})

router.get('/google/callback', passport.authenticate('google', {
    successRedirect: '/auth/login/success',  // whenever the success login is success then we will go to client side
    failureRedirect: '/auth/login/false'
  }));

  router.get("/google",passport.authenticate("google",["profile","email"]));

//   router.get("/logout",(req,res)=>{
//       //   req.logout(function(req,res){
//           //         // res.redirect('http://localhost:3000/')
//           //         res.redirect('http://localhost:3000/')
//           //   });
//           req.logout(function(err){
//               if(err){return next(err);}
//               res.redirect('http://localhost:3000/')
//             })
//   })

router.get("/logout",(req, res,next) =>{
    // req.logOut(function(err){
    //     if(err){
    //         return next(err);
    //     }
    // })
    //  req.session.destroy(function(err){
    //     // if (err) {
    //     //     return next(err);
    //     //   }
    //     // req.logout();
    //       res.redirect("https://mail.google.com/mail/u/0/?logout&hl=en");
    //     });
    // req.session.destroy();
    req.session.destroy((err)=>{
        req.logout((err)=>{});
          res.clearCookie("connect.sid");
        res.redirect("http://localhost:3000/")
    });
    // req.logout(function(err) {
    //     if (err) {
    //         return next(err);
    //     }
    //     // res.send("logout_success");
    //     // res.destroy();
    //     // res.clearCookie("connect.sid");
    //     res.redirect("http://localhost:3000/");
    //     // https://mail.google.com/mail/u/0/?logout&hl=en  
    // });
    
    // req.logout();
  });

  module.exports=router;