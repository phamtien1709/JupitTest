<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <div>Set number of PIN: <input @input="setLengthOfPIN" /></div>
  <br />
  <br />
  <div className="input-wrapper">
    <v-otp-input
      ref="otpInput"
      v-model:value="bindValue"
      input-classes="otp-input"
      separator="-"
      :num-inputs="lengthOfPIN"
      :should-auto-focus="true"
      input-type="password"
      :conditionalClass="['one', 'two', 'three', 'four']"
      @on-change="handleOnChange"
      @on-complete="handleOnComplete"
    />
  </div>

  <ul :style="gridStyle" class="card-list">
    <li v-for="(card, index) in cards" class="card-item" :key="card" @click="fillInput(index + 1)">
      {{ index + 1 }}
    </li>
  </ul>
</template>

<script>
import { ref, unref } from 'vue'
import VOtpInput from 'vue3-otp-input'

const otpInput = ref(null)
const bindValue = ref('')
const lengthOfPIN = ref(5)

const handleOnComplete = () => {
  console.log('OTP v-model:value: ', unref(bindValue))
}

const handleOnChange = (value) => {
  if (unref(bindValue).length <= lengthOfPIN.value) {
    bindValue.value += value.toString()
  }
}

const clearInput = () => {
  if (unref(otpInput)) {
    unref(otpInput).clearInput()
  }
}

const setLengthOfPIN = (event) => {
  lengthOfPIN.value = Number.parseInt(event.target.value) || 5
}

const fillInput = (value) => {
  if (unref(bindValue).length <= lengthOfPIN.value) {
    bindValue.value += value.toString()
  }
}

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components: {
    VOtpInput,
  },
  data() {
    return {
      cards: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      numberOfColumns: 3,
    }
  },
  computed: {
    gridStyle() {
      return {
        gridTemplateColumns: `repeat(${this.numberOfColumns}, minmax(100px, 1fr))`,
      }
    },
  },
  methods: {
    addCard() {
      this.cards.push('new-card')
    },
    handleOnChange,
    handleOnComplete,
    clearInput,
    fillInput,
    setLengthOfPIN,
  },
  setup() {
    return {
      otpInput,
      bindValue,
      lengthOfPIN,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.card-list {
  display: grid;
  grid-gap: 1em;
}

.card-item {
  background-color: dodgerblue;
  padding: 2em;
}
.input-wrapper {
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.otp-input {
  width: 40px;
  height: 40px;
  padding: 20px;
  font-size: 30px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
}
/* Background colour of an input field with value */
.otp-input.is-complete {
  background-color: #e4e4e4;
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
input::placeholder {
  font-size: 30px;
  text-align: center;
  font-weight: 600;
}
</style>
