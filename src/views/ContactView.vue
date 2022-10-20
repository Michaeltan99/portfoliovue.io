<script>
export default {
  name: "ContactView",
  components: {},
  data: () => ({
    title: "Contact",
    data: [],
    input: {
      name: "",
      email: "",
      message: "",
    },
  }),
  methods: {
    async submit() {
      const data = new FormData();
      Object.keys(this.input).forEach((key) =>
        data.append(key, this.input[key])
      );
      await fetch("https://formspree.io/f/xoqbnqpd", {
        method: "POST",
        body: data,
      });
      this.reset();
    },
    logEmits(event) {
      console.log("formEmits", event);
    },
  },
  watch: {
    "input.name"(val) {
      console.log("input name has changed to", val);
    },
  },
};
</script>

<template>
  <div class="contact-page">
    <div class="contact-view">
      <form @submit.prevent="submit" @reset="reset" class="form">
        <label for="name">Nama</label><br />
        <input type="text" v-model="input.name" name="name" class="name" />
        <br /><br />
        <label for="email">Email</label><br />
        <input type="email" v-model="input.email" name="email" class="email" />
        <br />
        <br />
        <label for="message">Message</label><br />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          v-model="input.message"
          class="msg"
        >
        </textarea>
        <br /><br />
        <button type="submit" class="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<style>
.contact-view {
  width: 90%;
  margin-left: 5%;
  min-height: 100vh;
  padding-top: 110px;
  color: white;
}
.form {
  margin-left: 42%;
}
.name {
  color: white;
  width: 200px;
  padding: 10px;
}
.email {
  color: white;
  width: 200px;
  padding: 10px;
}
.msg {
  color: white;
  width: 200px;
  padding: 10px;
}
</style>
