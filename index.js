 var app = new Vue ({
    el: "#app",
    data: {
        name: "izzan",
        students : [ 'Musa' , 'Izzan' , 'Hakam', 'Ayman', 'Talha']
    },
    methods: {
        buttonClick: function(){
            alert('Yay! Everyone is here :)');
        },
        greet:function(time) {
            return 'Good ' + time + ' ' + this.name;
        }
    }
})