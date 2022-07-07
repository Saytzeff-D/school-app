<template>
  <div>
      <Nav class="pb-5 mb-4"/>
      <div class="wrapper">
        <div id="navigation">
      <SideNav/>
      </div>
      <div class="mt-5" >
     <router-view id="inform" />
     </div>
     </div>
  </div>
</template>

<script>
import Nav from "./components/nav"
import SideNav from "./components/sidenav"
export default {
  components: {
  Nav, SideNav

}
}
</script>

<style>
div.wrapper{
  display: flex;
  width: 100%;
}
#navigation {
    position: fixed;
    /* top: 50; */
    /* left: 0; */
    z-index: 999;
    transition: all 0.3s;
}
#inform{
  width: 1170px;
    min-height: 540px;
    transition: all 0.3s;
    position: absolute;
    right: 0;
    }
@import '~bootstrap/dist/css/bootstrap.css';
</style>
