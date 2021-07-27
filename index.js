const express = require('express');
const app = express();

const db = require('./models');

const { User } = require('./models');


app.get("/select", (req,res)=> {
	User.findAll()
	.then((users)=> {
		res.send(users);
	})
	.catch((err)=> {
		console.log(err);
	})
});

app.get("/insert", (req,res)=> {
	User.create({
		firstName: 'ramya',
		age: 18,
	}).catch(err => {
		if(err) {
			console.log(err);
		}
	});

	res.send('insert');

});

app.get("/delete", (req,res)=> {
	User.destroy({ where: { id: 10 } });
	res.send("Delete");
});


db.sequelize.sync().then((req)=>{
	app.listen(3001, ()=> {
		console.log("server running");
	});
});