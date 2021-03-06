new Vue({
    el: '#demo',
    data: {
        show: true
    }
});

new Vue({
    el: '#example-1',
    data: {
        show: true
    }
});

new Vue({
    el: '#example-2',
    data: {
        show: true
    }
});

new Vue({
    el: '#example-3',
    data: {
        show: true
    }
});

new Vue({
    el: '#example-4',
    data: {
        show: true
    },
    methods: {
        beforeEnter: function (el) {
            el.style.opacity = 0
            el.style.transformOrigin = 'left'
        },
        enter: function (el, done) {
            Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
            Velocity(el, { fontSize: '1em' }, { complete: done })
        },
        leave: function (el, done) {
            Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
            Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
            Velocity(el, {
                rotateZ: '45deg',
                translateY: '30px',
                translateX: '30px',
                opacity: 0
            }, { complete: done })
        }
    }
});

new Vue({
    el: '#example-5',
    data: {
        docState: 'edit'
    },
    computed: {
        buttonMessage: function () {
            switch (this.docState) {
                case 'save': return 'Сохранить'
                case 'edit': return 'Редактировать'
                case 'cancel': return 'Отмена'
            }
        }
    }
});

new Vue({
    el: '#list-demo',
    data: {
        items: [1,2,3,4,5,6,7,8,9],
        nextNum: 10
    },
    methods: {
        randomIndex: function () {
            return Math.floor(Math.random() * this.items.length)
        },
        add: function () {
            this.items.splice(this.randomIndex(), 0, this.nextNum++)
        },
        remove: function () {
            this.items.splice(this.randomIndex(), 1)
        },
    }
});

new Vue({
    el: '#flip-list-demo',
    data: {
        items: [1,2,3,4,5,6,7,8,9]
    },
    methods: {
        shuffle: function () {
            this.items = _.shuffle(this.items)
        }
    }
});

new Vue({
    el: '#list-complete-demo',
    data: {
        items: [1,2,3,4,5,6,7,8,9],
        nextNum: 10
    },
    methods: {
        randomIndex: function () {
            return Math.floor(Math.random() * this.items.length)
        },
        add: function () {
            this.items.splice(this.randomIndex(), 0, this.nextNum++)
        },
        remove: function () {
            this.items.splice(this.randomIndex(), 1)
        },
        shuffle: function () {
            this.items = _.shuffle(this.items)
        }
    }
});

new Vue({
    el: "#sudoku-demo",
    data: {
        cells: Array.apply(null, { length: 81 }).map(function(_, index) {
            return {
                id: index,
                number: (index % 9) + 1
            };
        })
    },
    methods: {
        shuffle: function() {
            this.cells = _.shuffle(this.cells);
        }
    }
});

new Vue({
    el: '#staggered-list-demo',
    data: {
        query: '',
        list: [
            { msg: 'Брюс Ли' },
            { msg: 'Джеки Чан' },
            { msg: 'Чак Норрис' },
            { msg: 'Джет Ли' },
            { msg: 'Кунг Фьюри' }
        ]
    },
    computed: {
        computedList: function () {
            var vm = this
            return this.list.filter(function (item) {
                return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
            })
        }
    },
    methods: {
        beforeEnter: function (el) {
            el.style.opacity = 0
            el.style.height = 0
        },
        enter: function (el, done) {
            var delay = el.dataset.index * 150
            setTimeout(function () {
                Velocity(
                    el,
                    { opacity: 1, height: '1.6em' },
                    { complete: done }
                )
            }, delay)
        },
        leave: function (el, done) {
            var delay = el.dataset.index * 150
            setTimeout(function () {
                Velocity(
                    el,
                    { opacity: 0, height: 0 },
                    { complete: done }
                )
            }, delay)
        }
    }
});

new Vue({
    el: '#dynamic-fade-demo',
    data: {
        show: true,
        fadeInDuration: 1000,
        fadeOutDuration: 1000,
        maxFadeDuration: 1500,
        stop: true
    },
    mounted: function () {
        this.show = false
    },
    methods: {
        beforeEnter: function (el) {
            el.style.opacity = 0
        },
        enter: function (el, done) {
            var vm = this
            Velocity(el,
                { opacity: 1 },
                {
                    duration: this.fadeInDuration,
                    complete: function () {
                        done()
                        if (!vm.stop) vm.show = false
                    }
                }
            )
        },
        leave: function (el, done) {
            var vm = this
            Velocity(el,
                { opacity: 0 },
                {
                    duration: this.fadeOutDuration,
                    complete: function () {
                        done()
                        vm.show = true
                    }
                }
            )
        }
    }
});