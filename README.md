## Intro to Webpack

# ALX React - Webpack Tasks

This README documents the steps and concepts covered from Task 0 to Task 3 in setting up and using Webpack for project development.

---

## **Task 0: Basic Setup**
### Objective:
Initialize a project and configure Webpack to bundle JavaScript files.

### Steps:
1. **Create and Initialize Project**:
   ```bash
   mkdir task_0 && cd task_0
   npm init -y
   ```

2. **Install Webpack**:
   ```bash
   npm install webpack webpack-cli --save-dev
   ```

3. **Set Up Webpack Configuration**:
   - Create `webpack.config.js`:
     ```javascript
     const path = require('path');

     module.exports = {
       mode: 'production',
       entry: './js/dashboard_main.js',
       output: {
         filename: 'bundle.js',
         path: path.resolve(__dirname, 'public')
       }
     };
     ```

4. **Run Webpack Build**:
   Add a build script to `package.json`:
   ```json
   "scripts": {
     "build": "webpack"
   }
   ```
   Run the build:
   ```bash
   npm run build
   ```
---

## **Task 1: Adding Interactivity with JavaScript**
### Objective:
Extend the project to include interactive elements like buttons and counters using JavaScript.

### Steps:
1. **Add Dependencies**:
   ```bash
   npm install jquery lodash
   ```

2. **Create `dashboard_main.js`**:
   Add interactive elements:
   ```javascript
   import $ from 'jquery';
   import _ from 'lodash';

   $('body').append('<p>ALX Dashboard</p>');
   $('body').append('<p>Dashboard data for the students</p>');
   $('body').append("<button>Click here to get started</button>");
   $('body').append('<p id="count"></p>');
   $('body').append('<p>Copyright - ALX</p>');

   let count = 0;
   const updateCounter = () => {
     count++;
     $('#count').text(`${count} clicks on the button`);
   };

   $('button').on('click', _.debounce(updateCounter, 500));
   ```

3. **Build and Test**:
   Run:
   ```bash
   npm run build
   ```
   Open `public/index.html` in the browser.

---

## **Task 2: Adding CSS & Images**
### Objective:
Enhance the project by supporting CSS and image assets in Webpack.

### Steps:
1. **Install Loaders**:
   ```bash
   npm install style-loader css-loader file-loader image-webpack-loader --save-dev
   ```

2. **Update Webpack Configuration**:
   Modify `webpack.config.js`:
   ```javascript
   module: {
     rules: [
       {
         test: /\.css$/,
         use: ['style-loader', 'css-loader'],
       },
       {
         test: /\.(png|jpe?g|gif)$/i,
         type: 'asset/resource',
       },
     ],
   },
   ```

3. **Add Styles and Images**:
   - Create `css/main.css`:
     ```css
     #logo {
       width: 200px;
       height: 200px;
       background: url('./assets/holberton-logo.jpg') no-repeat;
       background-size: 200px 200px;
     }

     button {
       font-weight: bold;
       margin-left: 10px;
     }
     ```

   - Update `dashboard_main.js`:
     ```javascript
     import './css/main.css';
     $('body').prepend('<div id="logo"></div>');
     ```

4. **Optimize Images**:
   Add `image-webpack-loader` to optimize image assets.

5. **Build and Test**:
   Run:
   ```bash
   npm run build
   ```
   Verify that the styles and image render correctly in the browser.

---

## **Task 3: Dev Servers, Modules, and Tree Shaking**
### Objective:
Set up a development server, modularize the code, and optimize the bundle size.

### Steps:
1. **Install Dev Server**:
   ```bash
   npm install webpack-dev-server --save-dev
   ```

2. **Update Webpack Configuration**:
   - Add dev server configuration:
     ```javascript
     devServer: {
       static: './public',
       port: 8564,
       open: true,
     },
     ```
   - Enable source maps for development:
     ```javascript
     devtool: 'inline-source-map';
     ```

3. **Modularize the Code**:
   - Create `modules/header.js`, `modules/body.js`, and `modules/footer.js` with corresponding `.css` files.
   - Example: `header.js`:
     ```javascript
     import $ from 'jquery';
     import './header.css';

     $('body').prepend('<div id="logo"></div><h1>ALX Dashboard</h1>');
     console.log('Init header');
     ```

4. **Optimize Bundle**:
   - Split dependencies using Webpack's optimization:
     ```javascript
     optimization: {
       splitChunks: {
         chunks: 'all',
       },
     },
     ```

5. **Add Plugins**:
   - Clean the build folder on each build:
     ```bash
     npm install clean-webpack-plugin --save-dev
     ```
   - Automatically generate `index.html`:
     ```bash
     npm install html-webpack-plugin --save-dev
     ```
     Configure the plugins in `webpack.config.js`.

6. **Run Development Server**:
   Start the dev server:
   ```bash
   npm run start-dev
   ```
   Access the app at `http://localhost:8564`.

---

## Conclusion
By completing these tasks, you have learned how to:
- Set up Webpack for bundling JavaScript, CSS, and images.
- Modularize code for better maintainability.
- Optimize bundles using tree-shaking and chunk-splitting.
- Enhance development workflows with a live dev server and automated builds.




