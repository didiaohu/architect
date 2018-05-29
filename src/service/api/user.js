export const getUser = user => {
  fetch('static/json/user.json') // options省略表示get
    .then(function (response) {
      return response.json() // 生成json,
    })
    .then(function (data) {
      console.log(data)
      user(data)
    })
    .catch(function () {
      console.log('Oops, error')
    })
}
