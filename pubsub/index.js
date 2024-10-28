console.log("Welcome to PUB SUB1")

const pubsub = {
  subscribers: {},
  publish (eventName, cbData) {
    if (!Array.isArray(this.subscribers[eventName])) {
      return
    }
    
    this.subscribers[eventName].forEach(
      cb => cb(cbData)
    )
  },
  subscribe (eventName, callback) {
    if(!Array.isArray(this.subscribers[eventName])) {
      this.subscribers[eventName] = []
    }
    
    this.subscribers[eventName].push(callback)
    const index = this.subscribers[eventName].length - 1
    return () => {
      this.subscribers[eventName].splice(index, 1)
    }
  },
}

export default pubsub;