const {app, BrowserWindow} = require('electron');
let mainWindow;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

// This method will be called when Electron has done everything
// initialization and ready for creating browser windows.
app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600});

  mainWindow.maximize();
  mainWindow.setMenu(null);

  // and load the index.html of the app.
  mainWindow.loadURL('http://localhost:8000/');
  // mainWindow.loadURL('file://' + __dirname + '/dist/index.html');
  mainWindow.openDevTools({detached: true})
  // mainWindow.loadURL('http://127.0.0.1:8000/index.html');

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
});
