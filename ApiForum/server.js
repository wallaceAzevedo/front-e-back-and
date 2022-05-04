const express = require('express');
const bodyparse = require('body-parser');
const user = require('./database/models/user');
const pb = require('./database/models/pb');
const path = require('path');
const app = express();
app.use('/Images', express.static(path.join(__dirname, '/Images')))

const bcrypt = require('bcrypt');
const cors = require('cors');
const session = require('express-session');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "Images/")
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.ogirinalname + ".jpg")
    },
})
  const upload = multer({ storage })

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(session({
    secret:'keyboard cat',
    name: 'essecookie',
    proxy: true,
    resave: true,
    saveUninitialized: true
}))
const port = 8080;

app.use(cors());
app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.get('/', (req, res) =>{
    res.send('api do curso');
})

app.post('/uploadImg', upload.single('file'), (req, res)=>{
    const id = req.body.id;
    user.update({image: 'http://localhost:8080/images/' + req.file.filename},{where:{id:id}})

    return res.send(req.file.filename);
})

app.post('/register', function(req, res){
    const name = req.body.name;
    const email = req.body.email;
    const senha = req.body.senha;
    const image = req.body.image;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(senha, salt);
    user.findOne({where:{email:email}}).then(result =>{
        if(result != null){
            return res.json("Já existe esse email");
        }else{
    
            user.create({
                name: name,
                email: email,
                senha: hash,
                image: image
            }).then(() =>{return res.json("Sucesso ao gravar")})   
        }
    })
   
})

app.post('/login', (req,res)=>{
    const email = req.body.email;
    const senha = req.body.senha;

    user.findOne({where:{email:email}}).then(result =>{
        var verify = bcrypt.compareSync(senha,result.senha);
        if(verify){
            req.session.result = {
                id: result.id,
                name: result.name,
                email: result.email,
                image: result.image,
            }

            return res.send(req.session.result)
        }else{
            return res.json('senha invalida')
        }
    })
})

app.listen(port, ()=>{
    console.log('listen 8080');
})