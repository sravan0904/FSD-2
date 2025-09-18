const express = require('express');
const app = express();
app.use(express.json());
const user = [
{username:"admin",password:"1234"},
{username:"user",password:"user49"}
];
app.get('/',(req,res)=>{
res.send('welcome');
})
app.get('/',(req,res)=>{
res.json(users);
});
app.post('/login',(req,res)=>{
const {usrname,password}=req.body;
const user = users.filter(u=>u.username === username && u.password === password);
console.log(user)
if(user.length>0){
res.json({messange:"login sucssful"});
}
else{
res.status(401).json{(message:"Invalid credentials")};
}
});
app.listen(3000,()=> {
console.log('authentication server running at http://localhost:3000');
});
