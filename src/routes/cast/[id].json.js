export async function get({ params }) {
    // connect to db to fetch & parse data
   
    const cast = [
        { 
            id: 1, 
            character: 'モンドー',
            role: 'mondo',
            name: '高岩成二',
            reading: 'Seiji Takaiwa',
            affiliation: 'T.A Widen',
            comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit nisi maiores eveniet! Iste aliquid modi veritatisa',
            img: '/img-01.jpg',
          },
        { 
            id: 2, 
            character: 'サリー',
            role: 'sally',
            name: '関口 理紗',
            reading: 'Lisa Sekiguchi',
            affiliation: '劇団メリシーアク',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eos fugit culpa placeat quos voluptates ad cum, ipsam expedita assumenda!a',
            img: '/img-02.jpg',
          },
        { 
            id: 3, 
            character: '泉鏡一',
            role: 'izumi',
            name: '喜多村一郎',
            reading: 'Ichiro Kitamura',
            affiliation: '劇団新派',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, similique corrupti tenetur sed eaque ratione?',
            img: '/img-03.jpg',
          },
        { 
            id: 4, 
            character: '高月加奈子',
            role: 'kanakoA',
            name: 'うみのゆき',
            reading: 'Yuki Umino',
            affiliation: '劇団メリシーアク',
            comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit nisi maiores eveniet! Iste aliquid modi veritatisa',
            img: '/img-04.jpg',
          },
        { 
            id: 5, 
            character: '高月加奈子',
            role: 'kanakoB',
            name: '金岡千尋',
            reading: 'Chihiro Kanaoka',
            affiliation: 'a',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eos fugit culpa placeat quos voluptates ad cum, ipsam expedita assumenda!a',
            img: '/img-05.jpg',
          },
        { 
            id: 6, 
            character: '古海忠之',
            role: 'furumiA',
            name: '吉田茂也',
            reading: 'Shigenari Yoshida',
            affiliation: 'T.A Widen',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, similique corrupti tenetur sed eaque ratione?',
            img: '/img-06.jpg',
          },
        { 
            id: 7, 
            character: '古海忠之',
            role: 'furumiB',
            name: '喜多村次郎',
            reading: 'Jiro Kitamura',
            affiliation: '劇団新派',
            comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit nisi maiores eveniet! Iste aliquid modi veritatisa',
            img: '/img-07.jpg',
          },
        { 
            id: 8, 
            character: '氷室敬一',
            role: 'himuro',
            name: '畑中凛太郎',
            reading: 'Tarorin',
            affiliation: '劇団メリシーアク',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eos fugit culpa placeat quos voluptates ad cum, ipsam expedita assumenda!a',
            img: '/img-08.jpg',
          },
        { 
            id: 9, 
            character: 'チンピラ',
            role: 'chinpira',
            name: 'ディエゴ',
            reading: 'Diego',
            affiliation: '劇団メリシーアク',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, similique corrupti tenetur sed eaque ratione?',
            img: '/img-09.jpg',
          },
    ]

    const actor = cast.find((c) => c.role == params.id)

  if (actor) {
    return {
      status: 200,
      body: { actor } 
    }
  }

  return {
    status: 404
  }
}