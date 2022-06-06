let peoples = [];

const addPeople = (event) => {
  event.preventDefault();
  const people = {
    name: document.getElementById('name').value,
    age: document.getElementById('age').value,
    height: document.getElementById('height').value,
  }
  
  peoples.push(people);
  
  localStorage.setItem('diferente', JSON.stringify(peoples));

  document.querySelector('form').reset();

  const items = localStorage.getItem('diferente');

  const itemsSerialized = JSON.parse(items)

  console.log('ITEMS', itemsSerialized)
  let ul = document.querySelector('ul');
  if (!ul) {
    ul = document.createElement('ul');
  }
}

const botaoDeAdicionar = document.getElementById('btn');
botaoDeAdicionar.addEventListener('click', addPeople)


