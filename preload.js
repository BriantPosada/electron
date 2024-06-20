const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('api', {
fetchDocumentos: async () => {
    const response = await fetch('http://127.0.0.1:3000/documentos');
        return await response.json();
}
      
});

contextBridge.exposeInMainWorld('API', {
   onUpdateTheme: (callback) => ipcRenderer.on('update-theme', callback)
})
