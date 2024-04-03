import React from 'react'

const MemoChild = () => {
    console.log('gio')
  return (
    <>
    <div>MemoChild</div>
    </>
  )
}

export default React.memo(MemoChild)