<template>
  <div>
    <v-container>
      <v-simple-table dense>
        <template v-slot:default>
          <tbody>

            <tr v-if='formData.Contact.Name || formData.Contact.Email || formData.Contact.Phone'>
              <th colspan="2">Contact</th>
            </tr>

            <tr v-if='formData.Contact.Name'>
              <td>Name</td>
              <td>{{ formData.Contact.Name }}</td>
            </tr>
            <tr v-if='formData.Contact.Email'>
              <td>Email</td>
              <td>{{ formData.Contact.Email }}</td>
            </tr>
            <tr v-if='formData.Contact.Phone'>
              <td>Phone</td>
              <td>{{ formData.Contact.Phone }}</td>
            </tr>

            <tr v-if='formData.Project.Type || formData.Project.Technology || formData.Project.Budget || formData.Project.Description'>
              <th colspan="2">Project</th>
            </tr>

            <tr v-if='formData.Project.Type'>
              <td>Type</td>
              <td>{{ formData.Project.Type }}</td>
            </tr>
            <tr v-if='formData.Project.Technology'>
              <td>Technology</td>
              <td>{{ formData.Project.Technology }}</td>
            </tr>
            <tr v-if='formData.Project.Budget'>
              <td>Budget</td>
              <td>{{ formData.Project.Budget }}</td>
            </tr>
            <tr v-if='formData.Project.Description'>
              <td>Description</td>
              <td>{{ formData.Project.Description }}</td>
            </tr>

            <tr v-if='formData.Comments.Message'>
              <th colspan="2">Comments</th>
            </tr>

            <tr v-if='formData.Comments.Message'>
              <td>Message</td>
              <td>{{ formData.Comments.Message }}</td>
            </tr>

          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ['formData'],
}
</script>

<style>
th {
  background-color: #DDD;
}
</style>