<template>
  <div class="technology">
    <h1>Technology</h1>
    <v-tabs vertical>
      
      <v-tab>
        Node
      </v-tab>

      <v-tab>
        RoR
      </v-tab>

      <v-tab>
        PHP
      </v-tab>

      <v-tab>
        HTML
      </v-tab>

      <v-tab>
        MySQL
      </v-tab>

      <v-tab-item>
        <NodeTab />
      </v-tab-item>

      <v-tab-item>
        <RailsTab />
      </v-tab-item>

      <v-tab-item>
        <PhpTab />
      </v-tab-item>

      <v-tab-item>
        <HtmlTab />
      </v-tab-item>

      <v-tab-item>
        <MySqlTab />
      </v-tab-item>

    </v-tabs>
  </div>
</template>

<script>
import NodeTab from '@/components/tabs/NodeTab';
import RailsTab from '@/components/tabs/RailsTab';
import PhpTab from '@/components/tabs/PhpTab';
import HtmlTab from '@/components/tabs/HtmlTab';
import MySqlTab from '../components/tabs/MySqlTab';

export default {
  components: {
    NodeTab,
    RailsTab,
    PhpTab,
    HtmlTab,
    MySqlTab,
  },
}
</script>