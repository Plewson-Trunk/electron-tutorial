const { app, BrowserWindow } = require('electron')


// createWindow() function loads your web page into a new BrowserWindow instance
const createWindow = () => {
    const win = new BrowserWindow({
        width: 900,
        height: 900,
        frame: false
    });

    win.loadFile('index.html');
};

// CALLING FUNCTION WHEN THE APP IS READY

app.whenReady().then(() => {
    createWindow();
});

// Quit the app when all windows are closed (Windows & Linux)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});