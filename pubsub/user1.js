import pubsub from './index'

const unsubscribe = pubsub.subscribe('ping-other', (name) => {
  console.log(`Hello ${name}, This is user 1. How may I help you!`)
})


document
  .querySelector('#user1')
  .addEventListener('click', () => {
    pubsub.publish('ping-other', 'User 2')
    unsubscribe()
  })