const {app, BrowserWindow, ipcMain} = require('electron');

const serial = require('./serial');


function createWindow () {
    let win = new BrowserWindow({
        width: 500,
        height: 300,
        webPreferences: {
            nodeIntegration: true
        }

    });

    win.loadFile('tela/index.html');
}

app.whenReady().then(createWindow);




ipcMain.handle('reload-ports', async(e) => {
    const avaliablePorts = serial.checkPorts();
    return avaliablePorts;
});


ipcMain.on('connect', (e, port_path) => {
    serial.createSerial(port_path, 9600);
});

ipcMain.on('send-message', (e, message) => {
    serial.sendMessage(message);
});