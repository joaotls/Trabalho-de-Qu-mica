const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Rotas para os arquivos HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/ligacoes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/ligacoes.html'));
});

app.get('/estados', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/estados.html'));
});

app.get('/tabela', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/tabela.html'));
});

app.get('/quizz', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/quizz.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
