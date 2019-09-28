<template>
  <div class="title">
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
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style>
</style>