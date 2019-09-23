<template>
  <div class="  container p-0 bg-light">
    <div class="  row">
      <div class="  col-md-6 nav justify-content-end">
        <image class="  img-responsive icon icon-4" src="/static/images/icon/dealer_list/clientImg.png"></image>
        <div class="_p ">HI,{{user.name}}</div>
      </div>
      <div class="  col-md-6">
        <div class=" ">
          <div class=" ">退出登陆</div>
        </div>
        <image class="  icon icon-1" src="/static/images/icon/dealer_list/settings.png" alt></image>
      </div>
    </div>
    <div class="_ul  nav nav-justified shadow mb-2 fixed-top" style="z-index: 10000">
      <div class="_li  nav-item {{[  params.tab === 'all' ? 'active' : '',  params.tab === 'all' ? 'text-primary' : '']}}" bindtap="handleProxy" data-eventid="{{'0'}}" data-comkey="{{$k}}"><label class="_span  nav-link">
          {{clientAll}}
          <div class="_br "></div>商户总数
        </label></div>
      <div class="_li  nav-item {{[  params.tab === 'good' ? 'active' : '',  params.tab === 'good' ? 'text-primary' : '']}}" bindtap="handleProxy" data-eventid="{{'1'}}" data-comkey="{{$k}}"><label class="_span  nav-link">
          {{advertisingAll}}
          <div class="_br "></div>广告总数
        </label></div>
      <div class="_li  nav-item {{[  params.tab === 'ask' ? 'active' : '',  params.tab === 'ask' ? 'text-primary' : '']}}" bindtap="handleProxy" data-eventid="{{'2'}}" data-comkey="{{$k}}"><label class="_span  nav-link">
          {{getMoney}}
          <div class="_br "></div>打赏金额
        </label></div>
      <div class="_li  nav-item {{[  params.tab === 'job' ? 'active' : '',  params.tab === 'job' ? 'text-primary' : '']}}" bindtap="handleProxy" data-eventid="{{'3'}}" data-comkey="{{$k}}"><label class="_span  nav-link">
          {{clientTopup}}
          <div class="_br "></div>商户充值
        </label></div>
    </div>
    <div class="_ul  nav nav-justified shadow mb-2 fixed-top" style="z-index: 10000">
      <div class="_li  nav-item {{[  params.tab === 'all' ? 'active' : '',  params.tab === 'all' ? 'text-primary' : '']}}" bindtap="handleProxy" data-eventid="{{'4'}}" data-comkey="{{$k}}">
        <image class="  icon icon-2" src="/static/images/icon/dealer_list/merchantManagement.jpg" alt></image> <label class="_span  nav-link">商户管理</label>
      </div>
      <div class="_li  nav-item {{[  params.tab === 'good' ? 'active' : '',  params.tab === 'good' ? 'text-primary' : '']}}" bindtap="handleProxy" data-eventid="{{'5'}}" data-comkey="{{$k}}">
        <image class="  icon icon-2" src="/static/images/icon/dealer_list/clerkManagement.png" alt></image> <label class="_span  nav-link">店员管理</label>
      </div>
      <div class="_li  nav-item {{[  params.tab === 'ask' ? 'active' : '',  params.tab === 'ask' ? 'text-primary' : '']}}" bindtap="handleProxy" data-eventid="{{'6'}}" data-comkey="{{$k}}">
        <image class="  icon icon-2" src="/static/images/icon/dealer_list/couponManagement.jpg" alt></image> <label class="_span  nav-link">活动券管理</label>
      </div>
      <div class="_li  nav-item {{[  params.tab === 'job' ? 'active' : '',  params.tab === 'job' ? 'text-primary' : '']}}" bindtap="handleProxy" data-eventid="{{'7'}}" data-comkey="{{$k}}">
        <image class="  icon icon-2" src="/static/images/icon/dealer_list/advertisingManagement.jpg" alt></image> <label class="_span  nav-link">广告管理</label>
      </div>
    </div>
    <div class=" ">
      <div class=" ">资金管理</div>
      <div class=" ">
        <div class="_ul  nav nav-justified shadow mb-2 fixed-top" style="z-index: 10000">
          <div class="_li  nav-item {{[  params.tab === 'all' ? 'active' : '',  params.tab === 'all' ? 'text-primary' : '']}}" bindtap="handleProxy" data-eventid="{{'8'}}" data-comkey="{{$k}}">
            <image class="  icon icon-3" src="/static/images/icon/dealer_list/myMoney.jpg" alt></image> <label class="_span  nav-link">
              <div class="_br "></div>我的资金
            </label>
          </div>
          <div class="_li  nav-item {{[  params.tab === 'good' ? 'active' : '',  params.tab === 'good' ? 'text-primary' : '']}}" bindtap="handleProxy" data-eventid="{{'9'}}" data-comkey="{{$k}}">
            <image class="  icon icon-3" src="/static/images/icon/dealer_list/comingSoon.jpg" alt></image> <label class="_span  nav-link">
              <div class="_br "></div>打赏管理
            </label>
          </div>
          <div class="_li  nav-item {{[  params.tab === 'ask' ? 'active' : '',  params.tab === 'ask' ? 'text-primary' : '']}}" bindtap="handleProxy" data-eventid="{{'10'}}" data-comkey="{{$k}}">
            <image class="  icon icon-3" src="/static/images/icon/dealer_list/clientTopup.jpg" alt></image> <label class="_span  nav-link">
              <div class="_br "></div>商户充值
            </label>
          </div>
          <div class="_li  nav-item {{[  params.tab === 'job' ? 'active' : '',  params.tab === 'job' ? 'text-primary' : '']}}" bindtap="handleProxy" data-eventid="{{'11'}}" data-comkey="{{$k}}">
            <image class="  icon icon-3" src="/static/images/icon/dealer_list/advertisingDetail.jpg" alt></image> <label class="_span  nav-link">
              <div class="_br "></div>广告明细
            </label>
          </div>
          <div class="_li  nav-item {{[  params.tab === 'all' ? 'active' : '',  params.tab === 'all' ? 'text-primary' : '']}}" bindtap="handleProxy" data-eventid="{{'12'}}" data-comkey="{{$k}}">
            <image class="  icon icon-3" src="/static/images/icon/dealer_list/clientsRun.jpg" alt></image> <label class="_span  nav-link">
              <div class="_br "></div>商户提现
            </label>
          </div>
          <div class="_li  nav-item {{[  params.tab === 'good' ? 'active' : '',  params.tab === 'good' ? 'text-primary' : '']}}" bindtap="handleProxy" data-eventid="{{'13'}}" data-comkey="{{$k}}">
            <image class="  icon icon-3" src="/static/images/icon/dealer_list/dealerRun.jpg" alt></image> <label class="_span  nav-link">
              <div class="_br "></div>经销商提现
            </label>
          </div>
          <div class="_li  nav-item {{[  params.tab === 'ask' ? 'active' : '',  params.tab === 'ask' ? 'text-primary' : '']}}" bindtap="handleProxy" data-eventid="{{'14'}}" data-comkey="{{$k}}">
            <image class="  icon icon-3" src="/static/images/icon/dealer_list/salesclerkRun.jpg" alt></image> <label class="_span  nav-link">
              <div class="_br "></div>店员提现
            </label>
          </div>
          <div class="_li  nav-item {{[  params.tab === 'job' ? 'active' : '',  params.tab === 'job' ? 'text-primary' : '']}}" bindtap="handleProxy" data-eventid="{{'15'}}" data-comkey="{{$k}}">
            <image class="  icon icon-3" src="/static/images/icon/dealer_list/comingSoon.jpg" alt></image> <label class="_span  nav-link">
              <div class="_br "></div>敬请期待
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class=" ">
      <div class=" ">
        <image class="  icon icon-1" src="/static/images/icon/dealer_list/administrationAuthority.jpg" alt></image> <label class="_span  nav-link">
          <div class="_br "></div>权限管理
        </label>
      </div>
      <div class=" ">
        <image class="  icon icon-1" src="/static/images/icon/dealer_list/log.jpg" alt></image> <label class="_span  nav-link">
          <div class="_br "></div>员工日志
        </label>
      </div>
    </div>
    <div class=" ">
      <image class="  icon icon-3" src="/static/images/icon/dealer_list/merchantName.png" alt></image>
    </div>
    <div class=" "></div>
    <div class=" "></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>