const { createApp } = Vue;

createApp({
    data() {
        return {
            emailList : [],
            numberOfEmails: 0,
        }
    },

    methods:{
        addNewEmail(){
            axios.get('https://flynn.boolsean.careers/exercises/api/random/mail')
            .then( (result) => {
                this.emailList.push(result.data.response);
            })
            .catch(( error)=> {
                console.log(error);
            })
            .finally(() =>{
                console.log('Anyway...')
            });
        },

        generateEmailList(numberOfEmails){
            this.numberOfEmails = numberOfEmails;
            for (let index = 0; index < numberOfEmails; index++) {
                this.addNewEmail();
            }
        }
    },

    created(){
        this.generateEmailList(10);
    }
}).mount('#app');