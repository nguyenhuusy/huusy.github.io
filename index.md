<!DOCTYPE html>
<html lang="en"><head>
    <meta charset="utf-8">
    <link rel="icon" href="/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#000000">
    <meta name="description" content="Web site created using create-react-app">
    <link rel="apple-touch-icon" href="/logo192.png">
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="/manifest.json">
    <!--
      Notice the use of  in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  <style>body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
</style><style>.nav-list {
  display: flex;
  justify-content: center;
  background: darkcyan;
  margin: 0;
  padding: 0; }

.nav-item {
  display: flex;
  list-style-type: none; }

.nav-link {
  padding: 5px 20px;
  color: white;
  text-decoration: none; }
</style><style>.student-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  padding: 30px 20px 30px 0; }
  .student-form-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #e4e4e4;
    padding: 15px; }
  .student-form .button {
    margin-top: 20px; }
</style><style>.colorful td {
  background: chocolate; }
</style><style>.student-list {
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  padding: 30px 0; }
  .student-list table {
    width: 100%;
    border-collapse: collapse; }
  .student-list thead {
    text-transform: uppercase; }
    .student-list thead td {
      font-weight: bold;
      color: darkcyan; }
  .student-list td {
    border: 1px solid #ccc;
    padding: 10px; }
</style><style>.content-section--tabs {
  flex-direction: column; }
</style><style>.generate-form {
  padding-bottom: 30px;
  display: flex; }
  .generate-form .button {
    margin: 20px 10px 20px 0;
    text-transform: uppercase; }
  .generate-form-left {
    width: 50%; }
  .generate-form .history {
    width: 50%;
    margin-left: 20px; }
</style><style>.tile {
  position: relative;
  flex-grow: 1;
  border: 1px solid #ccc;
  margin: 1px; }
  .tile::before {
    content: '';
    display: inline-block;
    width: 100%;
    padding: 50% 0; }
</style><style>.colorful-tiles {
  padding: 30px; }

.tile-row {
  display: flex; }
</style><style>.giphy-item {
  display: flex;
  flex-direction: column;
  width: calc(25% - 10px);
  margin: 5px 0;
  padding: 10px;
  background: #333;
  color: white; }
  .giphy-item__image img {
    width: 100%;
    height: 100%;
    object-fit: cover; }
  .giphy-item__title {
    padding: 10px 0;
    text-transform: capitalize; }
</style><style>.giphy {
  padding: 20px; }
  .giphy-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; }
  .giphy .buttons {
    display: flex;
    justify-content: center;
    margin-top: 30px; }
  .giphy .button {
    text-transform: uppercase;
    padding: 15px 30px; }
</style><style>* {
  box-sizing: border-box; }

body,
html {
  margin: 0;
  padding: 0;
  max-width: 100vw;
  font-size: 14px; }

button:focus,
input:focus {
  outline: none; }

h2 {
  font-size: 30px;
  color: darkcyan; }

.content-section {
  display: flex;
  padding: 0 30px; }

.form-field {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 0; }

.form-label {
  min-width: 100px; }

.form-input {
  flex-grow: 2;
  margin-left: 15px;
  padding: 5px 10px; }

.button {
  background: darkcyan;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer; }
  .button--grey {
    background: grey; }

.tabs {
  display: flex;
  border-bottom: 1px solid #ccc; }

.tab {
  position: relative;
  bottom: -1px;
  border-radius: 0;
  border: 1px solid #ccc;
  background: #e4e4e4;
  cursor: pointer;
  padding: 10px 20px; }
  .tab.active {
    border-bottom: 1px solid white;
    background: none; }

.tab-content {
  display: none;
  padding: 20px 0;
  line-height: 1.7; }
  .tab-content.active {
    display: block; }
</style></head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"><div class="app"><div class="header"><nav class="nav"><ul class="nav-list"><li class="nav-item"><a class="nav-link" href="/">Home</a></li><li class="nav-item"><a class="nav-link" href="/colorful-tiles">Colorful Tiles</a></li><li class="nav-item"><a class="nav-link" href="/giphy">Giphy</a></li><li class="nav-item"><a class="nav-link" href="/student-list">Student List</a></li><li class="nav-item"><a class="nav-link" href="/student-form">Student Form</a></li><li class="nav-item"><a class="nav-link" href="/contact-us">Contact us</a></li></ul></nav></div><div class="home"><div class="content"><div class="content-section"><div class="student-form"><h2>Student form</h2><div class="student-form-content"><div class="form-field"><label class="form-label">Student Name</label><input class="form-input" type="text" name="name" value=""></div><div class="form-field"><label class="form-label">Gender</label><input class="form-input" type="text" name="gender" value=""></div><div class="form-field"><label class="form-label">Math</label><input class="form-input" type="text" name="math" value=""></div><div class="form-field"><label class="form-label">English</label><input class="form-input" type="text" name="english" value=""></div><button class="button">Insert Student</button></div></div><div class="student-list"><h2 class="student-list__heading">Students</h2><table><thead><tr><td>id</td><td>name</td><td>gender</td><td>math</td><td>english</td></tr></thead><tbody><tr class=""><td>Toan</td><td>male</td><td>6</td><td>3</td><td><button>Fill color</button></td></tr><tr class=""><td>Hoa</td><td>female</td><td>5</td><td>7</td><td><button>Fill color</button></td></tr><tr class=""><td>Hai</td><td>male</td><td>9</td><td>7</td><td><button>Fill color</button></td></tr><tr class=""><td>Tam</td><td>male</td><td>6</td><td>7</td><td><button>Fill color</button></td></tr><tr class=""><td>Trang</td><td>female</td><td>9</td><td>8</td><td><button>Fill color</button></td></tr><tr class=""><td>nguyenhuusy</td><td>male</td><td>3</td><td>2</td><td><button>Fill color</button></td></tr></tbody></table></div></div><button>Hide content</button><div class="content-section content-section--tabs"><div class="tabs"><div class="tab active">About us</div><div class="tab ">Our services</div></div><div class="tab-content active">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Justo donec enim diam vulputate ut pharetra sit amet. Diam ut venenatis tellus in metus vulputate eu. Sodales neque sodales ut etiam sit amet. Est sit amet facilisis magna etiam tempor orci. Molestie nunc non blandit massa enim nec dui nunc. Nunc eget lorem dolor sed viverra ipsum nunc. Felis eget nunc lobortis mattis aliquam faucibus. Volutpat est velit egestas dui id ornare. Sapien et ligula ullamcorper malesuada proin libero.</div><div class="tab-content ">Viverra nibh cras pulvinar mattis. Pellentesque dignissim enim sit amet venenatis urna cursus eget. Eu facilisis sed odio morbi quis commodo odio aenean. Scelerisque eleifend donec pretium vulputate sapien nec. Netus et malesuada fames ac turpis egestas maecenas. Porta nibh venenatis cras sed. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Ullamcorper morbi tincidunt ornare massa. Tincidunt eget nullam non nisi est sit amet facilisis. Arcu vitae elementum curabitur vitae nunc sed.</div></div></div></div></div></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  <script src="/static/js/bundle.js"></script><script src="/static/js/0.chunk.js"></script><script src="/static/js/main.chunk.js"></script>

</body></html>
<head>
    <meta charset="utf-8">
    <link rel="icon" href="/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#000000">
    <meta name="description" content="Web site created using create-react-app">
    <link rel="apple-touch-icon" href="/logo192.png">
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="/manifest.json">
    <!--
      Notice the use of  in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  <style>body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
</style><style>.nav-list {
  display: flex;
  justify-content: center;
  background: darkcyan;
  margin: 0;
  padding: 0; }

.nav-item {
  display: flex;
  list-style-type: none; }

.nav-link {
  padding: 5px 20px;
  color: white;
  text-decoration: none; }
</style><style>.student-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  padding: 30px 20px 30px 0; }
  .student-form-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #e4e4e4;
    padding: 15px; }
  .student-form .button {
    margin-top: 20px; }
</style><style>.colorful td {
  background: chocolate; }
</style><style>.student-list {
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  padding: 30px 0; }
  .student-list table {
    width: 100%;
    border-collapse: collapse; }
  .student-list thead {
    text-transform: uppercase; }
    .student-list thead td {
      font-weight: bold;
      color: darkcyan; }
  .student-list td {
    border: 1px solid #ccc;
    padding: 10px; }
</style><style>.content-section--tabs {
  flex-direction: column; }
</style><style>.generate-form {
  padding-bottom: 30px;
  display: flex; }
  .generate-form .button {
    margin: 20px 10px 20px 0;
    text-transform: uppercase; }
  .generate-form-left {
    width: 50%; }
  .generate-form .history {
    width: 50%;
    margin-left: 20px; }
</style><style>.tile {
  position: relative;
  flex-grow: 1;
  border: 1px solid #ccc;
  margin: 1px; }
  .tile::before {
    content: '';
    display: inline-block;
    width: 100%;
    padding: 50% 0; }
</style><style>.colorful-tiles {
  padding: 30px; }

.tile-row {
  display: flex; }
</style><style>.giphy-item {
  display: flex;
  flex-direction: column;
  width: calc(25% - 10px);
  margin: 5px 0;
  padding: 10px;
  background: #333;
  color: white; }
  .giphy-item__image img {
    width: 100%;
    height: 100%;
    object-fit: cover; }
  .giphy-item__title {
    padding: 10px 0;
    text-transform: capitalize; }
</style><style>.giphy {
  padding: 20px; }
  .giphy-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; }
  .giphy .buttons {
    display: flex;
    justify-content: center;
    margin-top: 30px; }
  .giphy .button {
    text-transform: uppercase;
    padding: 15px 30px; }
</style><style>* {
  box-sizing: border-box; }

body,
html {
  margin: 0;
  padding: 0;
  max-width: 100vw;
  font-size: 14px; }

button:focus,
input:focus {
  outline: none; }

h2 {
  font-size: 30px;
  color: darkcyan; }

.content-section {
  display: flex;
  padding: 0 30px; }

.form-field {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 0; }

.form-label {
  min-width: 100px; }

.form-input {
  flex-grow: 2;
  margin-left: 15px;
  padding: 5px 10px; }

.button {
  background: darkcyan;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer; }
  .button--grey {
    background: grey; }

.tabs {
  display: flex;
  border-bottom: 1px solid #ccc; }

.tab {
  position: relative;
  bottom: -1px;
  border-radius: 0;
  border: 1px solid #ccc;
  background: #e4e4e4;
  cursor: pointer;
  padding: 10px 20px; }
  .tab.active {
    border-bottom: 1px solid white;
    background: none; }

.tab-content {
  display: none;
  padding: 20px 0;
  line-height: 1.7; }
  .tab-content.active {
    display: block; }
</style></head>
<body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"><div class="app"><div class="header"><nav class="nav"><ul class="nav-list"><li class="nav-item"><a class="nav-link" href="/">Home</a></li><li class="nav-item"><a class="nav-link" href="/colorful-tiles">Colorful Tiles</a></li><li class="nav-item"><a class="nav-link" href="/giphy">Giphy</a></li><li class="nav-item"><a class="nav-link" href="/student-list">Student List</a></li><li class="nav-item"><a class="nav-link" href="/student-form">Student Form</a></li><li class="nav-item"><a class="nav-link" href="/contact-us">Contact us</a></li></ul></nav></div><div class="home"><div class="content"><div class="content-section"><div class="student-form"><h2>Student form</h2><div class="student-form-content"><div class="form-field"><label class="form-label">Student Name</label><input class="form-input" type="text" name="name" value=""></div><div class="form-field"><label class="form-label">Gender</label><input class="form-input" type="text" name="gender" value=""></div><div class="form-field"><label class="form-label">Math</label><input class="form-input" type="text" name="math" value=""></div><div class="form-field"><label class="form-label">English</label><input class="form-input" type="text" name="english" value=""></div><button class="button">Insert Student</button></div></div><div class="student-list"><h2 class="student-list__heading">Students</h2><table><thead><tr><td>id</td><td>name</td><td>gender</td><td>math</td><td>english</td></tr></thead><tbody><tr class=""><td>Toan</td><td>male</td><td>6</td><td>3</td><td><button>Fill color</button></td></tr><tr class=""><td>Hoa</td><td>female</td><td>5</td><td>7</td><td><button>Fill color</button></td></tr><tr class=""><td>Hai</td><td>male</td><td>9</td><td>7</td><td><button>Fill color</button></td></tr><tr class=""><td>Tam</td><td>male</td><td>6</td><td>7</td><td><button>Fill color</button></td></tr><tr class=""><td>Trang</td><td>female</td><td>9</td><td>8</td><td><button>Fill color</button></td></tr><tr class=""><td>nguyenhuusy</td><td>male</td><td>3</td><td>2</td><td><button>Fill color</button></td></tr></tbody></table></div></div><button>Hide content</button><div class="content-section content-section--tabs"><div class="tabs"><div class="tab active">About us</div><div class="tab ">Our services</div></div><div class="tab-content active">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Justo donec enim diam vulputate ut pharetra sit amet. Diam ut venenatis tellus in metus vulputate eu. Sodales neque sodales ut etiam sit amet. Est sit amet facilisis magna etiam tempor orci. Molestie nunc non blandit massa enim nec dui nunc. Nunc eget lorem dolor sed viverra ipsum nunc. Felis eget nunc lobortis mattis aliquam faucibus. Volutpat est velit egestas dui id ornare. Sapien et ligula ullamcorper malesuada proin libero.</div><div class="tab-content ">Viverra nibh cras pulvinar mattis. Pellentesque dignissim enim sit amet venenatis urna cursus eget. Eu facilisis sed odio morbi quis commodo odio aenean. Scelerisque eleifend donec pretium vulputate sapien nec. Netus et malesuada fames ac turpis egestas maecenas. Porta nibh venenatis cras sed. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Ullamcorper morbi tincidunt ornare massa. Tincidunt eget nullam non nisi est sit amet facilisis. Arcu vitae elementum curabitur vitae nunc sed.</div></div></div></div></div></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  <script src="/static/js/bundle.js"></script><script src="/static/js/0.chunk.js"></script><script src="/static/js/main.chunk.js"></script>

</body>
<html lang="en"><head>
    <meta charset="utf-8">
    <link rel="icon" href="/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#000000">
    <meta name="description" content="Web site created using create-react-app">
    <link rel="apple-touch-icon" href="/logo192.png">
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="/manifest.json">
    <!--
      Notice the use of  in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  <style>body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
</style><style>.nav-list {
  display: flex;
  justify-content: center;
  background: darkcyan;
  margin: 0;
  padding: 0; }

.nav-item {
  display: flex;
  list-style-type: none; }

.nav-link {
  padding: 5px 20px;
  color: white;
  text-decoration: none; }
</style><style>.student-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  padding: 30px 20px 30px 0; }
  .student-form-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #e4e4e4;
    padding: 15px; }
  .student-form .button {
    margin-top: 20px; }
</style><style>.colorful td {
  background: chocolate; }
</style><style>.student-list {
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  padding: 30px 0; }
  .student-list table {
    width: 100%;
    border-collapse: collapse; }
  .student-list thead {
    text-transform: uppercase; }
    .student-list thead td {
      font-weight: bold;
      color: darkcyan; }
  .student-list td {
    border: 1px solid #ccc;
    padding: 10px; }
</style><style>.content-section--tabs {
  flex-direction: column; }
</style><style>.generate-form {
  padding-bottom: 30px;
  display: flex; }
  .generate-form .button {
    margin: 20px 10px 20px 0;
    text-transform: uppercase; }
  .generate-form-left {
    width: 50%; }
  .generate-form .history {
    width: 50%;
    margin-left: 20px; }
</style><style>.tile {
  position: relative;
  flex-grow: 1;
  border: 1px solid #ccc;
  margin: 1px; }
  .tile::before {
    content: '';
    display: inline-block;
    width: 100%;
    padding: 50% 0; }
</style><style>.colorful-tiles {
  padding: 30px; }

.tile-row {
  display: flex; }
</style><style>.giphy-item {
  display: flex;
  flex-direction: column;
  width: calc(25% - 10px);
  margin: 5px 0;
  padding: 10px;
  background: #333;
  color: white; }
  .giphy-item__image img {
    width: 100%;
    height: 100%;
    object-fit: cover; }
  .giphy-item__title {
    padding: 10px 0;
    text-transform: capitalize; }
</style><style>.giphy {
  padding: 20px; }
  .giphy-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; }
  .giphy .buttons {
    display: flex;
    justify-content: center;
    margin-top: 30px; }
  .giphy .button {
    text-transform: uppercase;
    padding: 15px 30px; }
</style><style>* {
  box-sizing: border-box; }

body,
html {
  margin: 0;
  padding: 0;
  max-width: 100vw;
  font-size: 14px; }

button:focus,
input:focus {
  outline: none; }

h2 {
  font-size: 30px;
  color: darkcyan; }

.content-section {
  display: flex;
  padding: 0 30px; }

.form-field {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 0; }

.form-label {
  min-width: 100px; }

.form-input {
  flex-grow: 2;
  margin-left: 15px;
  padding: 5px 10px; }

.button {
  background: darkcyan;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer; }
  .button--grey {
    background: grey; }

.tabs {
  display: flex;
  border-bottom: 1px solid #ccc; }

.tab {
  position: relative;
  bottom: -1px;
  border-radius: 0;
  border: 1px solid #ccc;
  background: #e4e4e4;
  cursor: pointer;
  padding: 10px 20px; }
  .tab.active {
    border-bottom: 1px solid white;
    background: none; }

.tab-content {
  display: none;
  padding: 20px 0;
  line-height: 1.7; }
  .tab-content.active {
    display: block; }
</style></head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"><div class="app"><div class="header"><nav class="nav"><ul class="nav-list"><li class="nav-item"><a class="nav-link" href="/">Home</a></li><li class="nav-item"><a class="nav-link" href="/colorful-tiles">Colorful Tiles</a></li><li class="nav-item"><a class="nav-link" href="/giphy">Giphy</a></li><li class="nav-item"><a class="nav-link" href="/student-list">Student List</a></li><li class="nav-item"><a class="nav-link" href="/student-form">Student Form</a></li><li class="nav-item"><a class="nav-link" href="/contact-us">Contact us</a></li></ul></nav></div><div class="home"><div class="content"><div class="content-section"><div class="student-form"><h2>Student form</h2><div class="student-form-content"><div class="form-field"><label class="form-label">Student Name</label><input class="form-input" type="text" name="name" value=""></div><div class="form-field"><label class="form-label">Gender</label><input class="form-input" type="text" name="gender" value=""></div><div class="form-field"><label class="form-label">Math</label><input class="form-input" type="text" name="math" value=""></div><div class="form-field"><label class="form-label">English</label><input class="form-input" type="text" name="english" value=""></div><button class="button">Insert Student</button></div></div><div class="student-list"><h2 class="student-list__heading">Students</h2><table><thead><tr><td>id</td><td>name</td><td>gender</td><td>math</td><td>english</td></tr></thead><tbody><tr class=""><td>Toan</td><td>male</td><td>6</td><td>3</td><td><button>Fill color</button></td></tr><tr class=""><td>Hoa</td><td>female</td><td>5</td><td>7</td><td><button>Fill color</button></td></tr><tr class=""><td>Hai</td><td>male</td><td>9</td><td>7</td><td><button>Fill color</button></td></tr><tr class=""><td>Tam</td><td>male</td><td>6</td><td>7</td><td><button>Fill color</button></td></tr><tr class=""><td>Trang</td><td>female</td><td>9</td><td>8</td><td><button>Fill color</button></td></tr><tr class=""><td>nguyenhuusy</td><td>male</td><td>3</td><td>2</td><td><button>Fill color</button></td></tr></tbody></table></div></div><button>Hide content</button><div class="content-section content-section--tabs"><div class="tabs"><div class="tab active">About us</div><div class="tab ">Our services</div></div><div class="tab-content active">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Justo donec enim diam vulputate ut pharetra sit amet. Diam ut venenatis tellus in metus vulputate eu. Sodales neque sodales ut etiam sit amet. Est sit amet facilisis magna etiam tempor orci. Molestie nunc non blandit massa enim nec dui nunc. Nunc eget lorem dolor sed viverra ipsum nunc. Felis eget nunc lobortis mattis aliquam faucibus. Volutpat est velit egestas dui id ornare. Sapien et ligula ullamcorper malesuada proin libero.</div><div class="tab-content ">Viverra nibh cras pulvinar mattis. Pellentesque dignissim enim sit amet venenatis urna cursus eget. Eu facilisis sed odio morbi quis commodo odio aenean. Scelerisque eleifend donec pretium vulputate sapien nec. Netus et malesuada fames ac turpis egestas maecenas. Porta nibh venenatis cras sed. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Ullamcorper morbi tincidunt ornare massa. Tincidunt eget nullam non nisi est sit amet facilisis. Arcu vitae elementum curabitur vitae nunc sed.</div></div></div></div></div></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  <script src="/static/js/bundle.js"></script><script src="/static/js/0.chunk.js"></script><script src="/static/js/main.chunk.js"></script>

</body></html>
