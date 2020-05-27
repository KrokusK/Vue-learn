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