<template>
  <div class="nav">
    <div class="content">
      <div class="logo">
        <img src="../assets/logo.png" alt="" />
      </div>
      <div class="list">
        <RouterLink class="nav-link" :to="{ name: 'desc' }">Home</RouterLink>
        <RouterLink class="nav-link" :to="{name: 'project'}">Project</RouterLink>
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
.nav {
  position: fixed;
  width: 100%;
  border: 1px solid black;
  height: 110px;
  background-color: #000000;
  top: 0;
}
.content {
  display: flex;
  padding-top: 40px;
  justify-content: space-around;
  color: #d2001a;
  align-items: center;
}
.logo img {
  width: 50px;
  height: 50px;
}
.list {
  display: flex;
  gap: 1rem;
  align-items: center;
}
.nav-link {
  text-decoration: none;
  color: black;
  padding: 10px;
  color: #ffff;
}
.nav-link:hover {
  background-color: #d2001a;
  transition: 0.8s all;
}

.nav-contact {
  text-decoration: none;
  color: black;
  padding: 10px;
  color: #ffff;
}
.nav-contact:hover {
  background-color: #d2001a;
  transition: 0.8s all;
}
</style>
