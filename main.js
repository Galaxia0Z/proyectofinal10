fetch('menu.json')
  .then(response => response.json())
  .then(data => {
    const menuContainer = document.getElementById('menu');
    const menuItems = data.menu.map(item => {
      const menuItem = document.createElement('li');
      const menuLink = document.createElement('a');
      menuLink.href = item.url;
      menuLink.textContent = item.name;
      menuItem.appendChild(menuLink);
      return menuItem;
    });
    menuItems.forEach(item => menuContainer.appendChild(item));
  });