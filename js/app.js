var app = new Vue ({
    el: '#app',
    data: {
        value: 1,
    },
    methods: {
        incrementarUno (){
            this.value ++;
        },
        decrementarUno(){
            this.value --;
        },
        resetear (){
            this.value = 0;
        }
        
    }
});