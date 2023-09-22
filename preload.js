const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('versions', {
    // exposing app versions
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron
})