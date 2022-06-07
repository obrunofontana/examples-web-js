let peoples = [];

const addPeople = (event) => {
  event.preventDefault();
  const people = {
    name: document.getElementById('name').value,
    age: document.getElementById('age').value,
    height: document.getElementById('height').value,
  }
  const itemsJaArmazenados = localStorage.getItem('listaDePessoas');
  
  // If: operador ternário
  // var teste = true ? entao isso : isso
  peoples = itemsJaArmazenados ? JSON.parse(itemsJaArmazenados) : [];

  peoples.push(people);
  
  // console  
  localStorage.setItem('listaDePessoas', JSON.stringify(peoples));

  document.querySelector('form').reset();

  const items = localStorage.getItem('listaDePessoas');

  const itemsSerialized = JSON.parse(items)

  let ul = document.querySelector('ul');
  if (ul) {
    ul.remove();
  }
  
  ul = document.createElement('ul');
 
  itemsSerialized.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `Nome: ${item.name} Idade: ${item.age}, Altura: ${item.height}`
    console.log('ITEMS', item)
    ul.appendChild(li);
  });
  
  document.getElementById('list-section').appendChild(ul);
}

const botaoDeAdicionar = document.getElementById('btn');
botaoDeAdicionar.addEventListener('click', addPeople)


