<template>
  <div class='px-2 py-2'>
    <v-textarea
      label="Message"
      name="comments.Message"
    ></v-textarea>
  </div>
</template>

<script>
export default {
  props: ['comments'],
}
</script>