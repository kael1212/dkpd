<template>
  <div class="merchantrecycle">
    <!-- 标题栏 -->
    <div class="headline">
      <img class="recycle_top position-1" src="/static/images/picture/recycle_top.png" />
      <div>
        <img
          class="title-left-position position-2 icon-1 first-img"
          src="/static/images/icon/advertising_management/retreat.png"
        />
        <span class="title position-1 top title-font-size font-color-1">{{title}}</span>
      </div>
    </div>

    <div class="main-padding">
      <!-- 搜索框 -->
      <!-- <searchbox></searchbox> -->
      <div class="width-all height-6 margin-top-7">
        <input class="display-1 font-size-2 width-90" type="text" placeholder="请输入商家名称查询" />
        <img
          class="width-10 display-1 icon-2"
          src="/static/images/icon/advertising_management/search.png"
          alt
        />
      </div>

      <!-- 数据列表 -->
      <div class="salesclerk_thirdly position-2 margin-top-6">
        <ul class="list-1 center">
          <li class="width-20 display-1">
            <img class="icon-13" src="/static/images/photo/photo-1.jpg" alt />
          </li>
          <li class="width-50 display-1">
            <div class="float-left padding-left-2">
              <div class="left height-5 font-size-3">商户名称</div>
              <div class="left height-3 font-size-2">{{name}}&nbsp;&nbsp;{{number}}</div>
              <div class="left height-3 font-color-5">
                <p class="display-1 font-size-2">状态&nbsp;:&nbsp;</p>
                <p class="display-1 font-color-3 font-size-2">{{state}}</p>
              </div>
            </div>
          </li>
          <li class="width-30 height-8  center-2 display-1 font-size-2 font-color-1">
            <div class="width-60 background-color-1 border-radius-1 ">
              <img class="display-1 icon-03" src="/static/images/icon/icon-1.png" />
              <div class="display-1 center-2 font-size-2 font-color-1 margin-left-1">恢复</div>
            </div>
          </li>
        </ul>
        <div style="clear:both"></div>
      </div>
    </div>
  </div>
</template>

<script>
import searchbox from "@/components/searchbox.vue";
import listelement from "@/components/listelement.vue";

export default {
  data: {
    title: "商家回收站",
    name: "张总",
    number: 131022352565,
    state: "冻结"
  }
};

components: {
  searchbox;
  listelement;
}
</script>