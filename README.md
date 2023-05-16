# Exercício Frontend Mentor - Componente de avaliação interativo

Essa é a solução para o desafio [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). 

## Sumário de conteúdo

- [Overview](#overview)
  - [O Desafio](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Meu processo](#my-process)
  - [Tecnologias Utilizadas](#built-with)
  - [O Que Aprendi](#what-i-learned)
  - [Desenvolvimento Contínuo](#continued-development)
- [Autor](#author)

## Overview

### The Challenge

Usuário devem ser capazes de:

- Ver o layout ideal para o aplicativo, dependendo do tamanho da tela do dispositivo;
- Ver os estados de foco para todos os elementos interativos na página;
- Selecionar e enviar uma avaliação numérica;
- Ver o estado do cartão "Obrigado" após enviar uma avaliação.

### Screenshot

#Primeira Página
![](./src/images/rating%20challange.png)

#Segunda Página
![](./src/images/rating%20challange%202.png.png)

### Links

- Solução URL: [Add solution URL here](https://github.com/DaniloYuriRibeiro/interactive-rating-component)
- Site Live URL: [Add live site URL here](https://daniloyuriribeiro.github.io/interactive-rating-component/)

## My process

### Built With

- HTML5 semântico
- CSS
- Flexbox
- JavaScript

### What I Learned

Neste desafio entendi como buscar e utilizar melhor os arquivos DOM, também como reservar um dado de um EventListener para utilizar posteriormente e diminuir a quantidade de variáveis utilizando somente o document. Também aprendi uma nova maneira de utilizar o display none, utilizando duas divs que ocupam o mesmo espaço :D 

Adicionei ao exercício uma validação para caso seja enviado o formulário sem uma nota selecionada.
```js
    if (selected != null) {
    } else {
        alert("You need to select at least 1 grade!!")
    }
```

### Continued Development

Gostei muito do exercício e pretendo continuar melhorando meu conhecimento em JS, onde foi a parte que mais tive dificuldade

## Author

- Website - [Danilo Yuri Ribeiro](https://github.com/DaniloYuriRibeiro)
- Frontend Mentor - [@DaniloYuriRibeiro](https://www.frontendmentor.io/profile/DaniloYuriRibeiro)