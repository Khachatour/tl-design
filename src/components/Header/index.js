import React from 'react'
import Button from 'grommet/components/Button'
import Edit from 'grommet/components/icons/base/Edit'

export const Header = (props) => {
  return (
    <div style={{ marginTop: 20 }}>header
      <Button icon={<Edit />}
        label='Label'
        onClick={() => console.log('test')}
        href='' />
    </div>
  )
}
