
(async () => {

  const Q = [
    'name  ?   ',
    'age ?   ',
    'location ?   ',
  ]

  const cb2promise = fn => (...args) => new Promise(res => {
    args.push((...ars) => { res(ars) })
    fn.apply(null, args)
  })

  async function getAnswers (Q, obj = {
    length: 20,
    trim: true
  }) {
    const { length, trim } = obj
    const answer = {}
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    })
    for (const item of Q) {
      const [c] = await cb2promise(readline.question.bind(readline))(item.padEnd(length))
      answer[item] = trim ? c.trim() : c
    }
    readline.close()
    return answer
  }

  const answer = await getAnswers(Q, { length: 50 })
  console.table([answer], Q)

})(this)

