import express from 'express';
import { Validate } from './validation';
import * as dotenv from 'dotenv';


dotenv.config();
const app = express();
app.use(express.json());
const port = Number(process.env.PORT);
if (!port) {
    throw new Error('Port environment is not in ')
}
app.post('/Calculator', (req: any, res: any) => {
    const { expression } = req.body
    if (!expression) {
        return res.status(400).json("Error");
    }
    try {
        const valid = new Validate(expression);
        const result = valid.isValidExpression();
        return res.json({ result });
    }
    catch (error: any) {
        return res.status(400).json({ error: error.message });
    }
});
app.get('/', (req: any, res: any) => {
    return res.json('The server is running')
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
