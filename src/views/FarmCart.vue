<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

const cartData = ref({
  success: true,
  data: {
    carts: [
      {
        coupon: {
          code: '',
          due_date: 0,
          id: '',
          is_enabled: 0,
          percent: 0,
          title: '',
        },
        final_total: 0,
        id: '',
        product: {
          category: '',
          content: '',
          description: '',
          id: '',
          imageUrl: '',
          imagesUrl: [''],
          is_enabled: 1,
          num: 1,
          origin_price: 0,
          price: 0,
          title: '',
          unit: '',
        },
        product_id: '',
        qty: 1,
        total: 3600,
      },
    ],
    total: 3600,
    final_total: 3600,
  },
  messages: [],
});

const getCartData = async () => {
  axios
    .get(
      `${import.meta.env.VITE_APP_URL}api/${
        import.meta.env.VITE_APP_PATH
      }/cart`,
    )
    .then((res) => {
      console.log(res.data);
      cartData.value = res.data.data;
      console.log(cartData.value);
    });
};

const deleteCartData = async (id) => {
  try {
    await axios.delete(
      `${import.meta.env.VITE_APP_URL}api/${
        import.meta.env.VITE_APP_PATH
      }/cart/${id}`,
    );
    await getCartData();
  } catch (error) {
    console.log(error);
  }
};
onMounted(() => {
  getCartData();
});
</script>
<template>
  <div class="bread-mt container-lg pt-16">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" aria-current="page">首頁>饗農地圖</li>
      </ol>
    </nav>
  </div>

  <div class="step-box d-flex justify-content-center align-items-center my-32">
    <div class="step active d-flex justify-content-center align-items-center">
      <i class="bi bi-cart-check fs-24 cart-icon"></i>
    </div>
    <div class="step-line mx-3"></div>
    <div class="step d-flex justify-content-center align-items-center">
      <i class="bi bi-card-list fs-24 cart-icon"></i>
    </div>
    <div class="step-line mx-3"></div>
    <div class="step d-flex justify-content-center align-items-center">
      <i class="bi bi-bag-check-fill fs-24 cart-icon"></i>
    </div>
  </div>

  <div class="container-md mb-16">
    <h2>購物車清單</h2>
    <ul class="list-unstyled row justify-content-center align-items-center">
      <li
        v-for="(item,index) in cartData.carts"
        :key="index + 13215"
        class="row justify-content-center align-items-center"
      >
        <div class="col-2 col-md-1 d-flex justify-content-center">
          <a
            class="cart-delete-btn d-block text-center w-100"
            href="#"
            @click.prevent="deleteCartData(item.id)"
          >
            <i class="bi bi-trash fs-28"></i>
          </a>
        </div>
        <div class="col-4 col-md-2">
          <img
            :src="item.product.imgUrl"
            class="cart-img my-16"
            alt=""
          />
        </div>
        <div class="col-6 col-md-4">
          <p class="m-0 cart-item-title fs-20">
            {{item.product.title }}
          </p>

          <p class="m-0 text-secondary">
            {{ item.product.content }}
          </p>
          <p class="m-0 fs-18 text-end d-md-none">
            售價 ${{ item.product.price }}
          </p>
        </div>
        <div class="col-2 d-md-none"></div>
        <div class="col-6 col-md-3 my-3">
          <div
            class="
              d-flex
              justify-content-center
              align-items-center
              border
              rounded-1
            "
          >
            <button
              type="button"
              class="btn btn-outline-mainred border-0 rounded-0 rounded-start-4"
            >

              <i class="bi bi-dash-lg fs-20"></i>
            </button>
            <input
              type="number"
              min="1"
              readonly
              class="
                form-control
                cart-input
                border-top-0 border-bottom-0
                rounded-0
                text-center
                fs-20
                lh-base
              "
              v-model="item.qty"
            />
            <button
              type="button"
              class="btn btn-outline-mainred border-0 rounded-0 rounded-end-4"
            >
              <i class="bi bi-plus-lg fs-20"></i>
            </button>
          </div>
        </div>
        <div class="col-4 col-md-2">
          <div class="w-100">
            <div class="d-none d-md-flex justify-content-between align-items-center">
              <p class="mb-1 fs-18">售價 $</p>
              <p class="mb-1 fs-18">{{ item.product.price }}</p>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <p class="m-0 fs-18 text-mainorg fw-bold">小計 $</p>
              <p class="m-0 fs-18 text-mainorg fw-bold">{{ item.total }}</p>
            </div>
          </div>
        </div>

        <hr class="" />
      </li>
    </ul>
    <!-- <div class="row justify-content-center align-items-center">
      <div class="col-2 col-md-1 d-flex justify-content-center">
        <a
          class="cart-delete-btn d-block text-center w-100"
          href="#"
          @click.prevent="1"
        >
          <i class="bi bi-x-square fs-18"></i>
        </a>
      </div>
      <div class="col-4 col-md-2">
        <img
          :src="cartData.data.carts[0].product.imgUrl"
          class="img-fluid"
          alt=""
        />
      </div>
      <div class="col-6 col-md-4">
        <p class="">{{ cartData.data.carts[0].product.title }}</p>
        商品內容
      </div>
      <div class="col-6 col-md-3">商品數量</div>
      <div class="col-6 col-md-2">商品價格</div>
    </div> -->
  </div>
  <!-- <div class="container-lg">
    <table class="table align-middle">
      <thead class="bg-mainred text-white text-center">
        <tr>
          <th scope="col" width="35%">商品</th>
          <th scope="col" width="5%">數量</th>
          <th scope="col" width="7%">單價</th>
          <th scope="col" width="7%">小計</th>
          <th scope="col" width="5%">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cartData.data.carts" :key="index + 3215">
          <th scope="row">
            <img :src="item.product.imgUrl" class="cart-img" alt="" />
            {{ item.product.title }}
          </th>
          <td class="">
            <div class="">
              <select
              class="form-select form-select-sm text-center"
              aria-label="Default select example"
              v-model="item.qty"
              >
                <option
                v-for="index in item.qty+5"
                :key="index+31252"
                :value="index">{{index}}</option>
              </select>
            </div>
          </td>
          <td class="text-center">${{item.product.price}}</td>
          <td class="text-center">${{item.total}}</td>
          <td class="text-center">
            <button type="button" class="btn btn-sm btn-outline-mainred">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div> -->
</template>

<style lang="scss" scoped>
* {
  // outline: 1px solid;
}

input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
}
input[type='number'] {
  -moz-appearance: textfield;
  appearance:textfield;
}

.step {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fde47f;
  .cart-icon {
    color: #460303;
  }
  &.active {
    // outline: 2px solid #fde47f;
    animation: ripple 1s ease-out infinite;
    background-color: #460303;
    .cart-icon {
      color: #fde47f;
    }
  }
}
.cart-img {
  width: 160px;
  height:120px;
  object-fit: cover;
  @include xl{
    width: 100%;
    height: 100px;
  }
  @include lg{
    width: 100%;
    height: 80px;
  }
  @include md{
    width: 100%;
    height: 120px;
  }
}
.cart-input:focus {
  background-color: none;
  border-color: #ced4da;
  outline: 0;
  box-shadow: 0 0 0 0 rgba(253, 228, 127, 0.877);
}
.step-line {
  width: 48px;
  outline: 0.1px solid #460303;
}
.bread-mt {
  margin-top: 82px;
  @include lg {
    margin-top: 88px;
  }
}

.cart-delete-btn {
  color: #a5a5a5;
  transition: 0.3s;
  &:hover {
    color: #460303;
    transition: 0.3s;
  }
}
.cart-item-title {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

@keyframes ripple {
  0% {
    box-shadow: 0 0 0 0 #460303;
  }
  100% {
    box-shadow: 0 0 0 0.5rem #fde47f00;
  }
}
</style>
