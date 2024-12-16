<template>
  <div>
    <h1>Twitch Streamer: {{ streamer }}</h1>
    <div v-if="streamer" id="twitch-embed"></div>
    <p v-else>Please specify a streamer in the URL (e.g., /xQc).</p>
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
          height: '480',
        });
      };
      document.body.appendChild(script);
    },
  },
};
</script>

<style>
#twitch-embed {
  margin-top: 20px;
}
</style>
