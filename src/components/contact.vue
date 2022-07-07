<template>
  <div>
    <h3 class="text-success text-center pt-3">Contact our FAQ</h3>
      <form style="background: #e6b800;" class="mb-3 ml-5 mr-5 mt-0 p-5 border-top border-right border-left border-bottom" action="" method="get">
         <div class="form-row pb-5">
          <input id="contact" type="text" name="Name" placeholder="Name" class="form-control col-5 pl-3">
          <input type="text" id="contact" name="Phone" placeholder="Phone" class="form-control col-5 offset-1 pl-3">
        </div>
           <div class="form-row pb-5">
          <input type="text" name="Email" id="contact" placeholder="Email" class="form-control col-5 pl-3">
          <input type="text" name="Subject" id="contact" placeholder="Subject" class="form-control col-5 offset-1 pl-3">
        </div>
        <div class="form-group">
          <textarea name="Message" placeholder="Message"  class="form-control pl-5" id="contact" cols="30" rows="5"></textarea>
        </div>
        <button class="btn btn-warning">SEND</button>
      </form>
  </div>
</template>
<script>
export default {
  name: "Contact"
}
</script>
<style>
#contact{
  background-color: #ffe680 !important;
  color: white !important;;
}
</style>

