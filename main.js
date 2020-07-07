// アプリケーション作成用のモジュールを読み込み
const {app, BrowserWindow} = require('electron');
const electron = require("electron");


// メインウィンドウ
let mainWindow;

function createWindow() {
    // メインウィンドウを作成します
    const screenSize = electron.screen.getPrimaryDisplay().size;
    // Create the browser window.
    mainWindow = new BrowserWindow({
        height: screenSize.height,
        width: screenSize.width,
        // tslint:disable-next-line: object-literal-sort-keys
        transparent: true,
        frame: false,
        show: true,
        resizable: false,
        alwaysOnTop: false,
    });

    // メインウィンドウに表示するURLを指定します
    // （今回はmain.jsと同じディレクトリのindex.html）
    mainWindow.loadFile('index.html');

    // デベロッパーツールの起動
    // mainWindow.webContents.openDevTools();

    // メインウィンドウが閉じられたときの処理
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

//  初期化が完了した時の処理
app.on('ready', createWindow);

// 全てのウィンドウが閉じたときの処理
app.on('window-all-closed', () => {
    // macOSのとき以外はアプリケーションを終了させます
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
// アプリケーションがアクティブになった時の処理(Macだと、Dockがクリックされた時）
app.on('activate', () => {
    // メインウィンドウが消えている場合は再度メインウィンドウを作成する
    if (mainWindow === null) {
        createWindow();
    }
});
