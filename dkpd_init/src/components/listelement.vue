<template>
  <li class="display-1 list_element_design">
    <span class="font-color-2">投放商家&nbsp;:&nbsp;</span>
    <span class="font-color-3">{{name}}</span>
  </li>
</template>

<script>
export default {
  data: {
    return: {
      name: "大咖评点"
    }
  }
};
</script>

<style>
.list_element_design {
  width: 45%;
  height: 0.25rem;
  margin: 0;
  padding: 0;
  font-size: 0.27rem;
}
</style>