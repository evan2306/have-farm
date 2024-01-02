import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useLoadingStateStore = defineStore('loadingState', () => {
  const isLoading = ref(false);
  const LOADING_STATE = computed(() => {
    return isLoading.value;
  });
  const changeLoadingState = (state) => {
    isLoading.value = state;
  };

  return {
    changeLoadingState,
    LOADING_STATE,
  };
});
