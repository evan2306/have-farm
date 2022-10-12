<script setup>
import { ref } from 'vue';
import { useProductApiStore } from '@/stores/pushProductApi';
import { storeToRefs } from 'pinia';
import { useModalStore } from '@/stores/modal';
// modal關閉
const isModal = ref(null);
// const props = defineProps({
//   closeModal: {
//     type: Function,
//     default: () => {},
//   },
// });
const modalStore = useModalStore();
const { closeModal } = modalStore;

// 新增產品資料
const store = useProductApiStore();
const { pushProduct } = store;
const { tempProduct } = storeToRefs(store);
defineExpose({ isModal });

const addProduct = () => {
  pushProduct();
};
// 佔存編輯資料
// const tempProduct = reactive({
//   imagesUrl: [''],
// });
// const addProduct = () => {
//   const url = `${import.meta.env.VITE_APP_URL}api/${
//     import.meta.env.VITE_APP_PATH
//   }/admin/product`;
//   axios
//     .post(url, { data: tempProduct })
//     .then((res) => {
//       console.log(res.data);
//     })
//     .catch((err) => {
//       console.dir(err);
//     });
// };
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
                    v-model="tempProduct.imgUrl"
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
                        v-model="tempProduct.imagesUrl[idx]"
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
                  v-model="tempProduct.title"
                />
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">產品分類</label>
                  <input
                    id="category"
                    type="text"
                    class="form-control"
                    placeholder="請輸入分類"
                    v-model="tempProduct.category"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">單位</label>
                  <input
                    id="unit"
                    type="text"
                    class="form-control"
                    placeholder="請輸入單位"
                    v-model="tempProduct.unit"
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
                    v-model="tempProduct.origin_price"
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
                    v-model="tempProduct.price"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">產地</label>
                  <input
                    id="aria"
                    type="text"
                    class="form-control"
                    placeholder="請輸入產地"
                    v-model="tempProduct.aria"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">牧場</label>
                  <input
                    id="farm"
                    type="text"
                    class="form-control"
                    placeholder="請輸入牧場"
                    v-model="tempProduct.farm"
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
                  v-model="tempProduct.description"
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
                  v-model="tempProduct.content"
                >
                </textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    id="is_enabled"
                    class="form-check-input"
                    type="checkbox"
                    v-model="tempProduct.is_enabled"
                    :true-value="1"
                    :false-value="0"
                  />
                  <label class="form-check-label" for="is_enabled"
                    >是否啟用</label
                  >
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
  <!-- <div
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
                    v-model="tempProduct.imgUrl"
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
                        v-model="tempProduct.imagesUrl[idx]"
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
                  v-model="tempProduct.title"
                />
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">產品分類</label>
                  <input
                    id="category"
                    type="text"
                    class="form-control"
                    placeholder="請輸入分類"
                    v-model="tempProduct.category"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">單位</label>
                  <input
                    id="unit"
                    type="text"
                    class="form-control"
                    placeholder="請輸入單位"
                    v-model="tempProduct.unit"
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
                    v-model="tempProduct.origin_price"
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
                    v-model="tempProduct.price"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">產地</label>
                  <input
                    id="aria"
                    type="text"
                    class="form-control"
                    placeholder="請輸入產地"
                    v-model="tempProduct.aria"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">牧場</label>
                  <input
                    id="farm"
                    type="text"
                    class="form-control"
                    placeholder="請輸入牧場"
                    v-model="tempProduct.farm"
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
                  v-model="tempProduct.description"
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
                  v-model="tempProduct.content"
                >
                </textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    id="is_enabled"
                    class="form-check-input"
                    type="checkbox"
                    v-model="tempProduct.is_enabled"
                    :true-value="1"
                    :false-value="0"
                  />
                  <label class="form-check-label" for="is_enabled"
                    >是否啟用</label
                  >
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
  </div> -->
</template>
<style lang='scss' scoped>
.overflow-y {
  height: 70vh;
  overflow-y: scroll;
}
</style>
