import pubsub from './index'

pubsub.subscribe('ping-other', (name) => {
  console.log(`Hello ${name}, This is user 2. How may I help you!`)
})


document
  .querySelector('#user2')
  .addEventListener('click', () => {
    pubsub.publish('ping-other', 'User 1')
  })