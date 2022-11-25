/* eslint-disable react/react-in-jsx-scope */
const formatText = text => {
  const formattedText = text.split(' ').map(
    (x,i) => x.startsWith('http') ?
    <a key={i} href={x}>{x}</a> : <span key={i}> {x} </span>
  )
  return formattedText
}

export default formatText

