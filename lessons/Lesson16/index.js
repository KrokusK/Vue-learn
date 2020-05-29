Vue.component('anchored-heading', {
    template: '#anchored-heading-template',
    props: {
        level: {
            type: Number,
            required: true
        }
    }
});

new Vue({
    el: '#example-1'
});

Vue.component('anchored-heading-render', {
    render: function (createElement) {
        return createElement(
            'h' + this.level,   // имя тега
            this.$slots.default // массив дочерних элементов
        )
    },
    props: {
        level: {
            type: Number,
            required: true
        }
    }
});

new Vue({
    el: '#example-2'
});

var getChildrenTextContent = function (children) {
    return children.map(function (node) {
        return node.children
            ? getChildrenTextContent(node.children)
            : node.text
    }).join('')
};

Vue.component('anchored-heading-render-get-children-text', {
    render: function (createElement) {
        // создать id в kebab-case
        var headingId = getChildrenTextContent(this.$slots.default)
            .toLowerCase()
            .replace(/\W+/g, '-')
            .replace(/(^-|-$)/g, '')

        return createElement(
            'h' + this.level,
            [
                createElement('a', {
                    attrs: {
                        name: headingId,
                        href: '#' + headingId
                    }
                }, this.$slots.default)
            ]
        )
    },
    props: {
        level: {
            type: Number,
            required: true
        }
    }
});

new Vue({
    el: '#example-3'
});

Vue.component('paragraph-render', {
    render: function (createElement) {
        return createElement('div',
            Array.apply(null, { length: 5 }).map(function () {
                return createElement('p', 'Привет')
            })
        )
    }
});

new Vue({
    el: '#example-4'
});

Vue.component('ul-render', {
    props: ['items'],
    render: function (createElement) {
        if (this.items.length) {
            return createElement('ul', this.items.map(function (item) {
                return createElement('li', item.name)
            }))
        } else {
            return createElement('p', 'Ничего не найдено.')
        }
    }
});

new Vue({
    el: '#example-5',
    data: {
        list: [
            { name: 'Брюс Ли' },
            { name: 'Джеки Чан' },
            { name: 'Чак Норрис' },
            { name: 'Джет Ли' },
            { name: 'Кунг Фьюри' }
        ]
    }
});

Vue.component('base-input', {
    inheritAttrs: false,
    props: ['label', 'value'],
    /*
    render: function (createElement) {
        var self = this
        return createElement('input', {
            domProps: {
                value: self.value
            },
            on: {
                input: function (event) {
                    self.$emit('input', event.target.value)
                }
            }
        })
    }
    */

    render: function (createElement) {
        var self = this;
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
            pNode = createElement('p', self.value);
            stuff = [];

        stuff.push(inputNode)
        stuff.push(pNode)

        divNode = createElement('div', stuff)

        return divNode
    }
})

new Vue({
    el: '#example-6',
    data: {
        username: 'очистите содержимое'
    }
})