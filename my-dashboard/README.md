Passo 1: $ npm cache clean --force

Etapa 2: exclua node_modules por $ rm -rf node_modules package-lock.jsonpasta ou exclua-o manualmente , acessando o diretório e clique com o botão direito do mouse em> excluir / mover para a lixeira. Além disso, exclua o arquivo package-lock.json também.

Etapa 3: npm install

Para começar de novo, $ npm start

echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p



const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://fernandomarca:<password>@azurefunc.1kpxz.azure.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

