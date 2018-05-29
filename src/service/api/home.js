export const getProducts = (shop) => {
    fetch('static/json/home.json')// options省略表示get
        .then(function (response) {
            return response.json();// 生成json,
        })
        .then(function (data) {
            shop(data);
            console.log()
        }).catch(function () {
        });
};
