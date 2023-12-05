<script lang="ts" setup>
const props = defineProps({
  invoice: Object
})
</script>

<template>
  <div class="item-table">
    <table>
      <thead>
        <tr>
          <th>Item Name</th>
          <th class="qty">QTY.</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in invoice?.items" :key="item.id">
          <td>{{ item.name }}</td>
          <td class="qty">{{ item.quantity }}</td>
          <td>£ {{ item.price.toLocaleString('en-EN') }}</td>
          <td>£ {{ item.total.toLocaleString('en-EN') }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="total-amount">
    <p>Amount Due</p>
    <span>£ {{ invoice?.total.toLocaleString('en-EN') }}</span>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/sass/variables.scss';
@import '../../assets/sass/mixins.scss';

.item-table {
  margin-top: 3rem;
  padding: 2rem;
  background-color: var(--editBtnBackground);
  border-radius: 8px 8px 0 0;

  table {
    width: 100%;
    text-align: left;

    th {
      color: var(--grayishBlue);
      @include body;
      padding-block: 0.5rem;

      &:not(:first-child) {
        text-align: right;
      }
    }

    td {
      @include headingSmall;
      padding-block: 0.5rem;
      color: var(--textColor);

      &:not(:first-child) {
        text-align: right;
      }
    }

    .qty {
      text-align: center !important;
    }
  }
}
.total-amount {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  color: var(--white);
  background-color: var(--totalAmount);
  border-radius: 0 0 8px 8px;

  p {
    @include body;
  }

  span {
    @include headingSmall;
  }
}
</style>
