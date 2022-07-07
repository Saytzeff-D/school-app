<template>
    <div class="container w-50">
        <input type="file" name="picFile" id="myFile" class="d-none" @change="uploadPic">
        <img :src="require(`../assets/${passport}`)" class="img" width="150px" height="150px" alt="" @click="imgClick"><br>
        <p>Click the image to pick a Passport</p>
        <button class="ml-1 btn btn-success" @click="uploadPic">Upload Passport</button>
    </div>
</template>

<div class="container">
    <div class="container">
    <p class="h5 p-3 float-left">Welcome, Dear <span v-html="applicantName"></span></p>
    <button class="btn btn-light float-right m-3" @click="logout()">Logout <i class="fa fa-sign-out text-success"></i></button>
    </div>
    <hr>
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <img :src="require(`../assets/${applicantTray.passport}`)" class="img rounded-lg" width="150px" height="150px" alt="">
            </div>
        </div>
    </div>
</div>
<script>
// import axios from 'axios';
export default {
    name: 'Passport',
    data(){
        return{
            passport: 'user.png',
            applicant: sessionStorage.getItem('applicant')
        }
    },
    methods:{
        imgClick(){
            document.getElementById('myFile').click();
        },
        uploadPic(){
            let fileName = document.getElementById('myFile').files.item(0).name;
            console.log(fileName)
            this.passport = fileName
        }
    }
}
</script>
uploadPic(){
      let fileName = document.getElementById('myFile').files.item(0).name;
      console.log(fileName)
      this.file = fileName
  }
createProfile(){
      if (this.surname !== '' && this.fname !== '' && this.mname !== '' && this.dob !== '' && this.gender !== '' && this.phoneNum !== '' && this.email !== '' && this.stateOrigin !== '') {
        let applicant = {type: 'newApplication',examNum: this.examNum,surname: this.surname, firstName: this.fname, middleName: this.mname, DOB: this.dob, gender: this.gender, phoneNumber: this.phoneNum, emailAddress: this.email, stateOfOrigin: this.stateOrigin}
      let applicantObj = FormData()
      applicantObj.append('passport', this.file, this.file.name)
      applicantObj.append('applicant',applicant)
      console.log(applicantObj)
      // axios.post('http://localhost/api/schoolApp/config.php', applicantObj).then((res)=>{
      //   if(res.data.response == 'Applicant Saved Successfully'){
      //     sessionStorage.setItem('applicantId', res.data.id)
      //     this.$router.push('/applicantPage')
      //   }
      //   else{
      //     alert(res.data);
      //   }
      // })
      } else {
        // alert('Please fill the required field')
      }
    }