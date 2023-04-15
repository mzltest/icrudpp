const data = require('@begin/data')

exports.handler = async function read(req) {
  channel=req.pathParameters.channel
  dt=await data.get({'table':'todos','key':channel}) 
  return {'command':dt.command}
}
