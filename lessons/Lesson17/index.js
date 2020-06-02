new Vue({
    el: '#example-1',
    data: function () {
        return {
            message: 'john'
        }
    },
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
})

Vue.component('base-input', {
    inheritAttrs: false,
    props: ['label', 'value'],
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    },
    template:
    '<label> ' +
      '<input ' +
        'v-bind="$attrs" ' +
        'v-bind:value="value" ' +
        'v-on:input="$emit(\'input\', $event.target.value)" ' +
      '> ' +
      '<p> {{ value | capitalize}} </p>' +
    '</label>'
})

new Vue({
    el: '#example-2',
    data: function () {
        return { username: 'печатайте здесь'}
    }
})

Vue.component('base-input-render', {
    inheritAttrs: false,
    props: ['label', 'value'],
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    },
    render: function (createElement) {
        var self = this;
            //htmlval = self.filters.capitalize('fffff');
            inputNode = createElement('input', {
                domProps: {
                    value: self.value
                },
                on: {
                    input: function (event) {
                        self.$emit('input', event.target.value)
                    }
                }
            });
            pNode = createElement('p', {
                //let html =  self.value;
                domProps: {
                    //innerHTML: htmlval
                    innerHTML: self.value
                    //innerHTML: {{self.value | self.capitalize}}
                }
            });
            stuff = [];

        stuff.push(inputNode)
        stuff.push(pNode)

        divNode = createElement('div', stuff)

        return divNode
    }
})

new Vue({
    el: '#example-3',
    data: function () {
        return { username: 'печатайте здесь'}
    }
})



