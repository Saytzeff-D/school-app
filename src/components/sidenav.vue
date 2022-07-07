<template>
    <div>
        <section id="sidenav" class="bg-success border-top">
           <h6 class="text-white text-center p-4 border-bottom border-top" id="homie"><router-link to="/" id="sidenav-link"><i class="fa fa-home text-white pr-2"></i>Home</router-link></h6>
           <h6 class="text-white text-center p-4 border-bottom"><router-link to="/about" id="sidenav-link"><i class="fa fa-search text-white pr-2"></i>About</router-link></h6>
            <h6 class="text-white text-center p-4 border-bottom"><router-link to="/apply" id="sidenav-link"><i class="fa fa-briefcase text-white pr-2"></i>Apply</router-link></h6>
            <h6 class="text-white text-center p-4 border-bottom"><router-link to="/studentPortal" id="sidenav-link"><i class="fa fa-inbox text-white pr-2"></i>Student Portal</router-link></h6>
            <h6 class="text-white text-center p-4 border-bottom"><router-link to="/contact" id="sidenav-link"><i class="fa fa-cubes text-white pr-2"></i>Contact FAQ</router-link></h6>
        </section>
    </div>
</template>

<script>
export default {
    name: "SideNav"
}
</script>

<style>
    #sidenav{
        width: 200px;
        height: 547px;
        margin-top: 45px;
    }
    #sidenav-link{
        text-decoration: none;
        color: white;
    }
</style>