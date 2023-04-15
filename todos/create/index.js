let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = async function create(req) {
  let todo = arc.http.helpers.bodyParser(req)
  dt={}
  dt.updated = Date.now()
  dt.key=todo.channel
  dt.dir=todo.dir
  dt.pid=todo.pid
  await data.set({
    table: 'todos',
   ...dt
  })
  return {
    'ok':true
  }
}
