<script>

</script>

<template>
  <div class="nav">
    <div class="content">
      <div class="logo">
        <img src="../assets/logo.png" alt="" />
      </div>
      <div class="list">
          <a href="#home" class="nav-link">Home</a>
          <a href="#projects" class="nav-link">Projects</a>
      </div>
      <div class="contact">
        <RouterLink :to="{ name: 'contact' }" class="nav-contact"
          >Contact Me</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav{
  position: fixed;
  width: 100%;
  border: 1px solid black;
  height: 110px;
  background-color: #000000;
}
.content{
  display: flex;
  padding-top: 40px;
  justify-content: space-around;
  color: #D2001A;
  align-items: center;
}
.logo img{
  width: 50px;
  height: 50px;
}
.list{
  display: flex;
  gap: 1rem;
  align-items: center;
}
.nav-link{
  text-decoration: none;
  color: black;
  padding: 10px;
  color: #ffff;
}
.nav-link:hover{
  background-color: #D2001A;
  transition: 0.8s all;
}

.nav-contact{
  text-decoration: none;
  color: black;
  padding: 10px;
  color: #ffff;
}
.nav-contact:hover{
  background-color: #D2001A;
  transition: 0.8s all;
}
</style>
