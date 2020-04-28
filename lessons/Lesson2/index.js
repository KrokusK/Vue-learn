var obj = {
    foo: 'bar'
}

Object.freeze(obj)

new Vue({
    el: '#app',
    data: obj
})

var data = { message1: 1,  message2: 1, seen: false}
var vm = new Vue({
    el: '#example',
    data: data
})

vm.$data === data // => true
vm.$el === document.getElementById('example') // => true

// $watch — это метод экземпляра
vm.$watch('message2', function (newValue, oldValue) {
    // Этот коллбэк будет вызван, когда изменится `vm.a`
    vm.message1 = oldValue;
    (newValue = 2) ? vm.seen = true : false;
})

new Vue({
    data: {
        a: 1
    },
    created: function () {
        // `this` указывает на экземпляр vm
        console.log('Значение a: ' + this.a)
    }
})
// => "Значение a: 1"

var vm3 = new Vue({
    el: '#example3',
    data: {
        message3: 'Привет'
    },
    computed: {
        // геттер вычисляемого значения
        reversedMessage3: function () {
            // `this` указывает на экземпляр vm
            return this.message3.split('').reverse().join('')
        }
    },
    methods: {
        reverseMessage3: function () {
            return this.message3.split('').reverse().join('')
        }
    }
})

var vm4 = new Vue({
    el: '#example4',
    data: {
        firstName: 'Foo',
        lastName: 'Bar'
    },
    computed: {
        fullName: function () {
            return this.firstName + ' ' + this.lastName
        }
    }
})

var vm5 = new Vue({
    el: '#example5',
    data: {
        firstName: 'Foo',
        lastName: 'Bar'
    },
    computed: {
        fullName: {
            // геттер:
            get: function () {
                return this.firstName + ' ' + this.lastName
            },
            // сеттер:
            set: function (newValue) {
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        }
    }
})
vm5.fullName = 'Иван Иванов';