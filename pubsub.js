console.log("Welcome to PUB SUB")


let subsribers = {}

module.exports = {
  publish (eventName, cbData) {
    if (!subscribers[eventName]) {
      return
    }
    
    subscribers[eventName].forEach(
      c
    )
  },
  subscribe (eventName, callback) {
    if(!subscribers[eventName]) {
      subscribers[eventName] = []
    }
    
    subscribers[eventName].push(callback)
  }
}