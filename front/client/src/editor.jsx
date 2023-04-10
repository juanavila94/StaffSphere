import React from 'react'
import AvatarEditor from 'react-avatar-editor'

class MyEditor extends React.Component {
  render() {
    return (
      <AvatarEditor
        image='https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen-930x487.jpg'
        height={250}
        border={50}
        color={[255, 255, 255, 0.6]} // RGBA
        scale={1.2}
        rotate={0}
      />
    )
  }
}

export default MyEditor
