new Vue({
    el: "#app",
    data: {
        date: null
    },
    mounted: function() {
        var picker = new Pikaday({
            field: this.$refs.dateInput,
            format: "YYYY-MM-DD"
        });

        this.$once("hook:beforeDestroy", function() {
            picker.destroy();
        });
    }
});