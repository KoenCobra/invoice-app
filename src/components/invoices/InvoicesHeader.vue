<script lang="ts" setup>
import AppButton from '../AppButton.vue'
</script>

<template>
  <div class="invoices-header">
    <div class="title">
      <h1>Invoices</h1>
      <p>There are """0""" total invoices</p>
    </div>
    <div class="filter-dropdown"></div>
    <div class="new-invoice">
      <AppButton cssClass="red" text="New Invoice" :isIcon="false" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
