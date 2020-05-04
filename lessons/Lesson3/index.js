var vm = new Vue({
    el: '#example1',
    data: {
        ok: true
    }
})

new Vue({
    el: '#no-key-example',
    data: {
        loginType: 'username'
    },
    methods: {
        toggleLoginType: function () {
            return this.loginType = this.loginType === 'username' ? 'email' : 'username'
        }
    }
})

new Vue({
    el: '#example2',
    data: {
        ok: true
    }
})
