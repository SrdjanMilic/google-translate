# Google Translate - Unofficial Desktop Application

**Description:**

I made this app for practice and I think maybe someone else can find it useful as well.

This app is build for ones who would like to have Google Translate like separate application.  
Hopefully, it should help you a lot on daily basis translations.

**Usage:**

In the [releases](https://github.com/SrdjanMilic/google-translate/releases) section, there is a `.deb` installer for GNU/Linux Ubuntu based distros and `.exe` executable for Windows.

For Linux users, there is `google-translate.desktop` file provided in the assets folder for better convenience.  
Put that file in `~/.local/share/applications` directory, in order to show up icon and description in the app menu.

Windows users should optionaly pin the app on first run, because installer doesn't create start menu shortcuts.  
Application files are stored in `c:\Users\$USER\AppData\Local\GoogleTranslate\` directory.

To locally start the application from source, you will need to have [node.js](https://nodejs.org/en/) installed, then cd to directory and run:

1. npm install
2. npm start
