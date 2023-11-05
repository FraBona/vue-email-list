const { createApp } = Vue;

createApp({
  data(){
    return{
      email: [],
    }
  },
  methods: {
    checkEmail(n){
      for(let i = 0; i < n; i++){
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((current) => {
          console.log(current.data);
          const currentEmail = current.data.response;
          this.email.push(currentEmail);
        })
      }
    }
  },
  created(){
    this.checkEmail(10);
  },
  mounted(){
    console.log('ciao');
  }
}).mount('#app');