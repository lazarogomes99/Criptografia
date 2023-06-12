const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function criptografar(mensagem) {
  const alfabeto = require('./alfabeto.json').alfabeto;

  let mensagemCriptografada = '';

  for (let i = 0; i < mensagem.length; i++) {
    const caractere = mensagem[i].toLowerCase();

   
    const indice = alfabeto.indexOf(caractere);
    if (indice !== -1) {
      const caractereCriptografado = alfabeto[(indice + 1) % alfabeto.length]; 

      mensagemCriptografada += mensagem[i] === mensagem[i].toUpperCase() ? caractereCriptografado.toUpperCase() : caractereCriptografado;
    } else {
      mensagemCriptografada += mensagem[i];
    }
  }

  return mensagemCriptografada;
}

function descriptografar(mensagemCriptografada) {
  const alfabeto = require('./alfabeto.json').alfabeto;

  let mensagemDescriptografada = '';

  for (let i = 0; i < mensagemCriptografada.length; i++) {
    const caractere = mensagemCriptografada[i].toLowerCase();

    const indice = alfabeto.indexOf(caractere);
    if (indice !== -1) {
      const caractereDescriptografado = alfabeto[(indice - 1 + alfabeto.length) % alfabeto.length];

      mensagemDescriptografada += mensagemCriptografada[i] === mensagemCriptografada[i].toUpperCase() ? caractereDescriptografado.toUpperCase() : caractereDescriptografado;
    } else {
      mensagemDescriptografada += mensagemCriptografada[i];
    }
  }

  return mensagemDescriptografada;
}

rl.question('Digite a mensagem que deseja criptografar: ', (mensagem) => {
  const mensagemCriptografada = criptografar(mensagem);
  console.log('Mensagem criptografada:', mensagemCriptografada);

  rl.question('Deseja descriptografar a mensagem? (S/N): ', (resposta) => {
    if (resposta.toLowerCase() === 's') {
      const mensagemDescriptografada = descriptografar(mensagemCriptografada);
      console.log('Mensagem descriptografada:', mensagemDescriptografada);
    }

   
    rl.close();
  });
});