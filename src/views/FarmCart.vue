<script setup>
import {
  computed, onMounted, ref, watch,
} from 'vue';
import axios from 'axios';
import BreadCrumb from '@/components/BreadCrumb.vue';
import { useCartApi } from '../composables/useCartApi';

const { cartData, getCartData } = useCartApi();

// const cartData = ref({
//   success: true,
//   data: {
//     carts: [
//       {
//         coupon: {
//           code: '',
//           due_date: 0,
//           id: '',
//           is_enabled: 0,
//           percent: 0,
//           title: '',
//         },
//         final_total: 0,
//         id: '',
//         product: {
//           category: '',
//           content: '',
//           description: '',
//           id: '',
//           imageUrl: '',
//           imagesUrl: [''],
//           is_enabled: 1,
//           num: 1,
//           origin_price: 0,
//           price: 0,
//           title: '',
//           unit: '',
//         },
//         product_id: '',
//         qty: 1,
//         total: 3600,
//       },
//     ],
//     total: 3600,
//     final_total: 3600,
//   },
//   messages: [],
// });

// const getCartData = async () => {
//   axios
//     .get(
//       `${import.meta.env.VITE_APP_URL}api/${
//         import.meta.env.VITE_APP_PATH
//       }/cart`,
//     )
//     .then((res) => {
//       cartData.value = res.data.data;
//     });
// };

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

const isClean = ref(true);

const test = watch(cartData, (nexIdx) => {
  if (nexIdx.carts.length > 0) {
    isClean.value = false;
  } else {
    isClean.value = true;
  }
  console.log(isClean.value);
});

onMounted(async () => {
  await getCartData();
  // cartIsClean();
});
</script>
<template>
  <BreadCrumb />

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
    <hr />
    <div
      class="bg-maingray text-center py-48 mb-32 rounded rounded-16"
      v-if="isClean"
    >
      <div class="d-flex justify-content-center align-items-center">
        <img src="../assets/images/cart-clean.png" alt="" class="img-fluid" />
      </div>
      <h4 class="fw-bold mt-32">哎呀! 購物車是空的呢...</h4>
      <p class="fw-bold mt-16">回到商城繼續選購吧!</p>

      <router-link
        :to="{ name: '響農商城' }"
        class="btn fs-20 lh-sm fw-bold py-16 px-48 rounded-16 goshop-btn"
        >回到響農商城</router-link
      >
    </div>

    <ul
      class="list-unstyled row justify-content-center align-items-center"
      v-else
    >
      <li
        v-for="(item, index) in cartData.carts"
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
          <img :src="item.product.imgUrl" class="cart-img my-16" alt="" />
        </div>
        <div class="col-6 col-md-4">
          <p class="m-0 cart-item-title fs-20">
            {{ item.product.title }}
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
            <div
              class="
                d-none d-md-flex
                justify-content-between
                align-items-center
              "
            >
              <p class="mb-1 fs-18">售價 $</p>
              <p class="mb-1 fs-18">{{ item.product.price }}</p>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <p class="m-0 fs-18 text-mainorg fw-bold">小計 $</p>
              <p class="m-0 fs-18 text-mainorg fw-bold">{{ item.total }}</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <hr>
  </div>
  <div class="container-md mt-64 ">
    <h5 class="mb-32">購物須知</h5>
    <div class="bg-maingray p-16 rounded rounded-16 mb-32">
      <ol class="mb-16">
      <p>感謝您向 饗農購物商城訂購商品，為維護您的權益，請仔細閱讀下述說明：</p>
      <li>
        <p>
          本購物須知是Yahoo奇摩服務條款的補充條款，當您使用饗農購物商城時，即表示您已閱讀、瞭解並同意接受本購物須知所訂之所有內容。本須知得隨時修訂並公告於饗農購物商城上，修訂後之內容自公告時起生效。
        </p>
      </li>
      <li>
        <p>
          若您未滿二十歲，您應於您的家長（或監護人）閱讀、瞭解並同意本購物須知之所有內容及其後修改變更後，方得使用或繼續使用饗農購物商城。當您使用或繼續使用饗農購物商城時，即推定您的家長（或監護人）已閱讀、瞭解並同意接受本購物須知之所有內容及其後修改變更。
        </p>
      </li>
      <li>
        <p>
          當您使用或繼續使用饗農購物商城時，即表示您同意以電子文件作為意思表示之方法。
        </p>
      </li>
      <li>
        <p>
          請注意，當您訂購多筆商品並選擇以信用卡或信用卡分期付款時，饗農購物商城將就各筆訂單分別向銀行取得授權，並非代表您已經付款，也不代表交易已經完成或契約已經成立，饗農購物商城仍須確認交易條件無誤、商品仍有庫存或服務仍可提供，且無其他饗農購物商城無法接受訂單之情形。於確認無上述問題前，饗農購物商城不會請領信用卡交易款項，該筆交易金額也不諱出現在您的信用卡帳單中，直到饗農股份有限公司確認接受訂單為止。如因信用卡額度不足或系統因素等問題，導致發生當次訂購之商品無法全部取得銀行授權之情形，饗農購物商城將會就已成功取得授權部分之商品繼續處理您的訂單，若您就其他商品仍有需要時，請重新訂購。但若當次訂購享有跨產品優惠、滿額 / 滿件優惠者， 饗農購物商城將視為授權全部失敗，請您重新選擇付款方式。另外，使用信用卡分期付款，該服務係由您的信用卡發卡機構提供，債權債務關係係存在您與信用卡發卡機構間，除相關網頁有特別標示外，其所支付之利息、計算方式、是否另有信用保險或保證人之設定或涉入，均依據您與信用卡發卡機構間之相關約定內容辦理，請您自行查閱並注意與信用卡發卡機構間之相關約定。
        </p>
      </li>
      <li>
        <p>
          本購物須知是饗農股份有限公司服務條款的補充條款，當您使用饗農購物商城時，即表示您已閱讀、瞭解並同意接受本購物須知所訂之所有內容。本須知得隨時修訂並公告於饗農購物商城上，修訂後之內容自公告時起生效。
        </p>
      </li>

    </ol>
    </div>

  </div>
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
  appearance: textfield;
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

.goshop-btn {
  background-color: #460303;
  color: #fde47f;
  transition: 0.2s;
  &:hover {
    background-color: #fde47f;
    color: #460303;
    transition: 0.2s;
  }
}

.cart-img {
  width: 160px;
  height: 120px;
  object-fit: cover;
  @include xl {
    width: 100%;
    height: 100px;
  }
  @include lg {
    width: 100%;
    height: 80px;
  }
  @include md {
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
