import color from '../components/img/color.png'
import gallery from '../components/img/gallery.png'
import notes from '../components/img/note.png'
import text from '../components/img/text.png'

export const FeatureData = [
    {
        id:0,
        title:'Generate Colors',
        imgurl: color,
        reference:'color',
        text:'You can type in  range and color Code of your desire colors and copy to your clipboard'
    },
    {
        id:1,
        title:'Image Gallery',
        imgurl:gallery,
        reference:"gallery",
        text:'You can type in the context of the image you want. The process will utilize the Unsplashed API to generate the images.'

    },
    {
        id:2,
        title:'Generate Text',
        imgurl:text,
        reference:'text',
        text:'You can choose among given Categories to Generate the block of text. ( Click to action ).'
    },
    {
        id:3,
        title:'Decent Notepad',
        imgurl:notes,
        reference:'note',
        text:'You can store the small chunks note in local storage.'
    }
    
]

console.log(FeatureData);