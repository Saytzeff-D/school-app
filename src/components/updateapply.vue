<template>
  <div class="w-100">
    <!-- <p class="h4 text-danger text-center">{{response}}</p> -->
    <h4 class="text-capitalize text-secondary text-center pt-3">Existing Applicant</h4>
    <h5 class="text-center text-danger pl-1 pr-1">Kindly provide your EXAMINATION NUMBER and SURNAME to continue with
      your application
    </h5>
    <div class="container">
      <form action="" class="p-4">
        <div class="form-group col w-100">
          <input v-model="examNum" type="text" placeholder="EXAMINATION NUMBER" class="form-control">
        </div>
        <div class="form-group col">
          <input v-model="surname" type="password" placeholder="SURNAME" class="form-control">
        </div>
        <div class="d-flex justify-content-center pb-4">
          <button @click="login" class="btn btn-primary">LOGIN</button>
        </div>
      </form>
    </div>
    <footer class="text-center pb-4">
           <marquee class="pt-5">Visit our website at <a href="www.rokia.sch.ng">www.rokia.sch.ng</a> or send a mail to <a class="text-dark" href="mailto:rokiaisolo@gmail.com"><em>rokiaisolo@gmail.com.</em></a>
           You can also visit us No 19, Olatunji Garden, Isolo, Lagos State
           </marquee>
         </footer>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "UpdateApplicant",
  data(){
    return{
      examNum: '',
      surname: '',
      applicantTray: [],
      response: ''
    }
  },
  methods:{
    login(e){
      e.preventDefault();
      let loginInfo = {type: 'applicantLogin', examNum: this.examNum, surname: this.surname}
      axios.post('http://localhost/api/schoolApp/config.php', loginInfo).then((res)=>{
        if (res.data.msg == true) {
          sessionStorage.setItem('applicantId', res.data.id)
          this.$router.push('/applicantPage')
        } else {
          alert('Applicant not found')
        }
      })
    }
  },
  mounted(){
    
  }
}
</script>

<style>
  
</style>
