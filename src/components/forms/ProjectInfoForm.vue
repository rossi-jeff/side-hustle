<template>
  <div>
    <div class='d-flex flex-wrap justify-space-between py-2'>

      <div class='px-2'>
        <v-select
          :items="types"
          label="Type"
          v-model="project.Type"
        ></v-select>
      </div>

      <div class='px-2'>
        <v-select
          :items="technologies"
          label="Technology"
          v-model="project.Technology"
        ></v-select>
      </div>

      <div class='px-2'>
        <v-text-field
          label="Budget"
          v-model="project.Budget"
        ></v-text-field>
      </div>

    </div>

    <div class='px-2 py-2'>
      <v-textarea
        label="Description"
        v-model="project.Description"
        name="project.Description"
      ></v-textarea>
    </div>

  </div>
</template>

<script>
export default {
  props: ['project'],
  data: () => ({
    types: [
      'Small Web Project',
      'Large Web Project',
      'Mobile Application',
      'Update Existing',
      'Other'
    ],
    technologies: [
      'Node.JS',
      'Ruby on Rails',
      'PHP',
      'HTML5',
      'No Preference',
      'Other'
    ],
  }),
}
</script>