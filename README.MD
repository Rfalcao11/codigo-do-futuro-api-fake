# instruções
```shell
# rodar códigos abaixo
npm install
npm run dev # para desenvolvimento
# acessar http://localhost:3000
npm start # para produção
# acessar http://localhost:3000

#fazendo get todos clientes via terminal
curl http://localhost:3000/clientes

#fazendo get de um cliente via terminal
curl http://localhost:3000/clientes/2

#fazendo post via terminal
curl -d '{ "id":11, "nome": "Xaropinho"}' -H "Content-Type: application/json" -X POST http://localhost:3000/clientes

#fazendo delete via terminal
curl -H "Content-Type: application/json" -X DELETE http://localhost:3000/clientes/3
#fazendo put via terminal
curl -d '{ "nome":"Luana","cpf":"00000000000","telefone":"11988898890","endereco":"Endereco teste","valor":2.5}' -H "Content-Type: application/json" -X PUT http://localhost:3000/clientes/3


#fazendo pos via Postman

```