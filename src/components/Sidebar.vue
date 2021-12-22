<template>
  <div>
   <b-sidebar id="sidebar-1" title="Sidebar" right shadow visible no-header no-close-on-backdrop no-close-on-route-change bg-variant="dark-blue" class="text-right" width="17%">
     <div id="sidebar-no-header-title" class="d-flex justify-content-center py-4">
        <img src="/Icons/eth.png" alt="">
      </div>
      <div class="py-2" style="padding:25px;">
        <div class="card border-0 ">
          <div class="card-body bg-gray text-light-gray">
            <div class="row">
              <div class="col-10">
                <p class="">کل کیف پول‌های بایننس</p>
                <div class="d-flex justify-content-between">
                  <p>موجودی:</p>
                  
                  
                </div>
                <div class="d-flex justify-content-center">
                  <p class="text-left"><span class="bold d-inline text-white" style="font-size:22px"> 147.42</span> USDT</p>
                </div>
              </div>     
              <div class="pt-3 d-flex justify-content-end"> 
                <font-awesome-icon icon="fa-solid fa-angle-left " size="2x"/>
              </div>
            </div>

          </div>
        </div>
        <div class="menu-items text-white p-1 pt-4">
          
          <div>
            <b-nav vertical class="p-0">
              <b-nav-item><h5 class="text-white">منوی کاربری</h5></b-nav-item>
              <b-nav-item>
                <font-awesome-icon icon="fa-solid fa-gauge" size="xl"/>
                <span> داشبورد</span>
              </b-nav-item>
              <b-nav-item>
                <font-awesome-icon icon="fa-solid fa-chart-line"  size="xl"/>
                <span> شاخص ها</span>
              </b-nav-item>
              <b-nav-item>
                <font-awesome-icon icon="fa-solid fa-calculator"  size="xl"/>
                <span> داشبورد معاملات</span>
              </b-nav-item>
              <b-nav-item>
                <font-awesome-icon icon="fa-solid fa-briefcase"  size="xl"/>
                <span> اکانت بیزینس</span>
              </b-nav-item>
              <b-nav-item class="nested-nav-item">
                <span class="mr-5">نمای کلی حساب</span>
              </b-nav-item>
              <b-nav-item class="nested-nav-item">
                <span class="mr-5">کیف پول</span>
              </b-nav-item>
              <b-nav-item class="nested-nav-item" active>
                <router-link to="/earn" class="mr-5"> درآمد (Earn)</router-link>
              </b-nav-item>
              <b-nav-item class="nested-nav-item">
                <span class="mr-5">تاریخچه ی معاملات</span>
              </b-nav-item>
              <b-nav-item>
                <font-awesome-icon icon="fa-solid fa-gear" size="xl"/>
                <span>تنظیمات</span>
              </b-nav-item>
              <b-nav-item>
                <font-awesome-icon icon="fa-solid fa-envelope" size="xl"/>
                <span>گزارش‌های شما</span>
              </b-nav-item>
            </b-nav>
          </div>
        </div>
        
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped> 
  @import '../assets/variables.scss';
  .b-sidebar {
    width: 17% !important;

    .b-sidebar-body {
      padding: 25px;
    }
  }
  .card {
    border-radius: 4px;
    line-height: 1;
  }

  .nav-item {
    // margin: 5px 0 5px 0;
    .nav-link {
      color: $light-gray;

      span {
        margin: 0 10px 0 0;
      }

      &.active {
        color: $light-gold;
      }

      a {
        color: inherit;
      }
    }
  }
</style>
