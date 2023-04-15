let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = async function update(req) {
  if (req.requestContext.http.method=='GET'){
    return await data.get({'table':'todos',key:req.pathParameters.id})
  }else
  {
    let b = arc.http.helpers.bodyParser(req)
    command=b.command
    ttt= await data.get({'table':'todos',key:req.pathParameters.id})
    ttt.command=command
    return await data.set(ttt)
  }
}
