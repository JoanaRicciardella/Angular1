const express = require('express');
const path = require('path');
const mongoose= require('mongoose');
const app = express();

const distDir = '../dist';
//Connexion a mongoose
const uri = "mongodb+srv://admin:admin@cluster0.c3vm4.mongodb.net/Cluster0?retryWrites=true&w=majority";
mongoose.set('useUnifiedTopology', true);


app.use(express.static(path.join(__dirname, distDir))); // Quelque soit le lien je viens dans le dossier distant 
app.use(/^((?!(api)).)*/, (req, res) =>{ //Quand tu tappe autre chose que /api je lui envoie le fichier index.html du dossier dist
    res.sendFile(path.join(__dirname, distDir + '/index.html'));

});

var promise = mongoose.connect(uri, {useNewUrlParser: true});
promise.then((db) =>{
    console.log('DB connected');
    app.listen(3000, () =>{

        //A l'ouverture du serveur je mets ce message d'accueil
        console.log('Server Launch!');
    });
});