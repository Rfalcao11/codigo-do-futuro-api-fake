const Cliente = require("../modelos/cliente");
module.exports = {
    index: async (req, res,next)=>{
      const clientes = await Cliente.lista()        
      res.status(200).send(clientes)
    },
    create: async (req, res,next)=>{
      const cliente= new Cliente(req.body)
      cliente.id = new Date().getTime()
      Cliente.salvar(cliente)
      res.status(201).send("")
    },
    delete: (req, res,next)=>{
      Cliente.apagarPorId(req.params.id)
      res.status(204).send("")
    },
    update: (req, res,next)=>{
      let clienteDb = Cliente.buscaPorId(req.params.id)
      if(!clienteDb) return req.status(404).send({mensagem:"Cliente nãao encontrado"})

      const cliente= new Cliente(req.body)
      cliente.id = clienteDb.id
      Cliente.salvar(cliente)
      res.status(200).send(cliente)
    },
    show: async (req, res,next)=>{
      let clienteDb = await Cliente.buscaPorId(req.params.id)
      if(!clienteDb) return res.status(404).send({mensagem:"Cliente nãao encontrado"})
      res.status(200).send(clienteDb)
    }
  }
  