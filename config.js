const DEFAULT_ENGINE = "davinci";
const ENGINE_LIST = ["davinci", "ada", "babbage", "curie"];

module.exports = {
    completionURL: (engine) => {
        if (!engine) {
            engine = DEFAULT_ENGINE;
        }
        return `https://api.openai.com/v1/engines/${engine}/completions`;
    },
    searchURL: (engine) => {
        if (!engine) {
            engine = DEFAULT_ENGINE;
        }
        return `https://api.openai.com/v1/engines/${engine}/search`;
    }
}
