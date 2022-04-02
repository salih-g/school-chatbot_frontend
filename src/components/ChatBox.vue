<template>
  <div>
    <div class="ChatWindow">
      <div class="ChatItem ChatItem--bot">
        <div class="ChatItem-meta">
          <div class="ChatItem-avatar">
            <img
              class="ChatItem-avatarImage"
              src="https://image.ibb.co/eTiXWa/avatarrobot.png"
              alt=""
            />
          </div>
        </div>
        <div class="ChatItem-chatContent">
          <div class="ChatItem-chatText">sound isnt working on my phone anymore</div>
          <div class="ChatItem-timeStamp"><strong>Chat Bot</strong> • Today 05:49</div>
        </div>
      </div>

      <div class="ChatItem ChatItem--user">
        <div class="ChatItem-meta">
          <div class="ChatItem-avatar">
            <img
              class="ChatItem-avatarImage"
              src="https://avatars.dicebear.com/api/avataaars/omer.svg"
              alt=""
            />
          </div>
        </div>
        <div class="ChatItem-chatContent">
          <div class="ChatItem-chatText">hi there!</div>
          <div class="ChatItem-timeStamp"><strong>Me</strong> • Today 05:49</div>
        </div>
      </div>
      <form class="ChatInput is-hidey" @submit.prevent="sendMessage">
        <label for="message">
          <input
            type="text"
            name="message"
            class="ChatInput-input"
            placeholder="Buraya yaz..."
            v-model="message"
          />
        </label>
        <button type="submit">Helüüü</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      messages: [],
    };
  },

  sockets: {},
  methods: {
    sendMessage() {
      console.log('gitti');
      this.$socket.emit('new_message', { name: this.name, message: this.message });
      this.message = '';
    },
  },
};
</script>

<style scoped>
strong {
  font-weight: bold;
}
.ChatWindow {
  width: 48rem;
  height: 90vh;
  padding: 2.5rem;
  padding-bottom: 6.5rem;
  overflow: hidden;
  overflow-y: auto;
  align-self: flex-end;
  background: #eee;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
  border-radius: 3px 3px 0 0;
}
.ChatItem {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 2rem;
}
.ChatItem--user {
  flex-direction: row-reverse;
}
.ChatItem-meta {
  display: flex;
  align-items: center;
  flex: 0 1 auto;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
  width: 2.5rem;
}
.ChatItem--user .ChatItem-meta {
  margin-right: 0;
  margin-left: 1rem;
}
.ChatItem-chatContent {
  position: relative;
  flex: 1 0 auto;
  width: 100%;
}
.ChatItem-avatar {
  width: 2.5rem;
  height: 2.5rem;
}
.ChatItem--user .ChatItem-avatar {
  margin-right: 0;
}
.ChatItem-avatarImage {
  max-width: 100%;
  border-radius: 100em;
}
.ChatItem-avatarInitials {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: #ccc;
  color: #444;
  border-radius: 100em;
}
.ChatItem-timeStamp {
  width: 70%;
  font-size: 0.875rem;
  color: #666;
}
.ChatItem--user .ChatItem-timeStamp {
  margin-left: auto;
}
.ChatItem-chatText {
  position: relative;
  width: 70%;
  margin-bottom: 0.5rem;
  padding: 1rem;
  background: #007fef;
  color: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.175);
  line-height: 1.3;
}
.ChatItem-chatText:first-child::before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: -0.4rem;
  width: 1rem;
  height: 1rem;
  transform: scaleX(0.8) skew(45deg);
  background: #007fef;
}
.ChatItem--user .ChatItem-chatText:first-child::before {
  right: -0.4rem;
  left: auto;
  transform: skew(-40deg);
  background: #fff;
  background: #fff;
  box-shadow: 4px 0 4px -1px rgba(0, 0, 0, 0.1);
}
.ChatItem--user .ChatItem-chatText {
  margin-left: auto;
  border: 1px solid #dbdbdb;
  background: white;
  color: #666;
}
.ChatItem-chatText > div {
  display: inline;
}
.ChatInput {
  position: fixed;
  bottom: 0;
  left: 50%;
  z-index: 10;
  width: 48rem;
  height: 5rem;
  transform: translateX(-50%);
  background: #eee;
}
.ChatInput-input {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  padding: 1rem 1.5rem;
  padding-right: 5.25rem;
  border: 0;
  border-top: 1px solid #ccc;
  overflow: hidden;
  overflow-y: scroll;
  background: #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  resize: none;
}
[contenteditable]:empty:before {
  content: attr(placeholder);
  display: block;
  color: #999;
}
[contenteditable]:active,
[contenteditable]:focus {
  border: 0;
  border-top: 1px solid #ccc;
  outline: 0;
  box-shadow: inherit;
}
.ChatInput-btnSend {
  display: block;
  position: absolute;
  top: 50%;
  right: 1.5rem;
  transform: translateY(-50%);
  border: none;
  border-radius: 3px;
  background: #007fef;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  color: white;
  cursor: pointer;
}
</style>
