


const OpenAI = require('openai');

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const generic = async (req, res) => {
    const completion = await openai.chat.completions.create({
        messages: [
            {
                role: "system",
                content: "You are a helpful assistant.",
            },
            {
                role: "user",
                content: req.body.message,
            },
        ],
        model: "gpt-3.5-turbo",
        max_tokens: 50,
    });
    console.log(completion.choices[0]);
    res.status(200).json(completion.choices[0]);
}

module.exports = {
    generic
};