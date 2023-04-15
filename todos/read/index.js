const data = require('@begin/data')

exports.handler = async function read(req) {
  channel=req.pathParameters.channel
  dt=await data.get({'table':'todos','key':channel}) 
  dt.updated = Date.now()
  await data.set({'table':'todos',dt})
  return {'command':dt.command}
}
