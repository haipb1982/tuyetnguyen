<template>
  
</template>

<script>
export default {
  mounted(){
	 localStorage.clear();
   this.$router.push("/");location.reload();
  }
};
</script>
