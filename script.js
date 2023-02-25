const newTask = document.querySelector('#new-task input');
const addTask = document.querySelector('#add-task');
const target = document.querySelector('#tasks');
addTask.addEventListener('click', e => {
    e.preventDefault();

    if (newTask.value.length === 0) {
        alert("Please enter a task!");
    } else {
        target.innerHTML += `
             <div class="task">
            <p class="text">
                ${newTask.value}
            </p>

            <button type="button" class="delete">
                <i class="fa-sharp fa-solid fa-circle-xmark"></i>
            </button>
        </div>
        `;

        const deleteTask = document.querySelectorAll('.delete');
        for (let i = 0; i < deleteTask.length; i++) {
            deleteTask[i].addEventListener('click', function () {
                this.parentNode.remove();
            });
        }

        const taskCompleted = document.querySelectorAll('.text');
        for (let i = 0; i < taskCompleted.length; i++) {
            taskCompleted[i].addEventListener('click', function () {
                this.classList.toggle('task-completed');
            })
        }

        newTask.value = "";
    }
})