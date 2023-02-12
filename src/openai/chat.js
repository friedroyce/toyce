const { Configuration, OpenAIApi } = require("openai");

module.exports = {
    async execute(message) {

		const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        });
        const openai = new OpenAIApi(configuration);
        
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: message,
            temperature: 0.5,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.5,
            presence_penalty: 0.0
        });

        return response.data.choices[0].text;
	}
}