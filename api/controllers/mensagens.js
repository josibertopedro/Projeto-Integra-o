const express = require('express');
const db = require('../db/models');
const moment = require('moment');

const router = express.Router();

// CREATE (Criação de uma nova venda)
router.post('/venda', async (req, res) => {
  const vendaData = req.body;

  try {
    const novaVenda = await db.Messages.create({
      nomeVendedor: vendaData.nomeVendedor,
      data: vendaData.data,
      nomeProduto: vendaData.nomeProduto,
      descricao: vendaData.descricao,
      preco: vendaData.preco,
      quantidade: vendaData.quantidade
    });

    return res.json({
      error: false,
      message: 'Cadastrado com sucesso',
      data: novaVenda
    });
  } catch (error) {
    console.error(error);
    return res.json({
      error: true,
      message: 'Erro ao cadastrar',
      detailedMessage: error.message
    });
  }
});

// CREATE (Criação de um novo usuário)
router.post('/usuario', async (req, res) => {
  const userData = req.body;

  try {
    const novoUsuario = await db.Messagens.create({
      nomeCompleto: userData.nomeCompleto,
      data: userData.data,
      estadoCivil: userData.estadoCivil,
      email:userData.email,
      endereco: userData.endereco,
      telefone: userData.telefone,
      rg: userData.rg,
      cep: userData.cep
    });

    return res.json({
      error: false,
      message: 'Cadastrado com sucesso',
      data: novoUsuario
    });
  } catch (error) {
    console.error(error);
    return res.json({
      error: true,
      message: 'Erro ao cadastrar',
      detailedMessage: error.message
    });
  }
});

// READ (Obter todas as vendas)
router.get('/venda/find', async (req, res) => {
  try {
    const vendas = await db.Messages.findAll();
    return res.json({
      error: false,
      message: 'Vendas recuperadas com sucesso',
      data: vendas
    });
  } catch (error) {
    console.error(error);
    return res.json({
      error: true,
      message: 'Erro ao recuperar vendas',
      detailedMessage: error.message
    });
  }
});

// READ (Obter todos os usuários)
router.get('/usuario/Edicao', async (req, res) => {
  try {
    const usuarios = await db.Messagens.findAll();
    return res.json({
      error: false,
      message: 'Usuários recuperados com sucesso',
      data: usuarios
    });
  } catch (error) {
    console.error(error);
    return res.json({
      error: true,
      message: 'Erro ao recuperar usuários',
      detailedMessage: error.message
    });
  }
});

// UPDATE (Atualização de um usuário)
router.put('/usuario/:id', async (req, res) => {
  const userId = req.params.id;
  const userData = req.body;

  try {
    const usuarioAtualizado = await db.Messagens.update(userData, {
      where: { id: userId }
    });

    if (usuarioAtualizado[0] === 1) {
      return res.json({
        error: false,
        message: 'Usuário atualizado com sucesso'
      });
    } else {
      return res.json({
        error: true,
        message: 'Usuário não encontrado ou nenhum campo para atualizar'
      });
    }
  } catch (error) {
    console.error(error);
    return res.json({
      error: true,
      message: 'Erro ao atualizar usuário',
      detailedMessage: error.message
    });
  }
});

router.put('/venda/:id', async (req, res) => {
  const userId = req.params.id;
  const userData = req.body;

  try {
    const usuarioAtualizado = await db.Messages.update(userData, {
      where: { id: userId }
    });

    if (usuarioAtualizado[0] === 1) {
      return res.json({
        error: false,
        message: 'Usuário atualizado com sucesso'
      });
    } else {
      return res.json({
        error: true,
        message: 'Usuário não encontrado ou nenhum campo para atualizar'
      });
    }
  } catch (error) {
    console.error(error);
    return res.json({
      error: true,
      message: 'Erro ao atualizar usuário',
      detailedMessage: error.message
    });
  }
});


// DELETE (Exclusão de um usuário)
router.delete('/usuario/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    const usuarioExcluido = await db.Messagens.destroy({
      where: { id: userId }
    });

    if (usuarioExcluido === 1) {
      return res.json({
        error: false,
        message: 'Usuário excluído com sucesso'
      });
    } else {
      return res.json({
        error: true,
        message: 'Usuário não encontrado'
      });
    }
  } catch (error) {
    console.error(error);
    return res.json({
      error: true,
      message: 'Erro ao excluir usuário',
      detailedMessage: error.message
    });
  }
});

router.delete('/venda/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    const usuarioExcluido = await db.Messages.destroy({
      where: { id: userId }
    });

    if (usuarioExcluido === 1) {
      return res.json({
        error: false,
        message: 'venda excluído com sucesso'
      });
    } else {
      return res.json({
        error: true,
        message: 'venda não encontrado'
      });
    }
  } catch (error) {
    console.error(error);
    return res.json({
      error: true,
      message: 'Erro ao excluir usuário',
      detailedMessage: error.message
    });
  }
});

module.exports = router;
