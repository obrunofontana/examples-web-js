const storage = localStorage;
let names = [];

const add = () => {
  console.log('add')

  const namesKey = storage.getItem('names');
  names = namesKey ? JSON.parse(namesKey) : []

  names.push({
    name: document.getElementById('name').value,
    lastName: document.getElementById('lastName').value
  });

  storage.setItem('names', JSON.stringify(names));

  if (names.length) {
    const ul = document.createElement('ul');

    names.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `${item.name} ${item.lastName}`;
      ul.appendChild(li);
    });

    document.getElementById('list-section').appendChild(ul);
  }


}

document.getElementById('btn').addEventListener('click', add)



