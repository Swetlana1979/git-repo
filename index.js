import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());


app.get('/2A',(reg,res) => {
	const sum = (+reg.query.a||0) + (+reg.query.b||0);
	res.send(sum.toString());
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
