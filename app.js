new Vue({
    el: '#vue-app',
    data: {
        name: 'Chalo',
        job: 'Web Developer',
        website: 'http://webmaster506.com',
        websiteTag: '<a href="http://webmaster506.com">Webmaster506</a>',
        age: 30,
        x: 0,
        y: 0,
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + ' ' + this.name;
        },
        add: function(inc) {
            this.age += inc;
        },
        substract: function(dec) {
            this.age -= dec;
        },
        updateXY: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function() {
            alert("you clicked me")
        }
    }
});