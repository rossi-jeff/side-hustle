<template>
  <div class="contact">

    <v-container>
      <div v-if="sent">
        <h1>Thank You</h1>
        thank you goes here
      </div>

      <v-form v-if="!sent" ref="form">
        <h1>Contact</h1>
        
        <v-stepper
          v-model="currentStep"
          vertical
        >
          <v-stepper-step step="1">
            About You
          </v-stepper-step>
          <v-stepper-content step="1">
            <ContactInfoForm :contact='formData.Contact' />
            <div class='d-flex'>
              <v-spacer></v-spacer>
              <v-btn @click='next()'>
                <span>Next</span>
                <v-icon right>mdi-chevron-right</v-icon>
              </v-btn>
            </div>
          </v-stepper-content>

          <v-stepper-step step="2">
            About Your Project
          </v-stepper-step>
          <v-stepper-content step="2">
            <ProjectInfoForm :project='formData.Project' />
            <div class='d-flex'>
              <v-btn @click='previous()'>
                <v-icon left>mdi-chevron-left</v-icon>
                <span>Previous</span>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn @click='next()'>
                <span>Next</span>
                <v-icon right>mdi-chevron-right</v-icon>
              </v-btn>
            </div>
          </v-stepper-content>

          <v-stepper-step step="3">
            Additional Comments
          </v-stepper-step>
          <v-stepper-content step="3">
            <CommentsForm :comments='formData.Comments' />
            <div class='d-flex'>
              <v-btn @click='previous()'>
                <v-icon left>mdi-chevron-left</v-icon>
                <span>Previous</span>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn @click='next()'>
                <span>Next</span>
                <v-icon right>mdi-chevron-right</v-icon>
              </v-btn>
            </div>
          </v-stepper-content>

          <v-stepper-step step="4">
            Confirmation
          </v-stepper-step>
          <v-stepper-content step="4">
            <ContactTable :formData="formData" />
            <div class='d-flex'>
              <v-btn @click='previous()'>
                <v-icon left>mdi-chevron-left</v-icon>
                <span>Previous</span>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn color='primary' @click='send()'>
                <span>Send</span>
                <v-icon right>mdi-send</v-icon>
              </v-btn>
            </div>
          </v-stepper-content>

        </v-stepper>

      </v-form>
    </v-container>

  </div>
</template>

<script>
import ContactInfoForm from '@/components/forms/ContactInfoForm';
import ProjectInfoForm from '@/components/forms/ProjectInfoForm';
import CommentsForm from '@/components/forms/CommentsForm';
import ContactTable from '@/components/ContactTable';
import SendGridMailer from '@/utils/sendgrid-mailer'

export default {
  components: {
    ContactInfoForm,
    ProjectInfoForm,
    CommentsForm,
    ContactTable,
  },
  data: () => ({
    sent: false,
    valid: true,
    currentStep: 1,
    formData: {
      Contact: {
        Name: '',
        Email: '',
        Phone: '',
      },
      Project: {
        Type: '',
        Technology: '',
        Description: '',
        Budget: '',
      },
      Comments: {
        Message: '',
      },
    },
  }),
  methods: {
    next() {
      this.currentStep += 1;
    },
    previous() {
      this.currentStep -= 1;
    },
    resetForm() {
			this.sent = false;
			this.currentStep = 1;
      if (this.$refs.form) {
				this.$refs.form.reset();
      }
    },
    async send() {
      const result = await new SendGridMailer(this.formData).send();
      alert(JSON.stringify(result));
    },
  },
}
</script>