/* global m, indent */
'use strict'

const rootAnchour = document.getElementById('content')
const headerAnchour = document.getElementById('header')
const footerAnchour = document.getElementById('footer')

const HeaderView = () => ({
  view: () => m('div', {class: 'container'},
    m('div', {class: 'row'},
      m('div', {class: 'column column-50 column-offset-25'},
        m('a', {href: '/#!/'}, [
          m('h2', {class: 'underlined'}, 'Demo Page'),
          m('h3', '[CodeDoor]')
        ])
      )
    )
  )
})

const FooterView = () => ({
  view: () => m('div', {class: 'container'},
    m('div', {class: 'row'},
      m('div', {class: 'column column-50 column-offset-25'}, [
        m('h3', 'Crafted with love, mithril and milligram.')
      ])
    )
  )
})

m.mount(headerAnchour, HeaderView)
m.mount(footerAnchour, FooterView)

// const cssFor = (id) => Object.entries(document.getElementById(id).style).filter(entry => entry[0] !== '0' && entry[1] !== '' && entry[1] !== null && entry[1] !== undefined).map(entry => `${entry[0]}: ${entry[1]};`).join('\n')
// const classesFor = (id) => Object.entries(document.getElementById(id).className).filter(entry => entry[0] !== '0' && entry[1] !== '' && entry[1] !== null && entry[1] !== undefined).map(entry => `${entry[0]}: ${entry[1]};`).join('\n')

let imageClass = 'profile'
let imageStyle = ''
let Image = m('img', {id: 'image', alt: 'Michelle Obama', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Michelle_Obama_official_portrait.jpg/800px-Michelle_Obama_official_portrait.jpg', class: imageClass, style: imageStyle})

let paragraphOneText = 'Michelle LaVaughn Robinson Obama (born January 17, 1964) is an American lawyer and writer who served as the First Lady of the United States from 2009 to 2017. She is married to the 44th U.S. President, Barack Obama, and was the first African-American First Lady. Raised on the South Side of Chicago, Illinois, Obama is a graduate of Princeton University and Harvard Law School, and spent her early legal career working at the law firm Sidley Austin, where she met her husband. She subsequently worked as the Associate Dean of Student Services at the University of Chicago and the Vice President for Community and External Affairs of the University of Chicago Medical Center. Barack and Michelle married in 1992 and have two daughters.'
let paragraphTwoText = 'Obama campaigned for her husband\'s presidential bid throughout 2007 and 2008, delivering a keynote address at the 2008 Democratic National Convention. She returned to speak at the 2012 Democratic National Convention, and again during the 2016 Democratic National Convention in Philadelphia, where she delivered a speech in support of the Democratic presidential nominee, and fellow First Lady, Hillary Clinton.'
let paragraphThreeText = 'As First Lady, Obama sought to become a role model for women, an advocate for poverty awareness, education, nutrition, physical activity and healthy eating, and became a fashion icon.'

let paragraphOneStyle = 'color: #76796c;'
let paragraphOneClass = 'paragraph'
let ParagraphOne = m('div', {id: 'paragraphOne', class: paragraphOneClass, style: paragraphOneStyle}, paragraphOneText)

let paragraphTwoStyle = 'color: #76796c;'
let paragraphTwoClass = 'paragraph\nunderlined'
let ParagraphTwo = m('div', {id: 'paragraphTwo', class: paragraphTwoClass, style: paragraphTwoStyle}, paragraphTwoText)

let paragraphThreeStyle = 'color: #76796c;\nfont-weight: bold;'
let paragraphThreeClass = 'paragraph'
let ParagraphThree = m('div', {id: 'paragraphThree', class: paragraphThreeClass, style: paragraphThreeStyle}, paragraphThreeText)

// let codeRows = 25
const updateCodeView = () => {
  return updateImageSource() + updateParagraphSource('One') + updateParagraphSource('Two') + updateParagraphSource('Three') || ''
}
const updateImageSource = () => {
  const image = document.getElementById('image')
  const code = document.getElementById('code')
  if (!image) {
    return null
  }
  code.value = indent.html(image.outerHTML.split('>').join('>\n').split('<').join('\n<'), {tabString: '  '})

  return code.value
}
const updateParagraphSource = (number) => {
  const paragraph = document.getElementById(`paragraph${number}`)
  const code = document.getElementById('code')
  if (!paragraph) {
    return null
  }
  // code.value = indent.html(rootAnchour.outerHTML.split('>').join('>\n').split('<').join('<'), {tabString: '  '})
  code.value = indent.html(paragraph.outerHTML.split('>').join('>\n').split('<').join('\n<'), {tabString: '  '})
  // code.value = tidy_html5(paragraphOne.outerHTML)
  // codeRows = code.value.split('\n').length
  // code.value = code.value.split('\n').slice(8, codeRows - 3).join('\n')

  return code.value
}
const ImageStyle = m('textarea', {
  id: 'imageStyle',
  oninput: () => {
    const editor = document.getElementById('imageStyle')
    imageStyle = editor.value
    Image = m('img', {id: 'image', alt: 'Michelle Obama', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Michelle_Obama_official_portrait.jpg/800px-Michelle_Obama_official_portrait.jpg', class: imageClass, style: imageStyle})
    editor.style.height = ''
    editor.style.height = editor.scrollHeight + 'px'
    Content.data = updateCodeView()
  }
}, imageStyle)
const ImageClass = m('textarea', {
  id: 'imageClass',
  oninput: () => {
    const editor = document.getElementById('imageClass')
    imageClass = editor.value
    Image = m('img', {id: 'image', alt: 'Michelle Obama', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Michelle_Obama_official_portrait.jpg/800px-Michelle_Obama_official_portrait.jpg', class: imageClass, style: imageStyle})
    editor.style.height = ''
    editor.style.height = editor.scrollHeight + 'px'
    Content.data = updateCodeView()
  }
}, imageClass)
const ParagraphOneStyle = m('textarea', {
  id: 'paragraphOneStyle',
  oninput: () => {
    const editor = document.getElementById('paragraphOneStyle')
    paragraphOneStyle = editor.value
    console.log(paragraphOneStyle)
    ParagraphOne = m('div', {id: 'paragraphOne', class: paragraphOneClass, style: paragraphOneStyle}, paragraphOneText)
    editor.style.height = ''
    editor.style.height = editor.scrollHeight + 'px'
    Content.data = updateCodeView()
  }
}, paragraphOneStyle)
const ParagraphOneClass = m('textarea', {
  id: 'paragraphOneClass',
  oninput: () => {
    const editor = document.getElementById('paragraphOneClass')
    paragraphOneClass = editor.value
    console.log(paragraphOneClass)
    ParagraphOne = m('div', {id: 'paragraphOne', class: paragraphOneClass, style: paragraphOneStyle}, paragraphOneText)
    editor.style.height = ''
    editor.style.height = editor.scrollHeight + 'px'
    Content.data = updateCodeView()
  }
}, paragraphOneClass)
const ParagraphTwoStyle = m('textarea', {
  id: 'paragraphTwoStyle',
  oninput: () => {
    const editor = document.getElementById('paragraphTwoStyle')
    paragraphTwoStyle = editor.value
    console.log(paragraphTwoStyle)
    ParagraphTwo = m('div', {id: 'paragraphTwo', class: paragraphTwoClass, style: paragraphTwoStyle}, paragraphTwoText)
    editor.style.height = ''
    editor.style.height = editor.scrollHeight + 'px'
    Content.data = updateCodeView()
  }
}, paragraphTwoStyle)
const ParagraphTwoClass = m('textarea', {
  id: 'paragraphTwoClass',
  oninput: () => {
    const editor = document.getElementById('paragraphTwoClass')
    paragraphTwoClass = editor.value
    console.log(paragraphTwoClass)
    ParagraphTwo = m('div', {id: 'paragraphTwo', class: paragraphTwoClass, style: paragraphTwoStyle}, paragraphTwoText)
    editor.style.height = ''
    editor.style.height = editor.scrollHeight + 'px'
    Content.data = updateCodeView()
  }
}, paragraphTwoClass)

const ParagraphThreeStyle = m('textarea', {
  id: 'paragraphThreeStyle',
  oninput: () => {
    const editor = document.getElementById('paragraphThreeStyle')
    paragraphThreeStyle = editor.value
    console.log(paragraphThreeStyle)
    ParagraphThree = m('div', {id: 'paragraphThree', class: paragraphThreeClass, style: paragraphThreeStyle}, paragraphThreeText)
    editor.style.height = ''
    editor.style.height = editor.scrollHeight + 'px'
    Content.data = updateCodeView()
  }
}, paragraphThreeStyle)
const ParagraphThreeClass = m('textarea', {
  id: 'paragraphThreeClass',
  oninput: () => {
    const editor = document.getElementById('paragraphThreeClass')
    paragraphThreeClass = editor.value
    console.log(paragraphThreeClass)
    ParagraphThree = m('div', {id: 'paragraphThree', class: paragraphThreeClass, style: paragraphThreeStyle}, paragraphThreeText)
    editor.style.height = ''
    editor.style.height = editor.scrollHeight + 'px'
    Content.data = updateCodeView()
  }
}, paragraphThreeClass)

const Content = {
  data: ''
}
const ContentView = () => ({
  oninit: async () => {
    Content.data = updateCodeView()
  },
  view: () => m('div', {class: 'container'},
    m('div', {class: 'row'}, [
      m('div', {class: 'column column-33'}, [
        m('label', {for: 'code'}, 'Source Code'),
        m('pre', {id: 'code', class: 'white-space: pre-line;', style: 'height: 32rem;'}, Content.data)
      ]),
      m('div', {class: 'column colum-66'},
        m('div', {class: 'row'}, [
          m('div', {class: 'column'},
            Image),
          m('div', {class: 'column'}, [
            m('label', {for: 'imageClass'}, 'Classes'),
            m('pre', {class: 'white-space: pre-line;'}, m('div', ImageClass)),
            m('label', {for: 'imageStyle'}, 'Styles'),
            m('pre', {class: 'white-space: pre-line;'}, m('div', ImageStyle))
          ])
        ]),
        m('div', {class: 'row'}, [
          m('div', {class: 'column'},
            ParagraphOne),
          m('div', {class: 'column'}, [
            m('label', {for: 'paragraphOneClass'}, 'Classes'),
            m('pre', {class: 'white-space: pre-line;'}, m('div', ParagraphOneClass)),
            m('label', {for: 'paragraphOneStyle'}, 'Styles'),
            m('pre', {class: 'white-space: pre-line;'}, m('div', ParagraphOneStyle))
          ])
        ]),
        m('div', {class: 'row'}, [
          m('div', {class: 'column'},
            ParagraphTwo),
          m('div', {class: 'column'}, [
            m('label', {for: 'paragraphTwoClass'}, 'Classes'),
            m('pre', {class: 'white-space: pre-line;'}, m('div', ParagraphTwoClass)),
            m('label', {for: 'paragraphTwoStyle'}, 'Styles'),
            m('pre', {class: 'white-space: pre-line;'}, m('div', ParagraphTwoStyle))
          ])
        ]),
        m('div', {class: 'row'}, [
          m('div', {class: 'column'},
            ParagraphThree),
          m('div', {class: 'column'}, [
            m('label', {for: 'paragraphThreeClass'}, 'Classes'),
            m('pre', {class: 'white-space: pre-line;'}, m('div', ParagraphThreeClass)),
            m('label', {for: 'paragraphTwoStyle'}, 'Styles'),
            m('pre', {class: 'white-space: pre-line;'}, m('div', ParagraphThreeStyle))
          ])
        ])
      )
    ])
  )
})

m.mount(rootAnchour, ContentView)
updateCodeView()
