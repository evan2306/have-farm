<script setup>
import { onMounted, reactive, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const state = reactive({
  List: [],
});

onMounted(() => {
  const { matched } = route;
  state.list = matched;
});

watch(
  () => route.matched,
  (newIdx) => {
    const matched = newIdx;
    state.list = matched;
  },
);
</script>

<template>
  <div class="bread-mt container-lg pt-16">
    <nav aria-label="breadcrumb">
      <ul class="breadcrumb">
        <template v-for="(item, index) in state.list" :key="index + 3121655">
          <li class="breadcrumb-item">
            <router-link v-if="index!==state.list.length-1" :to="{ path: item.path }"
              >{{ item.meta.title }}
            </router-link>
            <span v-else>{{ item.meta.title }}</span>
          </li>
        </template>
      </ul>
    </nav>
  </div>
</template>
<style lang="scss" scoped>
.bread-mt {
  margin-top: 82px;
  a{
    text-decoration: none;
  }
  @include lg {
    margin-top: 88px;
  }
}
</style>
