<template>
 <div class="bigbox">
     <mysql-header></mysql-header>
     <mysql-section></mysql-section>
    <common-foot3></common-foot3>
 </div>
</template>

<script>
import MysqlHeader from "../components/world/MysqlHeader";
import MysqlSection from "../components/world/MysqlSection";
import CommonFoot3 from"../components/CommonFoot/CommonFoot3.vue"
 export default {
    // name:"Mysql",
   data () {
     return {

     }
   },
   components: {
       MysqlHeader,
       MysqlSection,
       CommonFoot3
   }
 }
</script>

<style scoped lang="scss">
.bigbox{
  height: 100%;
  display: -webkit-flex;
  flex-direction: column;
}

</style>
