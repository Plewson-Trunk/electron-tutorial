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

    // Open a window if none are open (macOS)
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

// Quit the app when all windows are closed (Windows & Linux)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});


