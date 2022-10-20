<script>
import BaseProject from '../components/ProjectComp.vue'

export default {
  name: "HomePage",
  components:{
    BaseProject
  },
};
</script>

<template>
  <!-- Home Start -->
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
          a web using Vue Framework. I hope you
        </p>
        <RouterLink :to="{name : 'contact'}">
          <button>Contact Me</button>
        </RouterLink>
      </div>
    </div>
  </div>

  <!-- Project Start -->
  <!-- <div class="project" id="projects">
    <h1 class="title">project</h1>
    <div class="sub-project">
      <div class="konten">
        <a href=""><img src="../assets/Calamity 1.png" alt="" /></a>
        <div class="desc">
          <h1>Calamity Landing Page</h1>
          <p>This is a Landing Page of Calamity Agency</p>
          <a href="https://calamity-agency.netlify.app/"
            ><button>Click Here</button></a
          >
        </div>
      </div>

      <div class="konten">
        <div class="desc">
          <h1>Portfolio V-1</h1>
          <p>This is a Landing Page of My First Portfolio</p>
          <a href="https://michaeltan99.github.io/michaeltanaya.github.io/"
            ><button>Click Here</button></a
          >
        </div>
        <a href=""
          ><img src="../assets/Portofolio-Michael-Tanaya 1.png" alt=""
        /></a>
      </div>

      <div class="konten">
        <a href=""><img src="../assets/form io 1.png" alt="" /></a>
        <div class="desc">
          <h1>Calamity Landing Page</h1>
          <p>This is a Landing Page of Form Input Ouput With Native</p>
          <a href="https://form-input-output-js.netlify.app/"
            ><button>Click Here</button></a
          >
        </div>
      </div>
    </div>
  </div> -->

  <BaseProject/>

</template>

<style>
/* Home Start */
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

/* Project Start */
.project {
  border: 1px solid black;
  width: 90%;
  margin-left: 5%;
  min-height: 100vh;
}
.title {
  text-transform: uppercase;
  text-align: center;
  color: white;
  margin-bottom: 20px;
}
.konten {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  cursor: pointer;
  margin-bottom: 50px;
}
.konten:hover {
  box-shadow: 0 2px 2px 0 rgba(239, 43, 43, 0.822),
    0 6px 20px 0 rgba(155, 27, 27, 0.86);
}
.konten a img {
  width: 300px;
  height: 300px;
}
.konten h1 {
  color: #d2001a;
}
.konten p {
  color: #ffff;
}
</style>
