const { app, BrowserWindow } = require('electron')

let win

function createWindow () {
  // Cree la fenetre du navigateur.
  win = new BrowserWindow({
    width: 1100,
    height: 700,
    autoHideMenuBar : true,
    //met la fenetre sans bordure //frame : false,
    webPreferences: {
      nodeIntegration: true
    },
    //fullscreen : true
  })

  //load the index.html.
  win.loadFile('src/junkbuster.html')
}

app.on('ready', createWindow)

