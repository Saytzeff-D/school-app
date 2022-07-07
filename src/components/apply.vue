<template>
  <div>
      <div class="container-fluid pb-3" style="background-color: #EEEEEB;">
        <h3 class="text-secondary text-uppercase pr-2 pt-2 pb-2 pl-3"><i class="fa fa-briefcase"></i> apply</h3>
        <div class="container bg-white pb-2">
          <i class="fa fa-home pr-1"></i>Home / <i class="fa fa-briefcase pr-1"></i>Apply
        </div>
      </div>
      <nav class="bg-primary">
        <router-link exact-active-class="active" to="/apply/" class="text-white pb-3 pl-5 pb-3 pr-3" id="butt" exact>New Application</router-link>
        <router-link exact-active-class="active" to="/apply/updateApply" class="text-white p-3" id="butt" exact>Update Application</router-link>
        <router-link exact-active-class="active" to="/apply/screening_pass" class="text-white p-3" id="butt" exact>Screening Pass</router-link>
        <router-link exact-active-class="active" to="/apply/screening_result" class="text-white p-3" id="butt" exact>Examination Result</router-link>
      </nav>

             
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Apply",
  
}
</script>

<style>
.active {
  background-color: white;
  color: #007bff !important;
}
 #butt{
   text-decoration: none;
 }
</style>