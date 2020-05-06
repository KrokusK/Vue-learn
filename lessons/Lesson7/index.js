// Определяем новый компонент, названный button-counter
Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">Счётчик кликов — {{ count }}</button>'
})

var example1 = new Vue({
    el: '#example-1'
})

Vue.component('blog-post', {
    props: ['post'],
    template:
        '<div class="blog-post">' +
            '<h3>{{ post.title }}</h3>' +
            '<div v-html="post.content"></div>' +
        '</div>'
})

new Vue({
    el: '#example-2',
    data: {
        posts: [
            { id: 1, title: 'My journey with Vue', content: 'text1' },
            { id: 2, title: 'Blogging with Vue', content: 'text2' },
            { id: 3, title: 'Why Vue is so fun', content: 'text3' }
        ]
    }
})


