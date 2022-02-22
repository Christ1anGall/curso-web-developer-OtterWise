import imgAvatarMan from '../assets/images/card/man.jpg'
import imgAvatarWoman from '../assets/images/card/woman.png'

//icons
import bookIcon from "../assets/images/banner/bookIcon.svg";
import computerIcon from "../assets/images/banner/computerIcon.svg";
import pencilIcon from "../assets/images/banner/pencilIcon.svg";
import rocketIcon from "../assets/images/banner/rocketIcon.svg";




export const bannersData = [
  {
    title: 'To do',
    icon: bookIcon,
    bgColorCard: '#59B4D1',
    colorTitle: '#fff',
    data: [
      { 
        name: 'Christmas Banners',
        image: imgAvatarMan,
        tag: 'Label',
        bgColorTag: '#59B4D1',
        colorTag: '#fff'
      },
      { 
        name: 'Redo Portfolio',
        image: imgAvatarMan,
        tag: 'Label',
        bgColorTag: '#59B4D1',
        colorTag: '#fff'
      }
    ]
  },
  {
    title:  'In progress',
    icon: computerIcon,
    bgColorCard: '#D0935A',
    colorTitle: '#fff',
    data: [
      { 
        name: 'Coffee Break',
        image: imgAvatarWoman,
        tag: 'Always',
        bgColorTag: '#D0935A',
        colorTag: '#fff'
      },
      { 
        name: 'Updating Portfolio',
        image: imgAvatarWoman,
        tag: 'Webflow',
        bgColorTag: '#D0935A',
        colorTag: '#fff'
      }
    ]
  },
  {
    title: 'Review',
    icon: pencilIcon,
    bgColorCard: '#945AD1',
    colorTitle: '#fff',
    data: [
      { 
        name: 'Release to Figma Community',
        image: imgAvatarMan,
        tag: 'Release',
        bgColorTag: '#945AD1',
        colorTag: '#fff'
      },
      { 
        name: 'User Feedback',
        image: imgAvatarMan,
        tag: 'Feedback',
        bgColorTag: '#945AD1',
        colorTag: '#fff'
      },
      { 
        name: 'Background images from humaaans.com',
        image: imgAvatarMan,
        tag: 'Sourcing',
        bgColorTag: '#945AD1',
        colorTag: '#fff'
      }
    ]
  },
  {
    title: 'Done',
    icon: rocketIcon,
    bgColorCard: '#59D090',
    colorTitle: '#000',
    data: [
      { 
        name: 'Style Guide',
        image: imgAvatarWoman,
        tag: 'UI',
        bgColorTag: '#59D090',
        colorTag: '#000'
      },
      { 
        name: 'Component Library',
        image: imgAvatarWoman,
        tag: 'UI',
        bgColorTag: '#59D090',
        colorTag: '#000'
      },
      { 
        name: 'Sticker Components',
        image: imgAvatarWoman,
        tag: 'UI',
        bgColorTag: '#59D090',
        colorTag: '#000'
      },
    ]
  }
]