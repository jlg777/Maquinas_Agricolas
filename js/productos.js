const { createApp } = Vue

createApp({
  data() {
    return {
      url: './js/datos_api.json',
      error: false,
      planta: [],
      cosecha: [],
      trac: [],
      bat: [],
    }
  },
  methods: {
    fetchdata(url) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.planta = data.Plantadoras
          this.cosecha = data.Cosechadoras
          this.trac = data.Tractores
          this.bat = data.Baterias
        }      
        )
        ;
    }
  },
  created() {
    this.fetchdata(this.url)
  }
}).mount('#app')