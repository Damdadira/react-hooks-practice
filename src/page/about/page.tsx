import { AboutDataType } from '../../entities/about'; //api type 정의한거 가져오기

type PageProps = { //사용할 props 새롭게 정의 or 그대로 사용
  auth: any;
  data: AboutDataType
}

export default function Page({auth, data}:PageProps){ //
  return (
    // <>
    //   <AboutHeader/>
    //   <AboutContent/>
    //   <AboutFooter/>
    // </>
  )
}