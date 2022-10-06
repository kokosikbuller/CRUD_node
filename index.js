import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import fileUpload from 'express-fileupload';
import de from 'dotenv';

const PORT = 5000;

de.config();
const app = express();

app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}));
app.use('/api', router);

async function strtApp() {
	try {
		await mongoose.connect(process.env.DB, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});
		app.listen(PORT, () => console.log(`Start on PORT: ${PORT}`));
	} catch (e) {
		console.log(e);
	}
}

strtApp();
