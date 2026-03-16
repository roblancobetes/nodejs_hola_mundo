const express = require("express")
const app = express()

const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
  const podName = process.env.POD_NAME || 'unknown';
  const podNamespace = process.env.POD_NAMESPACE || 'unknown';
  res.send(`Hola mundo desde Azure 🚀 - Pod: ${podName} in namespace: ${podNamespace}`)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
