const { EOL } = require('os');
const { Writable } = require('stream');
const { getInterface, doQuestion } = require('./lib');

const { stdin, stdout } = process;
const mutedOut = new Writable({
    write: (chunk, encoding, callback) => {
        callback();
    },
});

const read = (query, visible = true) =>
    new Promise((resolve, reject) => {
        const rl = getInterface(stdin, visible ? stdout : mutedOut);
        const label = visible ? query : '';

        if (!visible) stdout.write(`${query}`);
        doQuestion(
            rl,
            label,
            (data) => {
                if (!visible) stdout.write(EOL);

                resolve(data);
            },
            reject
        );
    });

module.exports = { read };
