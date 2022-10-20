<template>
  <div class="isi" id="home">
    <div class="sub-isi">
      <img src="../assets/foto.png" alt="" />
      <div class="deskripsi">
        <h4>Hello I'm Michael</h4>
        <h3>Web Developer</h3>
        <p>
          I'm Student at Udayana University. I'm a Web Developer Enthusiast.
          <br />
          I've been learn HTML, CSS, Javascript. But this is my first time
          create <br />
          a web using Vue Framework.
        </p>
        <RouterLink :to="{ name: 'contact' }">
          <button>Contact Me</button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style>
.isi {
  border: 1px solid black;
  width: 90%;
  margin-left: 5%;
  min-height: 100vh;
  padding-top: 110px;
}
.sub-isi {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.sub-isi img {
  width: 500px;
  height: 500px;
}
.deskripsi {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.deskripsi h4 {
  color: #d2001a;
  letter-spacing: 1px;
}
.deskripsi h3 {
  color: #ffff;
  font-size: 40px;
  letter-spacing: 1px;
}
.deskripsi p {
  color: #ffff;
  letter-spacing: 1px;
  line-height: 30px;
}
button {
  background-color: #d2001a;
  color: #ffff;
  text-transform: uppercase;
  padding: 10px;
  width: 100px;
  font-weight: 700;
}
button:hover {
  background-color: #ffff;
  color: black;
  transition: 0.8s all;
  cursor: pointer;
}
</style>
