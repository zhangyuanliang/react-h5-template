This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

### `移动端适配`
主要用了 `amfe-flexible`和 `postcss-pxtorem`。

### `添加webpack配置`
采用了插件`react-app-rewired`，在 `config-overrides.js`文件中覆盖配置。
包括proxy代理配置、less、别名等。
