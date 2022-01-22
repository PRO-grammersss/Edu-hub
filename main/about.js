var reasons = [
    "Have digital notes",
    "24/7 digital forum",
    "Todo list installed",
    "Can contact anyone"
];

var image = [
    "https://images.unsplash.com/photo-1569360531163-a61fa3da86ee?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MjgzODg1Ng&ixlib=rb-1.2.1&q=85",
    "https://images.unsplash.com/photo-1504270997636-07ddfbd48945?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0Mjg0MTIwNQ&ixlib=rb-1.2.1&q=85",
    "https://images.unsplash.com/photo-1586282023358-13b511ccd21c?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0Mjg0MTI2Mg&ixlib=rb-1.2.1&q=85",
    "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0Mjg0MTM2Ng&ixlib=rb-1.2.1&q=85"
];

var count = 0

function slides() {
    document.getElementById("text").innerHTML = reasons[count];
    document.getElementById("pic").src = image[count];
    count++
    if (count == 4) {
        count = 0
    }
}