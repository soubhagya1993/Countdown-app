// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 600,
    minWidth: 700, // Set a minimum width
    minHeight: 500, // Set a minimum height
    webPreferences: {
      // preload: path.join(__dirname, 'preload.js'), // We aren't using a preload script for this simple app
      nodeIntegration: true,
      contextIsolation: false,
    },
    titleBarStyle: 'hidden', // Optional: for a sleek macOS look
    trafficLightPosition: { x: 15, y: 15 }, // Optional: for a sleek macOS look
  });

  // and load the index.html of the app.
  mainWindow.loadFile('index.html');

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});