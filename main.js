const { app, BrowserWindow, ipcMain } = require('electron');
const { setMainMenu } = require('./menu.js');
const path = require('node:path');
const express = require('express');
const expressApp = express();
const port = 3000;
const {MongoClient} = require('mongodb');

expressApp.use(express.json());

expressApp.get('/', (req , res) => {
    res.send('API Funcionando');
});

const uri = "mongodb://localhost:27017/DCA";
const client = new MongoClient(uri);

async function conectarYObtenerDocumentos() {
    try {
        await client.connect();
const database = client.db('DCA');
const collection = database.collection('default_DCA');
const documentos = await collection.find({}).toArray();
return documentos;
    } catch(e) {
 console.error(e);
    } finally {
        await client.close();
    }
}
expressApp.get('/documentos' , async (req , res) => {
    try {
        const documentos = await conectarYObtenerDocumentos();
        res.json(documentos);
    } catch (e) {
       console.error(e);
       res.status(500).send({message: e.message });
    }

});

expressApp.listen(port, () => {
    console.log(`Servidor Express escuchando port: ${port}`);

});

/* CRUD */
/*
expressApp.post('http://127.0.0.1:3000/documentos', 
async (req,res) => {
    try {
        await client.connect();
        const database = client.db('DCA');
        const collection = database.collection('default_DCA');
        const documento = req.body;
        const resultado = await collection.insertOne(documento);
        res.status(201).json(resultado);
    } catch (e) {
        res.status(500).send({
            message: e.message });
    } finally {
        await client.close();
    }
});

expressApp.put('http://127.0.0.1:3000/:id',
async (req, res) => {
    try {
        await client.connect();
        const database = client.db('DCA');
        const collection = database.collection('default_DCA');
        const id = req.params.id;
        const actualizacion = req.body; 
        const filtro = {_id: new ObjectId(id)};
        const resultado = await collection.updateOne(filtro, {
            $set: actualizacion});
            res.json(resultado);
        } catch (e) {
console.error(e);
res.status(500).send({
    message: e.message });
        } finally {
            await client.close();
        }
}); 

expressApp.delete('http://127.0.0.1:3000/:id',
async (req, res) => {
    try {
        await client.connect();
        const database = client.db('DCA');
        const collection = database.collection('default_DCA');
        const id = req.params.id;
        const filtro = { _id: new ObjectId(id)};
        const resultado = await collection.deleteOne(filtro);
        res.json(resultado);
    } catch (e) {
        console.error(e);
        res.status(500).send({
            message: e.message });
    } finally {
        await client.close();
    }
});
*/

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 800,
        minWidth: 400,
        minHeigth: 400,
        webPreferences: {
         preload: path.join(__dirname,'./preload.js'),
         contextIsolation:true,
         nodeIntegration: false,
        } 
    })

    mainWindow.loadFile('./home.html');

 setMainMenu(mainWindow)
}

app.whenReady().then(() =>{
    createWindow()
})
