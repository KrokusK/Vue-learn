// Регистрируем глобальную пользовательскую директиву `v-focus`
Vue.directive('focus', {
    // Когда привязанный элемент вставлен в DOM...
    inserted: function (el) {
        // Переключаем фокус на элемент
        el.focus()
    }
});

new Vue({
    el: '#example-1',
    data: {
        searchText: 'test'
    }
});