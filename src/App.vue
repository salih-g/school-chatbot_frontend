<template>
  <Chat />
</template>

<script>
import Chat from './components/ChatBox.vue';

export default {
  name: 'App',
  components: {
    Chat,
  },
};
</script>

<style>
:root {
  --blue: #007fef;
  --borderRadiusBase: 3px;
  --chatWidth: 48rem;
  --chatInputWidth: 48rem;
  --chatBackground: #eee;
  --chatInputHeight: 5rem;
  --chatInputInnerHeight: 3rem;
}
* {
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background: var(--blue);
  font-family: 'Roboto', sans-serif;
}
</style>
