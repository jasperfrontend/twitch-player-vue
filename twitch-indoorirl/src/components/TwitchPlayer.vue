<template>
  <div class="container">
    <h1>IndoorIRL Streamer: {{ streamer }}</h1>
    <div v-if="streamer" id="twitch-embed"></div>
    <p v-else>Specify an indoor IRL streamer in the URL (e.g., /xQc).</p>
  </div>
</template>

<script>
export default {
  props: ['streamer'],
  mounted() {
    if (this.streamer) {
      this.initializeTwitchPlayer();
    }
  },
  methods: {
    initializeTwitchPlayer() {
      const script = document.createElement('script');
      script.src = 'https://player.twitch.tv/js/embed/v1.js';
      script.async = true;
      script.onload = () => {
        new Twitch.Player('twitch-embed', {
          channel: this.streamer,
          layout: 'video',
          width: '100%',
          height: '100%',
        });
      };
      document.body.appendChild(script);
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-align: center;
}
h1 {
  text-align: center;
}
#twitch-embed {
  width: 1280px;
  height: 720px;
  margin: 0 auto;
  padding: 0;
  border: none;
  aspect-ratio: 16 / 9;
}

</style>
