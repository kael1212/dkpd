<template>
  <!-- 筛选框组件 -->
  <div class="filtrate width-all height-6">
    <ul>
      <li class="filtrate-text display-1 font-size-3 font-color-2" type="button">筛选:</li>
      <li
        class="display-1 filtrate-box-size margin-left-1 font-size-2 font-color-5"
        type="button"
        value="全部"
      >全部</li>

      <li
        class="display-1 filtrate-box-size margin-left-1 font-size-2 font-color-5"
        type="button"
        value="未审核"
      >未审核</li>
      <li
        class="display-1 filtrate-box-size margin-left-1 font-size-2 font-color-5"
        type="button"
        value="已投放"
      >已投放</li>
      <li
        class="display-1 filtrate-box-size margin-left-1 font-size-2 font-color-5"
        type="button"
        value="未通过"
      >未通过</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
.filtrate-text {
  width: 12%;
  height: 0.55rem;
  margin-top: 0;
  text-align: top;
  font-weight: 500;
}

.filtrate-box-size {
  width: 16%;
  height: 0.55rem;
  border-radius: 0.2rem;
  padding: 0;
  text-align: center;
}
</style>

