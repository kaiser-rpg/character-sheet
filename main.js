
const electron = require('electron');
const app = electron.app;
const Menu = electron.Menu;
const BrowserWindow = electron.BrowserWindow;
const {powerSaveBlocker} = require('electron');

const path = require('path');
const url = require('url');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let menu;
let powersaveId;

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({width: 1200, height: 1200});
    createMenu();

    // and load the index.html of the app.
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    powersaveId = powerSaveBlocker.start('prevent-display-sleep');
    console.log(powerSaveBlocker.isStarted(powersaveId));

    // Open the DevTools.
    mainWindow.webContents.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        mainWindow = null;
        powerSaveBlocker.stop(powersaveId)
    })
}

function createMenu() {
    menu = new Menu.buildFromTemplate([
        {
            label: "File",
            submenu: [
                {
                    label: 'Create New Character in new Window',
                    click() {
                        console.log("creating new character in new window");
                    },
                    accelerator: 'CmdOrCtrl+n'
                },
                {
                    label: 'Open',
                    click() {
                        console.log("opening character in current window");
                    },
                    accelerator: 'CmdOrCtrl+Shift+o'
                },
                {
                    label: 'Open in new window',
                    click() {
                        console.log("opening character in new window");
                    },
                    accelerator: 'CmdOrCtrl+n'
                },
                {
                    label: 'Save',
                    click() {
                        console.log("saving character");
                    },
                    accelerator: 'CmdOrCtrl+s'
                },
                {
                    label: 'Save As',
                    click() {
                        console.log("saving character in new file");
                    },
                    accelerator: 'CmdOrCtrl+Shift+s'
                },
                {
                    type: "separator"
                },
                {
                    label: 'Exit',
                    click() {
                        app.quit()
                    }
                }
            ]
        },
        {
            label: "Edit",
            submenu: [

                {
                    label: 'Undo',
                    click() {
                        console.log("undo");
                        //TODO
                    },
                    accelerator: 'CmdOrCtrl+z'
                },
                {
                    label: 'Redo',
                    click() {
                        console.log("redo");
                        //TODO
                    },
                    accelerator: 'CmdOrCtrl+y'
                },
            ]
        }
    ]);

    Menu.setApplicationMenu(menu);
}

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
});