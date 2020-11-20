
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
const changePicture = function(){
    // 5W1H when what how
    // １、画像要素を取得する　DOM　getElementByIdを使う

    // if文で条件分岐する
    if(counter < picArray.length){ //写真がひとつづつ読み込まれるとき（写真が変化する時)
        document.getElementById('pics').src = picArray[counter].src;
        document.getElementById('pic-title').innerHTML = picArray[counter].title;

        counter++;
    }else{//ブラウザーが読み込まれたとき（初期の画像）
        document.getElementById('pics').src = picArray[1].src;
        document.getElementById('pic-title').innerHTML = picArray[1].title;

        counter = 0;// バグ出る　カウンター変数いる ifに書いた情報はelseにもかく
    }
}

// ボタンを押してスライドショーを再生・停止する関数
//関数名「playSlideshow」

const playSlideshow = function(){
    // フロー　（playボタンを押すと画像が２秒毎に１から６に変わる）（stopボタンを押すと画像の動きが停止する）
    console.log('関数playSlideshow直下');
    if(playingID == 0){//playボタンを押したら　０
        console.log('if文内');
        playingID = setInterval(changePicture,2000);
        document.getElementById('playButton').innerHTML ='STOP';
        console.log(playingID);
    }else{//ブラウザ読み込まれたら　０以外
        console.log('else文内');
        clearInterval(playingID);
        document.getElementById('playButton').innerHTML ='PLAY';
        playingID = 0;
        console.log(playingID);
    }
    console.log('if文構文直下');
}