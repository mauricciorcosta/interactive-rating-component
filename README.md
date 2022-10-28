# Frontend Mentor - Interactive rating component solution

Essa é uma possível solução para o desafio [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI)

## Table of contents

- [Visão geral](#visao-geral)
  - [O desafio](#o-desafio)
  - [Screenshots](#screenshots)
- [Meu processo](#meu-processo)
  - [Construído com](#construido-com)
  - [O apredizado continua](#o-aprendizado-continua)
- [Autor](#autor)

## Visão geral

### O Desafio

Usuários poderão:

- Ter o design mais adequado, dependendo de qual tela e/ou disposivitivo estejam em mãos
- Ver os estados hover e active para os elementos interativos na tela
- Selecionar um dos elementos interativos na tela e deixa-lo no estado checked
- Enviar com o botão SUBMIT o valor do elemento interativo e obte-lo como resposta na frase 'You selected (valor) out of 5'

### Screenshots

![](./screenshots/Frontend%20Mentor%20-%20Interactive%20rating%20component.jpg)
![](./screenshots/Frontend%20Mentor%20-%20Interactive%20rating%20component%202.jpg)


## Meu processo

### Construído com

- Mobile-first workflow
- Marcação HTML5
- Utilização de form e agrupamento de radio buttons
- Utilização de variáveis para cores e fonte no CSS
- Flexbox
- JavaScript
- Método de escuta para o elemento do botão SUBMIT
- Utilização de arrow function
- Template string (template literal) para interpolação de string
- Expressão (placeholder) dentro da template string para buscar o valor obtido no grupo de radio buttons


### O apredizado continua

Nesse projeto tive a chance de conhecer a pseudo-classe :has() no intuito de marcar o elemento pai de cada radio button

HTML:
```
<label class="rating" type="radio" >
    <input class="rating-input" type="radio" value="1" name="radio-btns" required/>
    <span class="rating-radio">1</span>
</label>
```

CSS:
```
.rating:has(> .rating-input:checked) {
    background-color: var(--orange);
}
```

## Autor

- [Mauriccio Costa]
- Frontend Mentor - [@mauricciorcosta](https://www.frontendmentor.io/profile/mauricciorcosta)
- Twitter - [@Mauriccio_Costa](https://twitter.com/Mauriccio_Costa)
