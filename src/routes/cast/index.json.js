export async function get() {
    // connect to db to fetch & parse data
   
    const cast = [
      { 
          id: 1, 
          character: 'モンドー',
          role: 'mondo',
          name: '高岩成二',
          reading: 'Seiji Takaiwa',
          img: 'img-01.jpg',
        },
      { 
          id: 2, 
          character: 'サリー',
          role: 'sally',
          name: '関口 理紗',
          reading: 'Lisa Sekiguchi',
          img: 'img-02.jpg',
        },
      { 
          id: 3, 
          character: '泉鏡一',
          role: 'izumi',
          name: '喜多村一郎',
          reading: 'Ichiro Kitamura',
          img: 'img-03.jpg',
        },
      { 
          id: 4, 
          character: '高月加奈子',
          role: 'kanakoA',
          name: 'うみのゆき',
          reading: 'Yuki Umino',
          img: 'img-04.jpg',
        },
      { 
          id: 5, 
          character: '高月加奈子',
          role: 'kanakoB',
          name: '金岡千尋',
          reading: 'Chihiro Kanaoka',
          img: 'img-05.jpg',
        },
      { 
          id: 6, 
          character: '古海忠之',
          role: 'furumiA',
          name: '吉田茂也',
          reading: 'Shigenari Yoshida',
          img: 'img-06.jpg',
        },
      { 
          id: 7, 
          character: '古海忠之',
          role: 'furumiB',
          name: '喜多村次郎',
          reading: 'Jiro Kitamura',
          img: 'img-07.jpg',
        },
      { 
          id: 8, 
          character: '氷室敬一',
          role: 'himuro',
          name: '畑中凛太郎',
          reading: 'Tarorin',
          img: 'img-08.jpg',
        },
      { 
          id: 9, 
          character: 'チンピラ',
          role: 'chinpira',
          name: 'ディエゴ',
          reading: 'Diego',
          img: 'img-09.jpg',
        },
    ]

    // const staff = [
    //   {
    //     id: 1,
    //     name: '小峯和浩',
    //     reading: 'Kazuhiro Komine',
    //     role: ['演出', '照明'],
    //   },
    // ]
  
    return {
      status: 200,
      body: { cast } 
    }
  }
  
  // other handlers
  // export async function post() {}
  // export async function del() {}