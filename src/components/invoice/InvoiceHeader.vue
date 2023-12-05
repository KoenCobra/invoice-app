<script lang="ts" setup>
import AppButton from '../AppButton.vue'
import Status from '../Status.vue'

const props = defineProps({
  status: String
})
</script>

<template>
  <div class="invoice-header">
    <div class="status">
      <p>Status</p>
      <Status :status="props.status" />
    </div>
    <div class="actions">
      <AppButton cssClass="edit" text="Edit" />
      <AppButton cssClass="red" text="Delete" />
      <AppButton cssClass="primary" text="Mark as Paid" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/sass/variables.scss';
@import '../../assets/sass/mixins.scss';

.invoice-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  margin-top: 2rem;
  background-color: var(--background);
  padding: 1.25rem 2rem;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);
  border-radius: 8px;

  .status {
    display: flex;
    align-items: center;
    gap: 1rem;

    p {
      @include body;
      color: var(--grayishBlue);
    }
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
}
</style>
