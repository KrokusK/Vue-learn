new Vue({
    el: '#animated-number-demo',
    data: {
        number: 0,
        tweenedNumber: 0
    },
    computed: {
        animatedNumber: function() {
            return this.tweenedNumber.toFixed(0);
        }
    },
    watch: {
        number: function(newValue) {
            gsap.to(this.$data, { duration: 0.5, tweenedNumber: newValue });
        }
    }
});

var Color = net.brehaut.Color

new Vue({
    el: '#example-7',
    data: {
        colorQuery: '',
        color: {
            red: 0,
            green: 0,
            blue: 0,
            alpha: 1
        },
        tweenedColor: {}
    },
    created: function () {
        this.tweenedColor = Object.assign({}, this.color)
    },
    watch: {
        color: function () {
            function animate () {
                if (TWEEN.update()) {
                    requestAnimationFrame(animate)
                }
            }

            new TWEEN.Tween(this.tweenedColor)
                .to(this.color, 750)
                .start()

            animate()
        }
    },
    computed: {
        tweenedCSSColor: function () {
            return new Color({
                red: this.tweenedColor.red,
                green: this.tweenedColor.green,
                blue: this.tweenedColor.blue,
                alpha: this.tweenedColor.alpha
            }).toCSS()
        }
    },
    methods: {
        updateColor: function () {
            this.color = new Color(this.colorQuery).toRGB()
            this.colorQuery = ''
        }
    }
});

new Vue({
    el: "#app",
    data: function() {
        var defaultSides = 10;
        var stats = Array.apply(null, { length: defaultSides }).map(
            function() {
                return 100;
            }
        );
        return {
            stats: stats,
            points: generatePoints(stats),
            sides: defaultSides,
            minRadius: 50,
            interval: null,
            updateInterval: 500
        };
    },
    watch: {
        sides: function(newSides, oldSides) {
            var sidesDifference = newSides - oldSides;
            if (sidesDifference > 0) {
                for (var i = 1; i <= sidesDifference; i++) {
                    this.stats.push(this.newRandomValue());
                }
            } else {
                var absoluteSidesDifference = Math.abs(sidesDifference);
                for (var i = 1; i <= absoluteSidesDifference; i++) {
                    this.stats.shift();
                }
            }
        },
        stats: function(newStats) {
            TweenLite.to(this.$data, this.updateInterval / 1000, {
                points: generatePoints(newStats)
            });
        },
        updateInterval: function() {
            this.resetInterval();
        }
    },
    mounted: function() {
        this.resetInterval();
    },
    methods: {
        randomizeStats: function() {
            var vm = this;
            this.stats = this.stats.map(function() {
                return vm.newRandomValue();
            });
        },
        newRandomValue: function() {
            return Math.ceil(
                this.minRadius + Math.random() * (100 - this.minRadius)
            );
        },
        resetInterval: function() {
            var vm = this;
            clearInterval(this.interval);
            this.randomizeStats();
            this.interval = setInterval(function() {
                vm.randomizeStats();
            }, this.updateInterval);
        }
    }
});

function valueToPoint(value, index, total) {
    var x = 0;
    var y = -value * 0.9;
    var angle = ((Math.PI * 2) / total) * index;
    var cos = Math.cos(angle);
    var sin = Math.sin(angle);
    var tx = x * cos - y * sin + 100;
    var ty = x * sin + y * cos + 100;
    return { x: tx, y: ty };
};

function generatePoints(stats) {
    var total = stats.length;
    return stats
        .map(function(stat, index) {
            var point = valueToPoint(stat, index, total);
            return point.x + "," + point.y;
        })
        .join(" ");
};

// Эта логика перехода может быть отныне повторно использована
// с любыми целыми числами, которые мы бы хотели анимировать в приложении.
// Кроме того, компоненты предоставляют удобный интерфейс для конфигурирования
// более сложных и динамичных переходов.

Vue.component('animated-integer', {
    template: '<span>{{ tweeningValue }}</span>',
    props: {
        value: {
            type: Number,
            required: true
        }
    },
    data: function () {
        return {
            tweeningValue: 0
        }
    },
    watch: {
        value: function (newValue, oldValue) {
            this.tween(oldValue, newValue)
        }
    },
    mounted: function () {
        this.tween(0, this.value)
    },
    methods: {
        tween: function (startValue, endValue) {
            var vm = this
            function animate () {
                if (TWEEN.update()) {
                    requestAnimationFrame(animate)
                }
            }

            new TWEEN.Tween({ tweeningValue: startValue })
                .to({ tweeningValue: endValue }, 500)
                .onUpdate(function () {
                    vm.tweeningValue = this.tweeningValue.toFixed(0)
                })
                .start()

            animate()
        }
    }
});

// В самом экземпляре Vue больше не осталось никакой логики анимаций
new Vue({
    el: '#example-8',
    data: {
        firstNumber: 20,
        secondNumber: 40
    },
    computed: {
        result: function () {
            return this.firstNumber + this.secondNumber
        }
    }
});