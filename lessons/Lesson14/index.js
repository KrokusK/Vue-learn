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