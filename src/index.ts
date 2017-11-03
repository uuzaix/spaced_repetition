import Vue from "vue";

let v = new Vue({
  el: "#app",
  template: `
    <div>
        <div>{{cards[lastId]}}</div>
        <button v-on:click="increaseId">Next</button>
    </div>`,
  data: {
    cards: ["0", "1", "2", "3"],
    lastId: 0,
  },
  methods: {
    increaseId () {
      this.lastId = this.lastId + 1 >= this.cards.length
        ? 0
        : this.lastId + 1
    }
  }
});