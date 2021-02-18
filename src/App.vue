<template>
  <div id="app"
       @mousemove="mouseMove"
       @dragstart="false">

    <header>
      <HeadMenu />
    </header>


    <main>
      <SideBar />

      <WorkArea />
    </main>

    <footer>
      <p class="p-3">Some footer</p>
    </footer>

  </div>
</template>

<script>
import HeadMenu from './components/HeadMenu.vue';
import SideBar from './components/SideBar';
import WorkArea from './components/WorkArea';


export default {
  name: 'App',
  components: {
    HeadMenu,
    SideBar,
    WorkArea
  },

  methods: {
    mouseMove(cursor) {
      this.$store.commit('mousePosition', cursor)
    }
  }
}





</script>

<style>
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    user-select: none;
  }

  main {
    display: flex;
    flex-grow: 1;
    background: burlywood;
  }

  footer {
    flex-shrink: 0;
    background: cadetblue;
  }

  p {
    margin: 0
  }
</style>
