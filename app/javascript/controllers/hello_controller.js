import { Controller } from "@hotwired/stimulus"
const outputs = []

export default class extends Controller {
  static targets = ["answer", "form", "guess", "output", "outputArray", "response", "incrementer", "lossResponse", "winResponse"]

  connect() {
    console.log("Hello")
    this.incrementerTarget.value = 10
    this.lossResponseTarget.style.display = "none"
    this.winResponseTarget.style.display = "none"
    this.answerTarget.style.display = "none"
    this.answerTarget.value = Math.floor(Math.random() * 1000000)
    this.answerTarget.textContent =
      this.answerTarget.value
  }

  guess() {
    this.outputTarget.textContent =
      `Your Guess is: ${this.guessTarget.value}`
    this.yourAnswerSucks(this.guessTarget.value)
    this.increment()
    this.haddalayerdown()
    this.outputs()
  }

  yourAnswerSucks(value){
    var value = parseInt(value)
    var response = ""
    if (value < this.answerTarget.value){
      response = "you are too low"
    }
    if (value > this.answerTarget.value){
      response = "you are too high"
    }
    if (value == this.answerTarget.value){
      response = "you are right"
      this.winResponseTarget.style.display = "block"
      this.formTarget.style.display = "none"
      this.answerTarget.textContent =
      `The correct answer was ${this.answerTarget.value}`
      this.answerTarget.style.display = "block"
    }
    this.responseTarget.textContent = response
  }

  increment(){
    this.incrementerTarget.value = this.incrementerTarget.value - 1
    this.incrementerTarget.textContent = 
      `You have ${this.incrementerTarget.value} guesses left`
  }

  haddalayerdown(){
    var guessesLeft = this.incrementerTarget.value 
    if (guessesLeft == 0){
      this.formTarget.style.display = "none"
      this.lossResponseTarget.style.display = "block"
      this.answerTarget.textContent =
        `The correct answer was ${this.answerTarget.value}`
      this.answerTarget.style.display = "block"
    }
  }

   outputs(){
    outputs.push(this.guessTarget.value)
    this.outputArrayTarget.textContent = 
      "Your guesses so far have been: " + outputs.join(", ") 
   }
  //  TO DO:
  // add red/green for too low/too high in outputs array??
  // add final guess to You Lose HaHa screen
  // worldle like boxes?
}
