module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "plugins": [
      'react'
    ],
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "common-sense"
    ],
    // remove this
    rules: {
      'react/display-name': 0
    }
};
