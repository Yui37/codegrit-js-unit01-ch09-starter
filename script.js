
//画像情報のオブジェクトを格納した配列
const picArray = [
    {src: './images/pic_1.jpg', title: 'picture 1'},
    {src: './images/pic_2.jpg', title: 'picture 2'},
    {src: './images/pic_3.jpg', title: 'picture 3'},
    {src: './images/pic_4.jpg', title: 'picture 4'},
    {src: './images/pic_5.jpg', title: 'picture 5'},
    {src: './images/pic_6.jpg', title: 'picture 6'}
    ];
    
//スライドショーが再生中かどうかを記録しておくためのグローバル変数
let playingID = 0;
let counter = 0;

//写真を切り替える関数
//関数名「changePicture」
// thisを使うならアロー関数は使えない（thisの本来の動きをしないから）
const changePicture = () =>{
    // 5W1H when what how
    // １、画像要素を取得する　DOM　getElementByIdを使う
    counter++;

    document.getElementById('pics').src = picArray[counter].src;
    document.getElementById('pic-title').innerHTML = picArray[counter].title;

    console.log(picArray[counter].title);
    console.log(picArray[counter].src);

    // if文で条件分岐する
    if( counter <= 5 ){ //写真がひとつづつ読み込まれるとき（写真が変化する時）
        img.src = picArray[counter].src + picArray[counter].title;
        
    }else{//ブラウザーが読み込まれたとき（初期の画像）
        img.src = picArray[0].src + picArray[0].title;
    }
}

changePicture();

// ボタンを押してスライドショーを再生・停止する関数
//関数名「playSlidedeshow」
document.getElementById('playButton');

// let playSlidedeshow = () => {
// setInterval(function() {},2000);
// }