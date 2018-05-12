let installer = require('electron-winstaller');
let path = require('path');
const dialog = require('electron').dialog;

console.log("packaging into a exe...\n");
resultPromise = installer.createWindowsInstaller({
    appDirectory: './google-translate-v0.1.2-win32-x64',
    outputDirectory: './installers',
    exe: 'google-translate.exe',
    setupExe: 'google-translate-v0.1.2-win32-x64.exe',
    noMsi: true,
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Google_Translate_Icon.png',
    setupIcon: 'images/win/icon.ico'
});

resultPromise.then( () => {
    console.log("Installer created");
    dialog.showMessageBox({
        type: 'info',
        title: 'electron-winstaller',
        message: "Installer created",
        buttons: ['ok']
    });
    require('electron').app.quit();
});