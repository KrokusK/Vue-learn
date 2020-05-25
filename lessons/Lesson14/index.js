// определяем объект примеси
var myMixin = {
    created: function () {
        this.hello()
    },
    methods: {
        hello: function () {
            console.log('привет из примеси!')
        }
    }
};

// определяем компонент, использующий примесь
var Component = Vue.extend({
    mixins: [myMixin]
});

var component = new Component(); // => "привет из примеси!"

var mixin = {
    data: function () {
        return {
            message: 'hello',
            foo: 'abc'
        }
    }
};

new Vue({
    mixins: [mixin],
    data: function () {
        return {
            message: 'goodbye',
            bar: 'def'
        }
    },
    created: function () {
        console.log(this.$data)
        console.log(this.$data.message + ' ' +  this.$data.foo + ' ' + this.$data.bar)
        // => { message: "goodbye", foo: "abc", bar: "def" }
    }
});

var mixin2 = {
    created: function () {
        console.log('вызван хук примеси')
    }
}

new Vue({
    mixins: [mixin2],
    created: function () {
        console.log('вызван хук компонента')
    }
})

// => "вызван хук примеси"
// => "вызван хук компонента"

var mixin3 = {
    methods: {
        foo: function () {
            console.log('foo')
        },
        conflicting: function () {
            console.log('из примеси')
        }
    }
};

var vm = new Vue({
    mixins: [mixin3],
    methods: {
        bar: function () {
            console.log('bar')
        },
        conflicting: function () {
            console.log('из самого компонента')
        }
    }
});

vm.foo(); // => "foo"
vm.bar(); // => "bar"
vm.conflicting(); // => "из самого компонента"

// добавляем обработчик для пользовательской опции `myOption`
Vue.mixin({
    created: function () {
        var myOption = this.$options.myOption
        if (myOption) {
            console.log(myOption)
        }
    }
});

new Vue({
    myOption: 'hello!'
});
// => "hello!"