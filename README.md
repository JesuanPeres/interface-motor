# Interface Motor

Interface para controlar motor de passo via porta serial feita em [Electronjs](https://www.electronjs.org/) e utilizando a biblioteca [Serial Port](https://serialport.io/).

## Objetivo

O objetivo deste projeto é disponibilizar uma interface grafica agradável ao usuário que envie mensagens ao microcontrolador via porta serial.

## Requisitos:

[Nodejs](https://nodejs.org/) versão 12 ou mais recente instalada.

## Instalação

Para testar clone esse repositório entre nele via terminal e rode o comando **npm install**

## Modo de uso

Para abrir a interface gráfica rode o comando **npm start**. Você deverá ver seguinte tela:

![Exemplo de tela](https://jesuanperes.github.io/pagina/images/tela-exemplo.png).

### Passo a passo:

1. Primeiro conecte o cabo USB à porta
2. Clique em Recarregar portas para que ela apareça como opção
3. Selecione a porta (para saber qual é basta ver a que nã estava aparecendo antes)
4. clique em conectar

Depois de conectada a interface estará pronta para enviar mensagens ao microcontrolador. Cada um dos botões do controle irão enviar uma mensagem a cada 200 milissegundos enquanto clicados.

* A seta apontando para cima envia 'up'.
* A seta apontando para baixo envia 'down'.
* A seta apontando para a esquerda envia 'left'.
* A seta apontando para a direita envia 'right'.
* A bolinha no centro envia 'center'.