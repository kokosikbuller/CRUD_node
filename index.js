import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import fileUpload from 'express-fileupload';

const PORT = 5000;
const DB_URL =
	'mongodb+srv://kokosik:said2908742001@cluster0.k3oc8lz.mongodb.net/?retryWrites=true&w=majority';

const app = express();

app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}));
app.use('/api', router);

async function strtApp() {
	try {
		await mongoose.connect(DB_URL, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});
		app.listen(PORT, () => console.log(`Start on PORT: ${PORT}`));
	} catch (e) {
		console.log(e);
	}
}

strtApp();
