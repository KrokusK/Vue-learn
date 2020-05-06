var example1 = new Vue({
    el: '#example-1',
    data: {
        counter: 0
    }
})

var example2 = new Vue({
    el: '#example-2',
    data: {
        name: 'Vue.js'
    },
    // определяйте методы в объекте `methods`
    methods: {
        greet: function (event) {
            // `this` внутри методов указывает на экземпляр Vue
            alert('Привет, ' + this.name + '!')
            // `event` — нативное событие DOM
            if (event) {
                alert(event.target.tagName)
            }
        }
    }
})

// вызывать методы можно и императивно
//example2.greet() // => 'Привет, Vue.js!'

new Vue({
    el: '#example-3',
    methods: {
        say: function (message) {
            alert(message)
        }
    }
})

new Vue({
    el: '#example-4',
    methods: {
        warn: function (message, event) {
            // теперь у нас есть доступ к нативному событию
            if (event) {
                event.preventDefault()
            }
            alert(message)
        }
    }
})

new Vue({
    el: '#example-5',
    data () {
        return {
            test: 'BEFORE SUBMIT'
        }
    },
    methods: {
        doSomething () {
            this.test = 'AFTER SUBMIT'
        }
    }
})