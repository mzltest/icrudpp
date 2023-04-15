let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = async function destroy(req) {
  let b = arc.http.helpers.bodyParser(req)
  key=b.channel
  dt=await data.set({'table':todos,'key':key,'updated':Date.now(),'command':'','output':b.output})
  return {'ok':true}
}
