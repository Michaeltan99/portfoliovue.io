import { defineStore } from "pinia";

const imageStore = defineStore({
  id: "image",
  state: () => ({
    list: [
      {
        slug: "Landing Page",
        title: "Landing Page Agency",
        img: "Calamity 1.png",
        Url:'https://calamity-agency.netlify.app/',
      },
      {
        slug: "Form",
        title: "Form Input Output",
        img: "form io 1.png",
        Url:'https://form-input-output-js.netlify.app/',
      },
      {
        slug: "Portfolio",
        title: "Portfolio V-1",
        img: "Portofolio-Michael-Tanaya 1.png",
        Url:'https://michaeltan99.github.io/Portfolio/',
      },
    ],
  }),
  actions: {},
  getters: {
    g$list: ({ list }) => list,
    g$detail: ({ list }) => {
      return (slug) => list.find((image) => image.slug == slug);
    },
  },
});

export default imageStore;
