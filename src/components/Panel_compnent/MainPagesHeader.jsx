import Img from 'components/Img/Img'
import React from 'react'
import Image from 'Utils/Image'

const MainPagesHeader = () => {
  return (
    <header>
      <div className="container-fluid h-100 p-0">
        <div className='d-flex flex-wrap align-items-center h-100 px-5'>
          <div className="col">
            <Img
              src={Image.companyLogoBlue}
              className="cursor-pointer"
              width="198px"
              height="33px"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainPagesHeader