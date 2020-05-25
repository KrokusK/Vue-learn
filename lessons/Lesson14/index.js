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