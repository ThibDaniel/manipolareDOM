const addProduct = () => {
    const inputField = document.querySelector('input[type="text"]');
    const taskList = document.querySelector('ul');
  
    if (inputField.value.trim() !== '') {
      const newTask = document.createElement('li');
      const taskText = document.createTextNode(inputField.value);
  
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      newTask.appendChild(checkbox);
      newTask.appendChild(taskText);
      taskList.appendChild(newTask);

      inputField.value = '';
    }
  };