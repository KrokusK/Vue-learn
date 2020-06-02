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

// Doesn't work: value with filter capitalize
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
            //htmlval = self.filters.capitalize(self.value);
            //htmlval = $options.filters.capitalize(self.value);
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

function _linkify(text) {
    return text.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1">$1</a>');
}

Vue.filter('linkify', function (value) {
    return _linkify(value)
})

Vue.component('linkify', {
    props: ['msg'],
    template: '<span v-html="linkifiedMsg"></span>',
    computed: {
        linkifiedMsg() { return _linkify(this.msg); }
    }
});

Vue.component('linkify-slot', {
    render: function (h) {
        let html = _linkify(this.$slots.default[0].text);
        return h('span',{domProps:{"innerHTML": html}})
    }
});

new Vue({
    el: '#example-4',
    data: function () {
        return {
            message: 'The text string with a http://example.com'
        }
    },
    methods: {
        linkifyMethod(text) {
            return _linkify(text); // simply delegating to the global function
        }
    }
})



