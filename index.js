const express = require('express')
const app = express()

app.listen(process.env.PORT, () => {
  console.log(`Database name: ${process.env.DATABASE_NAME}`)
  console.log(`Database username: ${process.env.DATABASE_USERNAME}`)
  console.log(`Database password: ${process.env.DATABASE_PASSWORD}`)
  console.log('Server started at port: ' + process.env.PORT)
})
