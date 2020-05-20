Vue.component('base-input', {
    inheritAttrs: false,
    props: ['label', 'value'],
    template:
    '<label>{{ label }}' +
      '<input ' +
        'v-bind="$attrs" ' +
        'v-bind:value="value" ' +
        'v-on:input="$emit(\'input\', $event.target.value)" ' +
      '>' +
    '</label>'
})

var example1 = new Vue({
    el: '#example-1',
    data: {
        username: 'очисти содержимое'
    }
})

Vue.component('base-checkbox', {
    model: {
        prop: 'checkedcomponent',
        event: 'change-component'
    },
    props: {
        checkedcomponent: Boolean
    },
    template:
        '<input ' +
          'type="checkbox" ' +
          'v-bind:checked="checkedcomponent" ' +
          'v-on:change="$emit(\'change-component\', $event.target.checked)" ' +
        '>'
})

var example2 = new Vue({
    el: '#example-2',
    data: {
        lovingVue: true
    }
})

Vue.component('custom-input', {
    model: {
        prop: 'valuecomponent',
        event: 'changecomponent'
    },
    props: {
        valuecomponent: String
    },
    template:
        '<div>' +
        '<input ' +
        'v-bind:value="valuecomponent" ' +
        'v-on:input="$emit(\'changecomponent\', $event.target.value)" ' +
        '>' +
        '<p>{{ valuecomponent }}</p>' +
        '</div>'
})

var example3 = new Vue({
    el: '#example-3',
    data: {
        searchText: 'test'
    }
})

Vue.component('custom-checkbox-list', {
    model: {
        prop: 'checkedcomponent',
        event: 'changecomponent'
    },
    props: {
        checkedcomponent: Boolean,
        idcomponent: Number,
        valuecomponent: String
    },
    template:
        '<div>' +
        '<input ' +
        'type="checkbox" ' +
        'v-bind:id="idcomponent"' +
        'v-bind:value="valuecomponent"' +
        'v-bind:checked="checkedcomponent" ' +
        'v-on:change="$emit(\'changecomponent\', $event.target.checked)" ' +
        '>{{valuecomponent}}  {{ checkedcomponent }}' +
        '</div>'
})

var example4 = new Vue({
    el: '#example-4',
    data: {
        lovingVue: true,
        checkboxlist: [
            { id: 'checkbox1', content: 'My journey with Vue'},
            { id: 'checkbox2', content: 'Blogging with Vue'},
            { id: 'checkbox3', content: 'Why Vue is so fun'}
        ]
    }
})

Vue.component('base-input-event', {
    inheritAttrs: false,
    props: ['label', 'value'],
    computed: {
        inputListeners: function () {
            var vm = this
            // `Object.assign` объединяет объекты вместе, чтобы получить новый объект
            return Object.assign({},
                // Мы добавляем все слушатели из родителя
                this.$listeners,
                // Затем мы можем добавить собственные слушатели или
                // перезаписать поведение некоторых существующих.
                {
                    // Это обеспечит, что будет работать v-model на компоненте
                    input: function (event) {
                        vm.$emit('input', event.target.value)
                    }
                }
            )
        }
    },
    template:
    '<label> ' +
      '{{ label }} ' +
      '<input ' +
        'v-bind="$attrs" ' +
        'v-bind:value="value" ' +
        'v-on="inputListeners" ' +
      '> ' +
    '</label>'
})

var example5 = new Vue({
    el: '#example-5',
    data: {
        label: 'Example'
    }
})
