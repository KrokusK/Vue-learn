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

new Vue({
    el: '#example-2',
    data: {
        searchText: 'test'
    },
    directives: {
        focusLocal: {
            // определение директивы
            inserted: function (el) {
                el.focus()
            }
        }
    }
});

Vue.directive('demo', {
    bind: function (el, binding, vnode) {
        var s = JSON.stringify
        el.innerHTML =
            'name: '       + s(binding.name) + '<br>' +
            'value: '      + s(binding.value) + '<br>' +
            'expression: ' + s(binding.expression) + '<br>' +
            'argument: '   + s(binding.arg) + '<br>' +
            'modifiers: '  + s(binding.modifiers) + '<br>' +
            'vnode keys: ' + Object.keys(vnode).join(', ')
    }
});

new Vue({
    el: '#hook-arguments-example',
    data: {
        message: 'привет!'
    }
});

Vue.directive('pin', {
    bind: function (el, binding, vnode) {
        el.style.position = 'fixed'
        el.style.top = binding.value + 'px'
        el.style.left = binding.value + 'px'
    }
});

new Vue({
    el: '#baseexample'
});

Vue.directive('pin', {
    bind: function (el, binding, vnode) {
        el.style.position = 'fixed'
        var s = (binding.arg == 'left' ? 'left' : 'top')
        el.style[s] = binding.value + 'px'
    }
});

new Vue({
    el: '#dynamicexample',
    data: function () {
        return {
            direction: 'left'
        }
    }
});

Vue.directive('demo-object', function (el, binding) {
    console.log(binding.value.color) // => "белый"
    console.log(binding.value.text)  // => "привет!"
});

new Vue({
    el: '#objectexample'
});