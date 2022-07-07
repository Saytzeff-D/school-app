<template>
  <div>
     <h4 class="text-capitalize text-secondary text-center pt-3">new applicant</h4>
     <h5 class="text-center text-danger pl-5 pr-5">Application for the new academic session is now open.
        Carefully fill the form below. Ensure that you double check the details you are providing before
         submitting most especially your <strong>PASSPORT</strong>.</h5>
         <div class="container ml-2">
           <form action="" class="p-5">
             <div class="form-group col-10"> 
               <label for="" class="font-weight-bold">Passport:</label>         
         <input type="file" id="myFile" class="form-control" required @change="uploadPic">
         </div>
           <div class="form-group col-10">          
         <input type="text" v-model="surname" placeholder="SURNAME" class="form-control" required>
         </div>
         <div class="form-group col-10">            
         <input type="text" v-model="fname" placeholder="FIRST NAME" class="form-control" required>
         </div>
         <div class="form-group col-10">
         <input type="text" v-model="mname" placeholder="MIDDLE NAME" class="form-control" required>
         </div>
         <div class="form-group col-10">
         <input type="date" v-model="dob" placeholder="DATE OF BIRTH" class="form-control" required>
         </div>
         <div class="form-group col-4">
         <select class="form-control" v-model="gender" required>
           <option value="" selected>Select gender</option>
           <option value="MALE">MALE</option>
           <option value="FEMALE">FEMALE</option>
         </select>
         </div>
         <div class="form-group col-4">
         <select class="form-control" v-model="modeOfEntry" required>
           <option value="" selected>Select Entry type</option>
           <option value="JUNIOR SECONDARY">JUNIOR SECONDARY</option>
           <option value="SENIOR SECONDARY">SENIOR SECONDARY</option>
         </select>
         </div>
         <div class="form-group col-10">
         <input type="text" v-model="phoneNum" placeholder="08011111111" class="form-control" required>
         </div>
         <div class="form-group col-10">
         <input type="email" v-model="email" placeholder="EMAIL ADDRESS" class="form-control" required>
         </div>
         <div class="form-group col-4">
         <select class="form-control" v-model="stateOrigin" required>
           <option value="" selected>State of Origin</option>
           <option value="Abia">Abia</option>
           <option value="Adamawa">Adamawa</option>
           <option value="Akwa Ibom">Akwa Ibom</option>
           <option value="Anambra">Anambra</option>
           <option value="Bauchi">Bauchi</option>
           <option value="Bayelsa">Bayelsa</option>
           <option value="Benue">Benue</option>
           <option value="Borno">Borno</option>
           <option value="Cross River">Cross River</option>
           <option value="Delta">Delta</option>
           <option value="Ebonyi">Ebonyi</option>
           <option value="Edo">Edo</option>
           <option value="Ekiti">Ekiti</option>
           <option value="Enugu">Enugu</option>
           <option value="Gombe">Gombe</option>
           <option value="Imo">Imo</option>
           <option value="Jigawa">Jigawa</option>
           <option value="Kaduna">Kaduna</option>
           <option value="Kano">Kano</option>
           <option value="Katsina">Katsina</option>
           <option value="Kebbi">Kebbi</option>
           <option value="Kogi">Kogi</option>
           <option value="Kwara">Kwara</option>
           <option value="Lagos">Lagos</option>
           <option value="Nasarawa">Nasarawa</option>
           <option value="Niger">Niger</option>
           <option value="Ogun">Ogun</option>
           <option value="Osun">Osun</option>
           <option value="Oyo">Oyo</option>
           <option value="Plateau">Plateau</option>
           <option value="Rivers">Rivers</option>
           <option value="Sokoto">Sokoto</option>
           <option value="Taraba">Taraba</option>
           <option value="Yobe">Yobe</option>
           <option value="Zamfara">Zamfara</option>
         </select>
         </div>
         <div class="d-flex justify-content-center">
         <button class="btn btn-primary" v-on:click="createProfile" id="createProfileBtn">CREATE REGISTRATION PROFILE</button>
         </div>
         </form>
         </div>
         <footer class="text-center pb-3">
           <marquee class="pt-4">Visit our website at <a href="www.rokia.sch.ng">www.rokia.sch.ng</a> or send a mail to <a class="text-dark" href="mailto:rokiaisolo@gmail.com"><em>rokiaisolo@gmail.com.</em></a>
           You can also visit us No 19, Olatunji Garden, Isolo, Lagos State
           </marquee>
         </footer>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: 'NewApplication',
  data(){
    return{
      surname: '',
      fname: '',
      mname: '',
      dob: '',
      gender: '',
      modeOfEntry: '',
      phoneNum: '',
      email: '',
      stateOrigin: '',
      file: ''
    }
  },
  methods:{
    createProfile(){
      event.preventDefault()
      if (this.surname !== '' && this.fname !== '' && this.mname !== '' && this.dob !== '' && this.gender !== ''&& this.modeOfEntry !== '' && this.phoneNum !== '' && this.email !== '' && this.stateOrigin !== '') {
        let applicant = {type: 'newApplication',surname: this.surname, firstName: this.fname, middleName: this.mname, DOB: this.dob, gender: this.gender, entryType: this.modeOfEntry, phoneNumber: this.phoneNum, emailAddress: this.email, stateOfOrigin: this.stateOrigin, passport: this.file.name}
      let applicantObj = new FormData()
      applicantObj.append('passport', this.file, this.file.name)
      axios.post('http://localhost/api/schoolApp/config.php', applicantObj).then((res)=>{
        console.log(res.data, applicant)
        if (res.data == 'Uploaded') {
          axios.post('http://localhost/api/schoolApp/config.php', applicant).then((res)=>{
            if(res.data.response == 'Applicant Saved Successfully'){
          sessionStorage.setItem('applicantId', res.data.id)
          this.$router.push('/applicantPage')
        }
        else{
          console.log(res.data);
        }
          })   
        } else {
          alert('res.data')
        }
      })
      } else {
        alert('Please fill the required field')
      }
    },
    uploadPic(event){
      // let fileName = document.getElementById('myFile').files.item(0).name;
      let fileName = event.target.files[0]
      console.log(fileName)
      this.file = fileName
  },

  mounted(){
    // axios.get('http://localhost/api/cbtApp/questionProcess.php').then((res)=>{
    //   console.log(res.data);
    //     // this.response = res
    // })
  }

}
}
  
</script>

<style>
footer{
  background-color: khaki;
}
  .form-control{
    border-radius: 100px;
  }
  #createProfileBtn:hover{
    background-color: white;
    color: #007bff;
  }
</style>