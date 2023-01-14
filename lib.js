const readline = require("readline");

const doQuestion = (rl, query, resolve, reject) => {
    try {
        rl.question(query, (str) => {
            resolve(str);
            rl.close();
        });
    } catch (error) {
        reject(error);
    }
};
exports.doQuestion = doQuestion;
const getInterface = (input, output) => {
    return readline.createInterface({
        input,
        output,
        terminal: true,
    });
};
exports.getInterface = getInterface;
