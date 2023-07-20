const { Router } = require('express')
const router = Router()

const webpush = require('../webpush')
let pushSubscribe

router.post('/subscribe', async (req, res) => {
  pushSubscribe = req.body
  res.status(200).json()
})

router.post('/send', async (req, res) => {

  const mensaje = JSON.stringify(req.body)
  res.status(200).json({
    ok: true,
    mensaje
  })

  try {
    await webpush.sendNotification(pushSubscribe, mensaje)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router