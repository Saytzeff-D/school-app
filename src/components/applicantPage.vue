<template>
    <div class="container">
        <div class="row">
            <div class="col-6">
            <p class="h5 p-3 float-left animate__animated animate__slideInLeft">Welcome, Dear <span v-html="applicantName"></span></p>
            </div>
            <div class="col-6">
                <div class="d-flex justify-content-end">
                    <button class="btn btn-light m-3" @click="logout()">Logout <i class="fa fa-sign-out text-success"></i></button>
                </div>
            </div>
        </div>
        <p class="text-center font-weight-bold shadow-lg">You are applying for the ongoing admission exercise into the academy</p>
        <div class="row animate__animated animate__slideInRight">
            <div class="col-md-2 border-right">
                <img :src="require(`../assets/${applicantTray.passport}`)" class="img rounded-pill" width="150px" height="150px" alt="">
            </div>
            <div class="col-md-5 border-right">
                <p class="font-weight-bold">Examination Number: <span class="text-success">{{applicantTray.exam_num}}</span></p>
                <p class="font-weight-bold">Entry Type: <span class="text-success">{{applicantTray.entry_type}}</span></p>
                <p class="font-weight-bold">E-mail Address: <span class="text-success">{{applicantTray.email}}</span></p>
                <p class="font-weight-bold">Date of Birth: <span class="text-success">{{applicantTray.dob}}</span></p>
            </div>
            <div class="col-md-5">
                <p class="font-weight-bold">Phone Number: <span class="text-success">{{applicantTray.phone_num}}</span></p>
                <p class="font-weight-bold">State of Origin: <span class="text-success">{{applicantTray.state_of_origin}}</span></p>
                <p class="font-weight-bold">Gender: <span class="text-success">{{applicantTray.gender}}</span></p>
                <p class="font-weight-bold">Application Payment: <span class="text-success">{{applicantTray.status}}</span></p>
            </div>
        </div>
        <hr>
        <p class="text-center text-danger font-weight-bold">Note: Failure to pay an application fee of #2000 will forfeit your right to sit for the entrance examination</p>
        <hr>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "ApplicantPage",
    data(){
        return{
            applicantName: '',
            id: sessionStorage.getItem('applicantId'),
            applicantTray: {}
        }
    },
    methods: { 
        logout(){
            this.$router.push('/apply/updateApply')
            sessionStorage.removeItem('applicantId')
        }
    },
    mounted(){
        if(this.id){
        let postObj = {type: 'applicantPage', id: this.id}
        axios.post('http://localhost/api/schoolApp/config.php', postObj).then((res)=>{
            console.log(res.data)
                this.applicantName = '<span class="text-uppercase">' + res.data.surname + ', ' + '</span>' + '<span>' + res.data.first_name + ' ' + res.data.middle_name + '</span>';
                this.applicantTray = res.data
        })
            }
            else{ this.$router.push('apply/updateApply') }
    }
}
</script>

<style>
    
</style>