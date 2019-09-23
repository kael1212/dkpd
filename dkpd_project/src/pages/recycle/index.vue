<template>
  <div class=" ">
    <div class="  firstLine">
      <image src alt class="_img "></image>
      <div class=" ">回收站</div>
    </div>
    <div class=" "><input type="text" name value placeholder="请输入商家名称" class="_input " /> <input type="commit" name value class="_input " /></div>
    <div class=" ">
      <div class=" ">
        <div class="  item">
          <div class=" "> 投放商家:{{ items.name }}
          </div>
          <div class=" "> 被投放商家:{{ items.byname }}
          </div>
          <div class=" "> 活动圈名称:{{ items.activityname }}
          </div>
          <div class=" "> 过期时间:{{items.expirationTime}}
          </div>
          <div class=" "> 恢复 </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>