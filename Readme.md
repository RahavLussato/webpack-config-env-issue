in order to reproduce the issue:
```
rm -rf ./dist/ && NODE_ENV=staging webpack --display-error-details --config webpack.config.js
```