import React from "react"
import Modal from "./components/common/Modal/Modal"
import Button from "./components/common/Button/Button"

const App = () => {
  return (
    <Modal>
      <h1>Modal</h1>
      <Modal.Section>
        <Button preset="primary">Add preferences</Button>
      </Modal.Section>
    </Modal>
  )
}

export default App

