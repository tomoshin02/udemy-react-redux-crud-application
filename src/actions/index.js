//action JSオブジェクト
//typeの値はユニークである必要がある。
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

export const increment = =() => ({
  type:'INCREMENT'
})

export const decrement = () => ({
  type:'DECREMENT'
})
