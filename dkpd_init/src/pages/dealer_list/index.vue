<template>
  <!-- 响应式布局  外边距0  光亮背景   -->
  <div class="container p-0 bg-light">
    <div class="row">
      <div class="col-md-6 nav justify-content-end">
        <img class="img-responsive icon icon-4" src="/static/images/icon/dealer_list/clientImg.png" />
        <p>HI,{{user.name}}</p>
      </div>
      <div class="col-md-6">
        <div>
          <div>退出登陆</div>
        </div>
        <img class="icon icon-1" src="/static/images/icon/dealer_list/settings.png" alt />
      </div>
    </div>

    <!-- 统计栏 -->
    <ul class="nav nav-justified shadow mb-2 fixed-top" style="z-index: 10000">
      <li
        class="nav-item"
        v-bind:class="{ active: params.tab === 'all', 'text-primary': params.tab === 'all' }"
        @click="selectTab('all')"
      >
        <span class="nav-link">
          {{clientAll}}
          <br />商户总数
        </span>
      </li>
      <li
        class="nav-item"
        v-bind:class="{ active: params.tab === 'good', 'text-primary': params.tab === 'good' }"
        @click="selectTab('good')"
      >
        <span class="nav-link">
          {{advertisingAll}}
          <br />广告总数
        </span>
      </li>
      <li
        class="nav-item"
        v-bind:class="{ active: params.tab === 'ask', 'text-primary': params.tab === 'ask' }"
        @click="selectTab('ask')"
      >
        <span class="nav-link">
          {{getMoney}}
          <br />打赏金额
        </span>
      </li>
      <li
        class="nav-item"
        v-bind:class="{ active: params.tab === 'job', 'text-primary': params.tab === 'job' }"
        @click="selectTab('job')"
      >
        <span class="nav-link">
          {{clientTopup}}
          <br />商户充值
        </span>
      </li>
    </ul>

    <!-- 管理栏 -->
    <ul class="nav nav-justified shadow mb-2 fixed-top" style="z-index: 10000">
      <li
        class="nav-item"
        v-bind:class="{ active: params.tab === 'all', 'text-primary': params.tab === 'all' }"
        @click="selectTab('all')"
      >
        <img class="icon icon-2" src="/static/images/icon/dealer_list/merchantManagement.jpg" alt />
        <span class="nav-link">商户管理</span>
      </li>
      <li
        class="nav-item"
        v-bind:class="{ active: params.tab === 'good', 'text-primary': params.tab === 'good' }"
        @click="selectTab('good')"
      >
        <img class="icon icon-2" src="/static/images/icon/dealer_list/clerkManagement.png" alt />
        <span class="nav-link">店员管理</span>
      </li>
      <li
        class="nav-item"
        v-bind:class="{ active: params.tab === 'ask', 'text-primary': params.tab === 'ask' }"
        @click="selectTab('ask')"
      >
        <img class="icon icon-2" src="/static/images/icon/dealer_list/couponManagement.jpg" alt />
        <span class="nav-link">活动券管理</span>
      </li>
      <li
        class="nav-item"
        v-bind:class="{ active: params.tab === 'job', 'text-primary': params.tab === 'job' }"
        @click="selectTab('job')"
      >
        <img class="icon icon-2" src="/static/images/icon/dealer_list/advertisingManagement.jpg" alt />
        <span class="nav-link">广告管理</span>
      </li>
    </ul>

    <!-- 资金管理 -->
    <div>
      <div>资金管理</div>
      <div>
        <ul class="nav nav-justified shadow mb-2 fixed-top" style="z-index: 10000">
          <li
            class="nav-item"
            v-bind:class="{ active: params.tab === 'all', 'text-primary': params.tab === 'all' }"
            @click="selectTab('all')"
          >
            <img class="icon icon-3" src="/static/images/icon/dealer_list/myMoney.jpg" alt="">
            <span class="nav-link">
              <br />我的资金
            </span>
          </li>
          <li
            class="nav-item"
            v-bind:class="{ active: params.tab === 'good', 'text-primary': params.tab === 'good' }"
            @click="selectTab('good')"
          >
            <img class="icon icon-3" src="/static/images/icon/dealer_list/comingSoon.jpg" alt="">
            <span class="nav-link">
              <br />打赏管理
            </span>
          </li>
          <li
            class="nav-item"
            v-bind:class="{ active: params.tab === 'ask', 'text-primary': params.tab === 'ask' }"
            @click="selectTab('ask')"
          >
            <img class="icon icon-3" src="/static/images/icon/dealer_list/clientTopup.jpg" alt="">
            <span class="nav-link">
              <br />商户充值
            </span>
          </li>
          <li
            class="nav-item"
            v-bind:class="{ active: params.tab === 'job', 'text-primary': params.tab === 'job' }"
            @click="selectTab('job')"
          >
            <img class="icon icon-3" src="/static/images/icon/dealer_list/advertisingDetail.jpg" alt="">
            <span class="nav-link">
              <br />广告明细
            </span>
          </li>
          <li
            class="nav-item"
            v-bind:class="{ active: params.tab === 'all', 'text-primary': params.tab === 'all' }"
            @click="selectTab('all')"
          >
            <img class="icon icon-3" src="/static/images/icon/dealer_list/clientsRun.jpg" alt="">
            <span class="nav-link">
              <br />商户提现
            </span>
          </li>
          <li
            class="nav-item"
            v-bind:class="{ active: params.tab === 'good', 'text-primary': params.tab === 'good' }"
            @click="selectTab('good')"
          >
            <img class="icon icon-3" src="/static/images/icon/dealer_list/dealerRun.jpg" alt="">
            <span class="nav-link">
              <br />经销商提现
            </span>
          </li>
          <li
            class="nav-item"
            v-bind:class="{ active: params.tab === 'ask', 'text-primary': params.tab === 'ask' }"
            @click="selectTab('ask')"
          >
            <img class="icon icon-3" src="/static/images/icon/dealer_list/salesclerkRun.jpg" alt="">
            <span class="nav-link">
              <br />店员提现
            </span>
          </li>
          <li
            class="nav-item"
            v-bind:class="{ active: params.tab === 'job', 'text-primary': params.tab === 'job' }"
            @click="selectTab('job')"
          >
            <img class="icon icon-3" src="/static/images/icon/dealer_list/comingSoon.jpg" alt="">
            <span class="nav-link">
              <br />敬请期待
            </span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 权限与日志 -->
    <div>
      <div>
        <img class="icon icon-1" src="/static/images/icon/dealer_list/administrationAuthority.jpg" alt="">
            <span class="nav-link">
              <br />权限管理
            </span>
      </div>
      <div>
        <img class="icon icon-1" src="/static/images/icon/dealer_list/log.jpg" alt="">
            <span class="nav-link">
              <br />员工日志
            </span>
      </div>
    </div>

    <!-- 广告排行 -->
    <div>
      <img class="icon icon-3" src="/static/images/icon/dealer_list/merchantName.png" alt="">
      
    </div>

    <!-- 打赏排行 -->
    <div></div>

    <!-- 评价排行 -->
    <div></div>
  </div>
</template>

<script>
//import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default {
  data: {
    user: {
      name: "name"
    }
  }
};
</script>

<style>
.container {
  background-color: blueviolet;
}

p {
  color: aqua;
}
</style>