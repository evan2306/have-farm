<script setup>
import { ref, watch } from 'vue';
import { useModalStore } from '@/stores/modal';
import { storeToRefs } from 'pinia';

// modal關閉
const isModal = ref(null);
const modalStore = useModalStore();
const { closeProductModal } = modalStore;
const { newOrEdit, inComponentProduct } = storeToRefs(modalStore);

const tempProduct = ref({
  imgUrl: '',
  imagesUrl: [''],
  title: '',
  category: '',
  unit: '',
  origin_price: '',
  price: 0,
  aria: 0,
  farm: '',
  description: '',
  content: '',
  is_enabled: 0,
  is_special: 0,
});

defineExpose({ isModal });

watch(inComponentProduct, (inputItem) => {
  console.log(inputItem);
  tempProduct.value = inputItem;
});

// 新增產品資料 emit
const emit = defineEmits(['test-item']);
const addProduct = () => {
  emit('update-product', tempProduct.value, newOrEdit.value);
};

const closeModal = () => {
  newOrEdit.value = null;
  tempProduct.value = {
    imgUrl: '',
    imagesUrl: [''],
    title: '',
    category: '',
    unit: '',
    origin_price: 0,
    price: 0,
    aria: '',
    farm: '',
    description: '',
    content: '',
    is_enabled: 1,
    is_special: 0,
  };
  closeProductModal();
};
</script>
<template>
  <div
    class="modal fade"
    id="productModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="isModal"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span>新增產品</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            aria-label="Close"
            @click="closeModal"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4 overflow-y">
              <div class="mb-2">
                <div class="mb-3">
                  <label for="imageUrl" class="form-label">主圖</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="請輸入圖片連結"
                    v-model.lazy="tempProduct.imgUrl"
                  />
                  <img class="img-fluid" :src="tempProduct.imgUrl" alt="" />
                </div>
                <div class="mb-3">
                  多圖新增
                  <button
                    type="button"
                    class="btn btn-outline-danger"
                    @click="tempProduct.imagesUrl = ['']"
                  >
                    清除全部
                  </button>
                  <div>
                    <div
                      v-for="(img, idx) in tempProduct.imagesUrl"
                      :key="idx + '1235'"
                    >
                      <button
                        type="button"
                        class="btn btn-danger"
                        :disabled="
                          idx == tempProduct.imagesUrl.length - 1 &&
                          !tempProduct.imagesUrl[
                            tempProduct.imagesUrl.length - 1
                          ]
                        "
                        @click="tempProduct.imagesUrl.splice(idx, 1)"
                      >
                        刪除圖片
                      </button>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="請輸入圖片連結"
                        v-model.lazy="tempProduct.imagesUrl[idx]"
                      />
                      <img
                        class="img-fluid"
                        :src="tempProduct.imagesUrl[idx]"
                        alt=""
                      />
                    </div>
                    <button
                      type="button"
                      class="btn btn-primary w-100"
                      @click="tempProduct.imagesUrl.push('')"
                      :disabled="
                        !tempProduct.imagesUrl.length ||
                        !tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1]
                      "
                    >
                      新增圖片
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-8 overflow-y">
              <div class="mb-3">
                <label for="title" class="form-label">產品標題</label>
                <input
                  id="title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入標題"
                  v-model.lazy="tempProduct.title"
                />
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">產品分類</label>
                  <select
                    id="category"
                    aria-label="aria"
                    v-model="tempProduct.category"
                    required
                    class="form-select"
                  >
                    <option value="" disabled>請選擇分類</option>
                    <option value="五穀">五穀</option>
                    <option value="蔬果">蔬果</option>
                    <option value="肉品">肉品</option>
                    <option value="乳蛋">乳蛋</option>
                    <option value="水產">水產</option>
                  </select>
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">單位</label>
                  <input
                    id="unit"
                    type="text"
                    class="form-control"
                    placeholder="請輸入單位"
                    v-model.lazy="tempProduct.unit"
                  />
                </div>
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價</label>
                  <input
                    id="origin_price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入原價"
                    v-model.lazy.number="tempProduct.origin_price"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價</label>
                  <input
                    id="price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入售價"
                    v-model.lazy.number="tempProduct.price"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="aria" class="form-label">產地</label>
                  <select
                    aria-label="aria"
                    v-model="tempProduct.aria"
                    required
                    id="aria"
                    class="form-select"
                  >
                    <option value="" disabled>請選擇產地</option>
                    <option value="北部">北部</option>
                    <option value="中部">中部</option>
                    <option value="南部">南部</option>
                    <option value="東部">東部</option>
                    <option value="離島">離島</option>
                  </select>
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">牧場</label>
                  <input
                    id="farm"
                    type="text"
                    class="form-control"
                    placeholder="請輸入牧場"
                    v-model.lazy="tempProduct.farm"
                  />
                </div>
              </div>
              <hr />
              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                <textarea
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入產品描述"
                  v-model.lazy="tempProduct.description"
                >
                </textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <textarea
                  id="content"
                  type="text"
                  class="form-control"
                  placeholder="請輸入說明內容"
                  v-model.lazy="tempProduct.content"
                >
                </textarea>
              </div>
              <div class="mb-3">
                <div>
                  <div class="form-check">
                    <input
                      id="is_enabled"
                      class="form-check-input"
                      type="checkbox"
                      v-model.number="tempProduct.is_enabled"
                      :true-value="1"
                      :false-value="0"
                    />

                    <label class="form-check-label" for="is_enabled"
                      >是否啟用 {{ tempProduct.is_enabled }}</label
                    >
                  </div>
                </div>
                <div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="special"
                      id="season"
                      value="2"
                      v-model.number="tempProduct.is_special"
                    />
                    <label class="form-check-label" for="season">
                      季節產品
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="special"
                      id="hotItem"
                      value='1'
                      v-model.number="tempProduct.is_special"
                    />
                    <label class="form-check-label" for="hotItem">
                      精選熱銷
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="special"
                      id="none"
                      value="0"
                      v-model.number="tempProduct.is_special"
                    />
                    <label class="form-check-label" for="none">
                      無
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            @click="closeModal"
          >
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="addProduct">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.overflow-y {
  height: 70vh;
  overflow-y: scroll;
}
</style>
