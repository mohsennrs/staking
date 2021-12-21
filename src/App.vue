<template>
  <div id="app" dir="rtl">
    <aside>
      <Sidebar/>
    </aside> 
    <nav id="header"> 
      <Header/>
    </nav>
    <main>
      <router-view></router-view>
    </main>
    
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    Header,
    Sidebar
  }
}
</script>

<style lang="scss">
  @import './assets/variables.scss';
  aside {
    width: 17%;
    position: fixed;
    right: 0;
  }
  nav#header {
    position: fixed;
    width: 83%;
    left: 0;
  }
  #app {
    background-color: $pale-gray;
  }

  main {
    position: absolute;
    top: 64px;
    width: 83%;
    left: 0;
    padding: 22px;
    text-align: right;
  }
</style>
