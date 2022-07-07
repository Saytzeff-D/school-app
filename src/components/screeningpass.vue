<template>
  <div>
    <h4 class="text-capitalize text-secondary text-center pt-3">Print Examination Pass</h4>
    <h5 class="text-center text-danger pl-1 pr-1">Kindly provide your EXAMINATION NUMBER and SURNAME
    </h5>
    <div class="container">
      <form action="" class="p-4">
        <div class="form-group col w-100">
          <input type="text" placeholder="EXAMINATION NUMBER" class="form-control">
        </div>
        <div class="form-group col">
          <input type="text" placeholder="SURNAME" class="form-control">
        </div>
        <div class="d-flex justify-content-center pb-4">
          <button class="btn btn-primary">PRINT EXAMINATION PASS</button>
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
// import axios from "axios";
export default {
  name: 'Screening',

  data(){
    return{
      examNum: '',
      surname: ''
    }
  }
}
</script>
