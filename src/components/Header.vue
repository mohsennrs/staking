<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="primary-dark">
    <b-navbar-brand href="#">
      <font-awesome-icon icon="fa-solid fa-bars" />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav class="mr-5">
      <b-navbar-nav>
        <b-nav-item href="#">
          <NavbarItem
            name="USDT"
            change="+0.020"
            price="1.001"
            icon="/Icons/usdt.png"
          />
        </b-nav-item>
        <b-nav-item href="#">
          <NavbarItem
            name="ETH"
            change="+5.269"
            price="1862"
            icon="/Icons/eth.png"
          />
        </b-nav-item>
        <b-nav-item href="#">
          <NavbarItem
            name="BTC"
            change="+8.29"
            price="33274.35"
            icon="/Icons/btc.png"
          />
        </b-nav-item>
        <b-navbar-brand href="#" class="profile">
          <img src="https://placekitten.com/g/30/30" alt="Kitten">
        </b-navbar-brand>
      </b-navbar-nav>


    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import NavbarItem from './NavbarItem.vue'
export default {
  name: 'Header',
  components: {
    NavbarItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .navbar {
    height: 64px;
  }

  .navbar-brand.profile {
    position: absolute;
    top: 14px;
    left: 14px;

    img {
      border-radius: 50%;
    }
  }
</style>
