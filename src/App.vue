<template>
  <div id="app">

    <header>
      <HeadMenu :isSidebarShow="sidebar.isShow"
                @hide-sidebar="hideSidebar"/>
    </header>


    <main>
      <SideBar :isSidebarShow="sidebar.isShow"/>
      <WorkArea :items="constructorItems">

      </WorkArea>
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

  data:  () => {
    return {
      sidebar: {
        isShow: true
      },
      constructorItems: {
        container: 'container'

      }
    }
  },

  methods: {
    hideSidebar() {
      this.sidebar.isShow = !this.sidebar.isShow;
    }
  }
}
</script>

<style>
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    display: flex;
    flex-grow: 1;
    background: burlywood;
  }

  footer {
    /* Чтобы footer не уменьшался */
    flex-shrink: 0;
    background: cadetblue;
  }

  p {
    margin: 0
  }
</style>
