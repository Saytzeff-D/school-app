<template>
  <div>
     <div class="container-fluid pb-3" style="background-color: #EEEEEB;">
        <h3 class="text-secondary text-uppercase p-2"><i class="fa fa-home"></i> home</h3>
        <div class="container bg-white pb-2">
          <i class="fa fa-home pr-1"></i>Home / <i class="fa fa-briefcase pr-1"></i>Apply
        </div>
      </div>
      <div class="w-100" id="homebackground">
        <div class="container pb-5 mb-5">
        <h4 id="royal" class="float-left pl-5 pt-3 font-weight-bold text-white text-uppercase">Shining Stars</h4>
          <h5 class="float-right pr-5 pt-3 font-weight-bold text-white">
            Tutor's Login
             <button class="btn btn-light text-secondary">
               <router-link to="/tutor_login" style="text-decoration: none; color: grey;">Sign In</router-link>
               </button>
               </h5>
      </div>
      <div id="first-animation" class="container pt-5 text-center text-white">
          <h2 class="font-weight-bold">Enrol your ward today...</h2>
          <h6>A trial will convince you</h6>
          </div>
          <div id="second-animation" class="container text-center text-white">
        <h2 class="font-weight-bold">A trial will convince you</h2>
        <h6>Enrol your ward today...</h6>
      </div>
      </div>
      </div>
</template>
// cleptomaniac
<script>
export default {
  name: "FirstComponent"
}
</script>

<style>
#first-animation{
  animation: advert;
  animation-iteration-count: infinite;
  animation-duration: 4s;
}
#second-animation{
  animation: example;
  animation-iteration-count: infinite;
  animation-duration: 4s;
  margin-top: -75px;
  opacity: 0;
}
@keyframes advert{
  0%, 49%{opacity: 1;}
  50%, 100%{opacity: 0;}
}
@keyframes example{
  0%, 49%{opacity: 0;}
  50%, 100%{opacity: 1;}
}
#royal{
  letter-spacing: 10px;
}
  #homebackground{
    /* background: repeating-linear-gradient(khaki 10%, green 20%); */
    background: radial-gradient(green,khaki);
    height: 436px;
  }
</style>
