let input=document.querySelector(".input");
let button = document.querySelector(".addBtn");
let tasksDiv=document.querySelector('.tasks');
let tasks = [];

if(window.localStorage.getItem('tasks')) {
    tasks = tasks.concat(JSON.parse(window.localStorage.tasks));
    tasks.forEach((e) => {
        let icon = document.createElement('i');
        icon.className="fa-solid fa-xmark";
        let del = document.createElement('a');
        del.className="icon";
        let title = document.createElement('p');
        title.innerHTML = e;
        let task = document.createElement('div');
        task.className="country";
        del.append(icon);
        task.append(title);
        task.append(del);
        tasksDiv.append(task);
        del.addEventListener('click', (e) => {
            tasks = tasks.filter((element) => element !== `${e.currentTarget.previousElementSibling.innerHTML}`);
            window.localStorage.setItem('tasks', JSON.stringify(tasks));
            e.currentTarget.parentElement.remove();
        });
    });
}

button.addEventListener('click', (e) => {
    if(input.value == "") {
        return;
    } else {
        tasks = tasks.concat(input.value);
        window.localStorage.setItem('tasks', JSON.stringify(tasks));
        let icon = document.createElement('i');
        icon.className="fa-solid fa-xmark";
        let del = document.createElement('a');
        del.className="icon";
        let title = document.createElement('p');
        title.innerHTML = input.value;
        let task = document.createElement('div');
        task.className="country";
        del.append(icon);
        task.append(title);
        task.append(del);
        tasksDiv.append(task);
        del.addEventListener('click', (e) => {
            tasks = tasks.filter((element) => element !== `${e.currentTarget.previousElementSibling.innerHTML}`);
            window.localStorage.setItem('tasks', JSON.stringify(tasks));
            e.currentTarget.parentElement.remove();
        });
    }
});