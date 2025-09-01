# Weather App - Vanilla JS

Este é um pequeno projeto em **Vanilla JavaScript, HTML e CSS** que permite buscar o clima atual de qualquer cidade usando a **WeatherAPI**.

---

## 🔹 Funcionalidades

- Permite ao usuário digitar o nome de uma cidade.
- Exibe o clima atual, temperatura, condição do tempo e ícone correspondente.
- Layout simples e responsivo.

---

## 🔹 Como funciona

1. O usuário digita o nome da cidade no campo de busca.
2. Ao clicar no botão de pesquisa, o script faz uma requisição à API de clima.
3. Os dados retornados da API são exibidos na tela.

---

## 🔹 Sobre a chave da API

- Para utilizar o projeto, é necessário possuir uma **chave da WeatherAPI**.
- A chave que está neste repositório é **falsa** (`01010101`) e **não funciona**.  
- Para rodar o projeto corretamente, siga estes passos:
  1. Crie uma conta gratuita em [WeatherAPI](https://www.weatherapi.com/).
  2. Gere sua chave de API.
  3. Substitua a variável `key` no arquivo `script.js` pela sua chave real:
     ```js
     const key = "SUA_CHAVE_AQUI";
     ```

> ⚠️ **Importante:** Nunca suba sua chave real no GitHub. Se quiser manter o projeto público, deixe a chave falsa no repositório e use a sua localmente.

