<template>
  <div class='d-flex flex-wrap justify-space-between py-2'>

    <div class='px-2'>
      <v-text-field
        label="Name"
        v-model="contact.Name"
        :rules="nameRules"
        required
      ></v-text-field>
    </div>

    <div class='px-2'>
      <v-text-field
        label="Email"
        v-model="contact.Email"
        :rules="emailRules"
        required
      ></v-text-field>
    </div>

    <div class='px-2'>
      <v-text-field
        label="Phone"
        v-model="contact.Phone"
      ></v-text-field>
    </div>

  </div>
</template>

<script>
export default {
  props: ['contact'],
  data: () => ({
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length > 5 && v.length <= 100) || 'Name must be between 5 and 100 characters',
    ],
    emailRules: [
      v => !!v || 'Email is required',
      v => /.+@.+\..+/.test(v) || 'Email must be valid',
    ],
  }),
}
</script>