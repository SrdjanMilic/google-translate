const electron = require('electron')
const {app, BrowserWindow} = electron

let win = null;

app.on('window-all-closed', () => {
  app.quit();
});

app.on('ready', () => {
  let win = new BrowserWindow({width: 1000, height: 600, title: "Google Translate"});
  win.loadURL('https://translate.google.com');
  win.on('closed', () => {
    win = null;
  });
});