<template>
  <div>
    <!-- 标题栏 -->
    <div class="title">
      <div class="tilte-img-1 display-1">
        <img class="icon-3" src="/static/images/icon/salesclerk-2.jpg" />
      </div>
      <div class="title-1 display-1 title-font-size font-color-2 margin-left-1">
        <div>{{title}}</div>
      </div>
      <div class="tilte-img-2 display-1">
        <img class="icon-2-2" src="/static/images/icon/salesclerk-1.jpg" />
      </div>
    </div>

    <div class="allbody">
      <!-- 搜索框 -->
      <div class="second-1 center">
        <img
          class="second-1-1 display-1 icon-4 margin-right-1"
          src="/static/images/icon/salesclerk-3.jpg"
        />
        <div class="second-1-2 display-1 font-size-3">回收站</div>
        <input
          class="left second-input display-1 margin-left-6 font-size-2"
          type="text"
          placeholder="店员名称查询"
        />
        <img
          class="second-1-4 search-icon display-1 icon-1-1"
          src="/static/images/icon/advertising_management/search.png"
          alt
        />
      </div>

      <!-- 数据列表 -->
      <div class="salesclerk_thirdly position-2 margin-top-6">
        <div class="list-1 center">
          <div class="list-1-1 display-1">
            <img class="icon-13" src="/static/images/photo/photo-1.jpg" alt="">
          </div>
          <div class="list-1-2 display-1">
            <div class="float-left padding-left-2">
              <p class="left font-size-3">员工名称</p>
              <p class="left font-size-2">员工编号&nbsp;:&nbsp;{{number}}</p>
              <div class="left font-color-5 ">
                <p class="display-1 font-size-2">状态&nbsp;:&nbsp;</p>
                <p class="display-1 font-color-3 font-size-2">{{state}}</p>
              </div>
            </div>
          </div>

          <div class="list-1-3 display-1">
            <div class="icon4 background-color-1 border-radius-1 margin-2">
              <img class="display-1 icon-03" src="/static/images/icon/icon-1.png">
              <div class="display-1 font-size-2 font-color-1">修改</div>
            </div>
            <div class="icon4 background-color-1 border-radius-1 margin-2">
              <img class="display-1 icon-03" src="/static/images/icon/icon-2.png">
              <div class="display-1 font-size-2 font-color-1">删除</div>
            </div>
          </div>
        </div>
        <div class="list-2 margin-top-4 font-size-2">
          <p class="display-1">所属商家&nbsp;:&nbsp;</p>
          <p class="display-1">
            {{merchantname}}
          </p>   
          <img class="display-1 icon-3-1 float-right" src="/static/images/icon/icon-3.png" >                  
        </div>
        <div style="clear:both"></div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: {
    title:"店员列表",
    merchantname: "商家名称",
    state:"正常",
    number:"001"
  }
};
</script>
<style>
.title {
  text-align: center;
  width: 100%;
  height: 1.1rem;
}
.tilte-img-1 {
  margin-right: 30%;
  padding-top: 0.3rem;
}
.title-1 {
  padding-top: 0rem;
  text-align: center;
}
.tilte-img-2 {
  margin-left: 30%;
  padding-top: 0.3rem;
}

.allbody {
  padding-left: 0.4rem;
  padding-right: 0.4rem;
}
.second-1 {
  margin-top: 0.2rem;
}
.second-input {
  width: 65%;
}

.list-1{
  width: 100%;
  height: 1.4rem;
}

.list-1-1{
  width: 22%;
  
}
.list-1-2{
  width: 55%;
  
}
.list-1-3{
  width: 23%;
}



</style>