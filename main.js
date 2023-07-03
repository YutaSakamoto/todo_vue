new Vue({
    el: '#app',
    data: {
        today: new Date().toLocaleDateString(),
        newTask: {
            id: '',
            name: '',
            discription: '',
            status: '',
            completDate: '',
        },
        tasks: []
    },
    created() {
        const tasks = localStorage.getItem('tasks');
        if (tasks) {
            this.tasks = JSON.parse(tasks);
        }
    },
    methods: {
        addTask() {
            if (this.newTask.id && this.newTask.name && this.newTask.description && this.newTask.status) {
                this.tasks.push({ ...this.newTask });
                this.newTask = {
                    id: '',
                    name: '',
                    description: '',
                    status: '',
                    completionDate: ''
                };
                localStorage.setItem('tasks', JSON.stringify(this.tasks));
            }
        }
    }
});