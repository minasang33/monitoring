
import React  from 'react';
//import LogDetail from "./LogDetail";
import Log from "./Log";

function LogMng2(){

  return (
    <div className="">
      <div className="artboard pt-3">
        <div style={{display:"flex", height:"100%", flexDirection:"column"}}>
          <div style={{flexGrow: "1"}}>
            <section id="id" className="body-C61RwL mx-auto">
              <div className="pagemenutext-ReblZH">
                <div className="curPage">로그인로그</div>

                <div className="pageTextLabel malgungothicregular-normal-dove-gray-14px">
                  전라북도 경제 활성화를 위한 혁신성장의 촉진 플랫폼
                </div>

                <div className="bodytopline-nYSjG9">
                  <div className="boxgroup-IzV8Py">
                    <div className="bgimga-f4wOcZ">
                      <div className="bgimga01-kendnW"></div>
                      <div className="bgimga02-kendnW"></div>
                    </div>
                    <div className="bgimgb-f4wOcZ">
                      <div className="bgimgb01-lp1QJN"></div>
                      <div className="bgimgb02-lp1QJN"></div>
                    </div>
                    <div className="bgimgc-f4wOcZ">
                      <div className="bgimgc01-JNGxVT"></div>
                      <div className="bgimgc02-JNGxVT"></div>
                    </div>
                    <div className="bgimgd-f4wOcZ">
                      <div className="bgimgd01-xWUHC7"></div>
                      <div className="bgimgd02-xWUHC7"></div>
                    </div>
                    <div className="bgimge-f4wOcZ">
                      <div className="bgimge01-gmnvr7"></div>
                      <div className="bgimge02-gmnvr7"></div>
                    </div>
                    <div className="bgimgf-f4wOcZ">
                      <div className="bgimgf01-JBaB05"></div>
                      <div className="bgimgf02-JBaB05"></div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="pagemenutext-ReblZH">

                <div className="pageInfoBox border-1px-bon-jour">
                  <div className="pageInfo">
                    전라북도 Smart 장비지원 플랫폼에<br/>장비를 등록한 기관의 기기정보와 현황을 확인할 수 있습니다.
                  </div>
                  <div className="pageSubInfo">
                    전라북도내 연구기관에서 보유하고 있는 공동활용가능한 기기들의 장비 목록입니다.
                  </div>
                </div>

              </div>


              <div className="row mx-0 mt-2 pt-3" style={ {borderTop : "1px solid #dcdcdc!important"}}>
                <div className="col-12 px-0 ">

                  <div className="card-body p-0 pb-3">

                    <div className="pagetextbox-ReblZH">

                      <Log />

                    </div>

                  </div>

                </div>
              </div>


            </section>

          </div>
        </div>
      </div>


    </div> )
}

export default LogMng2;
