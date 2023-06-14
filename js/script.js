const { createApp } = Vue;

createApp({
    data() {
        return {
            emailList : [],
        }
    },

    methods:{

    },

    created(){
        for (let index = 0; index < 10; index++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then( (result) => {
                console.log(result.data.response);
                email = result.data.response;
                this.emailList.push(email)
            });
        }

    }
}).mount('#app');