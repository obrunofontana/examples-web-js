/**
 * 
 * 
 * DEV WEB
 * 
 * Front-end
 *  HTML, CSS, JavaScript
 * 
 *  HTML é a linguagem de marcação
 *  CSS é a linguagem de estilo
 *  JS é a linguagem de programação
 * 
 * O HTML e o CSS juntos dão a aparência (maquiam) a página web
 * O JS - interações com a pagina, dá vida aos botões, aos inputs, 
 * toda interação visual que o usuário tem com a página
 *  
 * Existem servidores provendo recursos, podendo ser tanto no front 
 * quanto no back-end: imagem, html, arquivos em geral, pode ser arquivos de text
 * 
 * A comunicação é feita através do protocolo HTTP (HTTPS)
 * HTTPS - Possui um nivel de segurança que é utilizando 
 * certificados SSL que criptografa as informações durante a transferencia
 * 
 * JS - Linguagem de programação
 * 
 * POO: Programação orientada a objetos
 * 
 * Classe, objetos...
 * 
 * Classe: 
 *  propriedades/atributos
 *  métodos
 * 
 * Exemplo: 
 *  Fruta:
 *    nome
 *    tamanho
 *    valor
 *    sabor
 * Objeto: Objeto é uma instância de uma classe
 * 
 * Exemplo:
 *  const fruta1 = {
 *    nome: 'banana',
 *    tamanho: 2cm
 *  }
 * 
 * Métodos / Funções
 * Funções podem, receber parâmetros, eles são opcionais
 * funções podem retornar  algum valor, exemplo: um valor booleano
 * 
 * function estaMaduro(tempoDeVida) {
 *    const ehTrue = false;
 *    if (tempoDeVida >= 2) {
 *      ehTrue = true;
 *    }
 * 
 *  return false;
 * }
 * 
 * function Carro(modelo, ano) {
 *  return {
 *   modelo, ano
 *  }
 * }
 * 
 * const carro1 = Carro('saveiro', 1234)
 * const carro2 = Carro('gol', 4567)
 * 
 * estaMaduro()
 * const valorDesconto = 10;
 * function minhaFuncao () {
 *   console.log(valorDesconto);
 * 
 * 
 * const minhaFuncao = () => {
 *   console.log(valorDesconto);
 * }
 * 
 * O que é um escopo de uma função: é de onde a função 
 * inicia, até que ela termine 
 * 
 * Arrays(vetor)
 *  Aprendemos trabalhar com arrays, 
 * com os seguintes métodos:
 *  .forEach: percorre cada elemento do 
 *  array, disparando uma função, que recebe 2 parâmetros,
 *  no primeiro parâmetro recebe o elemento que esta armazenado
 *  e na segunda posição o índice do array onde está
 *  armazenado o elemento;
 * 
 * .push: adiciona um elemento ao final do array;
 * .indexOf: procura e retorna o indice dentro do array;
 * .splice: ele remove um ou mais itens de um array de acordo com o parâmetros passado pra função
 *  primeiro parâmetro: a posição inicial da qual deseja iniciar a remoção
 *  segundo parâmetro: quantos itens serão removidos à partir do
 *  parâmetro inicial
 * 
 * .filter: procura ele retorna o elemento que satisfaz a 
 *  condição que é realizada dentro da função;
 * 
 * .map: retornar um novo vetor de acordo com os itens do
 *   vetor que está sendo percorrido;
 * 
 * .includes: retornar true ou false (verdadeiro ou falso, 1, 0) se o parâmetro passado 
 *  pra ele atende a condição
 * 
 * 
 * Manipulação da DOM
 * O que é DOM? Document Object Model (página)
 * 
 * adicionar eventos dentro da DOM, através de inputs, botões elementos em geral
 * 
 * .addEventListener('click', função de callback)
 * 
 * procurar elemento dentro da DOM:
 *  .getElementById(): procura elemento pelo id
 *  .querySelector(): procura o primeiro elemento que ele encontrar
 *     exemplo de seletores: tagName, id, classe
 *  .querySelectorAll(): procura todos os elemento e retorna um nodeList 
 *    que é um vetor de elementos HTML
 *
 *  criar elementos HTML de forma dinâmica: 
 *  createElement(): cria um elemento HTML
 *  
 * .appendChild(): cria um elemento filho dentro do elemento pai
 * (childNode e parentNode)
 * 
 * 
 * manipular os elementos HTML, adicionando atributos, alterando atributos
 * pegar valores dos atributos
 * 
 * 
 * Storage: Local Storage
 * 
 *  
 * Back-end
 * 
 * 
 */
