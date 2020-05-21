Vue.component('navigation-link', {
    props: ['url'],
    template:
    '<a ' +
        'v-bind:href="url" ' +
        'class="nav-link" ' +
    '> ' +
    '<slot></slot> '+
    '</a>'
})

var example1 = new Vue({
    el: '#example-1',
    data: {
        user: { name: 'Test-name', kind: 'admin'}
    }
})

Vue.component('submit-button', {
    template:
        '<button type="submit"> ' +
        '<slot>Отправить</slot> ' +
        '</button>'
})

var example2 = new Vue({
    el: '#example-2'
})

Vue.component('base-layout', {
    template:
        '<div class="container"> ' +
            '<header> ' +
                '<slot name="header"></slot> ' +
            '</header> ' +
            '<main> ' +
                '<slot></slot> ' +
            '</main> ' +
            '<footer> ' +
                '<slot name="footer"></slot> ' +
            '</footer> ' +
        '</div>'
})

var example3 = new Vue({
    el: '#example-3'
})

Vue.component('current-user', {
    props: ['usercomponent'],
    template:
        '<span> ' +
            '<slot v-bind:userslot="usercomponent"> ' +
            '{{ usercomponent.lastName }} ' +
            '</slot> ' +
            '<br> ' +
            '<slot name="footer" v-bind:userslotfooter="usercomponent"> ' +
            '{{ usercomponent.lastName }} ' +
            '</slot> ' +
        '</span>'
})

var example4 = new Vue({
    el: '#example-4',
    data: {
        userdata: { name: 'Test-name', kind: 'admin', firstName: 'Имя юзера', lastName: 'Фамилия юзера', middleName: 'Отчество юзера'}
    }
})

Vue.component('base-layout-reduction', {
    template:
        '<div class="container"> ' +
            '<header> ' +
                '<slot name="header"></slot> ' +
            '</header> ' +
            '<main> ' +
                '<slot></slot> ' +
            '</main> ' +
            '<footer> ' +
                '<slot name="footer"></slot> ' +
            '</footer> ' +
        '</div>'
})

var example5 = new Vue({
    el: '#example-5'
})

Vue.component('todo-list', {
    props: ['todoscomponent'],
    template:
        '<ul> ' +
        '<li ' +
            'v-for="todo in todoscomponent" ' +
            'v-bind:key="todo.id" ' +
            '> ' +
            //'<!-- Указываем слот для каждой задачи, передавая объект todo в качестве входного параметра. --> ' +
            '<slot name="todoslot" v-bind:todoSlotProps="todo"> ' +
                //'<!-- Содержимое по умолчанию --> ' +
                '{{ todo.default }} ' +
            '</slot> ' +
        '</li> ' +
        '</ul>'
})

var example6 = new Vue({
    el: '#example-6',
    data: {
        todos: [
                { id: 1, text: 'Почистить зубы', isCompile: true, default: 'Нет задачи!'},
                { id: 2, text: 'Купить хлеб', isCompile: true, default: 'Нет задачи!'},
                { id: 3, text: 'Выбросить мусор', isCompile: false, default: 'Нет задачи!'}
            ]
    }
})