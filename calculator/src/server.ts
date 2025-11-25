import express from 'express';
import { Validate } from './validation';
const app = express();
const port = 3000;
app.use(express.json());


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
    catch (error:any) {
        return res.status(400).json({error: error.message});
    }
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});

