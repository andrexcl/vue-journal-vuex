export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error fuga libero doloribus iure accusamus ipsum cumque est recusandae provident iste? Obcaecati beatae similique atque minus aspernatur doloribus provident, aperiam voluptate.",
            picture: null,
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error fuga libero doloribus iure accusamus ipsum cumque est recusandae provident iste? Obcaecati beatae similique atque minus aspernatur doloribus provident, aperiam voluptate.",
            picture: null,
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error fuga libero doloribus iure accusamus ipsum cumque est recusandae provident iste? Obcaecati beatae similique atque minus aspernatur doloribus provident, aperiam voluptate.",
            picture: null,
        },
    ],
});
