const todoList = [
  {
    name: 'dance',
    dueDate: '16-03-2024'
  },
  {
    name: 'rock',
    dueDate: '16-03-2024'
  }
];

function renderTodoList() {
  let todoListHTML = '';
  for (let i=0; i<todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `
      <p>
        ${name} ${dueDate}
        <button 
          onclick="
            todoList.splice(${i}, 1);
            renderTodoList();
          "
          >Delete</button>
      </p>`; // Generating the HTML
    todoListHTML += html;
  }
  document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML;
}

renderTodoList();

function addToTodoList() {
  const inputElement = document.
    querySelector('.js-name-input');
  let name = inputElement.value;

  todoList.push(name);

  inputElement.value = '';
  renderTodoList();
}

const calculateWithEnterKey = (event) => event.key === 'Enter' && addToTodoList();