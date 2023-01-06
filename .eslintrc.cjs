module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: 'google',
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {
        indent: ['error', 4, { ignoredNodes: ['ConditionalExpression > *'] }]
    },
    extends: ['prettier']
};
