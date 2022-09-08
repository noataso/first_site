let unko = 'Hello World!';
//unko = 'Hello Wolrd2!!';

//定数
const bigUnko = 'He..Hell...Hello World!';

const inoki = ['いーち', 'にー', 'さーん', 'ダー！！']

// let index = 0;
// while (index < inoki.length) {
//     console.log(inoki[index]);
//     index++;
// }

// if (inoki.length > 5) {
//     console.log('ボンバイエ！');
// } else {
//     console.log('ボンバ...!');
// }

const test = (arg) => {
    if (inoki.length > arg) {
        console.log('ボンバイエ！');
    } else {
        console.log('ボンバ...!');
    }
};

// オブジェクト
const unko2 = {
    color: 'pink',
    size: 'large',
    purfume: 'mint',
    goToilet: () => {
        console.log('Hello world!');
    }
};
document.getElementsByTagName('button')[0].addEventListener('click', () => {
    window.alert('Hello World');
});