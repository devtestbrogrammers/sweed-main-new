import Image from 'next/image'

export default function AllYouNeed() {
    return (
      <div className="all-you-need-section lg:py-20 bg-white">
        <div className="container py-20">
          <div className="pb-[30px] md:pb-[60px]">
            <h2 className="t-heading-1-md text-[#181819]">All You Need <br/>In One Place</h2>
          </div>
          <div className="blocks-row text-center flex justify-center max-w-[1140px] m-auto xl:gap-[10px] flex-wrap">
            <div className='block block-1 w-[33.33%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative'>
              <div className=' absolute top-[40px] left-[108px] w-[340px] rotate-[0deg] bg-gradient-to-r from-[#FFBF00] to-[#0280AF] h-[1px] z-20'></div>
              <div className=' absolute top-[145px] left-[75px] w-[340px] rotate-[34deg] bg-gradient-to-r from-[#FFBF00] to-[#06AED5] h-[1px] z-20'></div>
              <div className=' absolute top-[130px] left-[52px] w-[172px] rotate-[62deg] bg-gradient-to-r from-[#FFBF00] to-[#289590] h-[1px] z-20'></div>
              <Image
                src="/images/homepage/icon_point_of_sale.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
              />
              <span className='t-heading-6-sm text-[#181819]'>Point of Sale</span>    
            </div>
            <div className='block block-2 w-[33.33%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative'>
              <div className=' absolute top-[40px] right-[114px] w-[150px] rotate-[180deg] bg-gradient-to-r from-[#ED254E] to-[#FFBF00] h-[1px] z-20'></div>
              <div className=' absolute top-[132px] right-[55px] w-[166px] rotate-[118deg] bg-gradient-to-r from-[#ED254E] to-[#289590] h-[1px] z-20'></div>
              <div className=' absolute top-[131px] left-[54px] w-[166px] rotate-[63deg] bg-gradient-to-r from-[#ED254E] to-[#06AED5] h-[1px] z-20'></div>
              <div className=' absolute top-[130px] left-[80px] w-[310px] rotate-[31deg] bg-gradient-to-r from-[#ED254E] to-[#5BBA6F] h-[1px] z-20'></div>
              <div className=' absolute top-[132px] left-[90px] w-[470px] rotate-[22deg] bg-gradient-to-r from-[#ED254E] to-[#5076D8] h-[1px] z-20'></div>
              <Image
                src="/images/homepage/icon_marketing.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
              />
              <span className='t-heading-6-sm text-[#181819]'>Marketing<br/>& Loyalty</span>    
            </div>
            <div className='block block-3 w-[33.33%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative'>
              <div className=' absolute top-[40px] right-[117px] w-[335px] rotate-[180deg] bg-gradient-to-r from-[#0280AF] to-[#FFBF00] h-[1px] z-20'></div>
              <div className=' absolute top-[135px] left-[50px] w-[179px] rotate-[59deg] bg-gradient-to-r from-[#0280AF] to-[#5BBA6F] h-[1px] z-20'></div>
              <div className=' absolute top-[134px] left-[86px] w-[300px] rotate-[33deg] bg-gradient-to-r from-[#0280AF] to-[#5076D8] h-[1px] z-20'></div>
              <Image
                src="/images/homepage/icon_payments.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
              />
              <span className='t-heading-6-sm text-[#181819]'>Integrated<br/>Payments</span>    
            </div>
            <div className='block block-4 w-[33.33%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative'>
              <div className=' absolute top-[128px] right-[90px] w-[470px] rotate-[158deg] bg-gradient-to-r from-[#A682FF] to-[#289590] h-[1px] z-20'></div>
              <div className=' absolute top-[121px] right-[46px] w-[348px] rotate-[145deg] bg-gradient-to-r from-[#A682FF] to-[#06AED5] h-[1px] z-20'></div>
              <div className=' absolute top-[130px] right-[49px] w-[175px] rotate-[116deg] bg-gradient-to-r from-[#A682FF] to-[#5BBA6F] h-[1px] z-20'></div>
              <Image
                src="/images/homepage/icon_delivery.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
              />
              <span className='t-heading-6-sm text-[#181819]'>Delivery</span>    
            </div>
            <div className='block block-5 w-[33.33%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative'>
              <div className=' absolute top-[44px] right-[115px] w-[720px] rotate-[180deg] bg-gradient-to-r from-[#F67227] to-[#FFBF00] h-[1px] z-20'></div>
              <div className=' absolute top-[140px] right-[96px] w-[500px] rotate-[158deg] bg-gradient-to-r from-[#F67227] to-[#06AED5] h-[1px] z-20'></div>
              <div className=' absolute top-[130px] right-[85px] w-[285px] rotate-[147deg] bg-gradient-to-r from-[#F67227] to-[#5BBA6F] h-[1px] z-20'></div>
              <div className=' absolute top-[130px] right-[56px] w-[165px] rotate-[117deg] bg-gradient-to-r from-[#F67227] to-[#5076D8] h-[1px] z-20'></div>
              <div className=' absolute top-[44px] left-[109px] w-[150px] rotate-[0deg] bg-gradient-to-r from-[#F67227] to-[#816BC0] h-[1px] z-20'></div>
              <Image
                src="/images/homepage/icon_inventory.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
              />
              <span className='t-heading-6-sm text-[#181819]'>Inventory<br/>Management</span>    
            </div>
            <div className='block block-6 w-[33.33%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative'>
              <div className=' absolute top-[44px] right-[112px] w-[150px] rotate-[180deg] bg-gradient-to-r from-[#816BC0] to-[#F67227] h-[1px] z-20'></div>
              <div className=' absolute top-[135px] right-[58px] w-[160px] rotate-[117deg] bg-gradient-to-r from-[#816BC0] to-[#B84FD7] h-[1px] z-20'></div>
              <Image
                src="/images/homepage/icon_integrations.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
              />
              <span className='t-heading-6-sm text-[#181819]'>Integrations</span>    
            </div>
            <div className='block block-7 w-[33.33%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative'>
              <div className=' absolute bottom-[185px] right-[52px] w-[172px] rotate-[62deg] bg-gradient-to-r from-[#FFBF00] to-[#289590] h-[1px] z-20'></div>
              <div className=' absolute bottom-[184px] left-[55px] w-[166px] rotate-[116deg] bg-gradient-to-r from-[#ED254E] to-[#289590] h-[1px] z-20'></div>
              <div className=' absolute bottom-[187px] left-[95px] w-[475px] rotate-[158deg] bg-gradient-to-r from-[#A682FF] to-[#289590] h-[1px] z-20'></div>
              <div className=' absolute bottom-[88px] left-[112px] w-[530px] rotate-[180deg] bg-gradient-to-r from-[#5076D8] to-[#289590] h-[1px] z-20'></div>
              <Image
                src="/images/homepage/icon_customers.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
              />
              <span className='t-heading-6-sm text-[#181819]'>Customers</span>    
            </div>
            <div className='block block-8 w-[33.33%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative'>
              <div className=' absolute bottom-[88px] right-[114px] w-[145px] rotate-[0deg] bg-gradient-to-r from-[#289590] to-[#06AED5] h-[1px] z-20'></div>
              <div className=' absolute bottom-[182px] right-[85px] w-[300px] rotate-[33deg] bg-gradient-to-r from-[#FFBF00] to-[#06AED5] h-[1px] z-20'></div>
              <div className=' absolute bottom-[185px] right-[57px] w-[166px] rotate-[63deg] bg-gradient-to-r from-[#ED254E] to-[#06AED5] h-[1px] z-20'></div>
              <div className=' absolute bottom-[186px] left-[76px] w-[310px] rotate-[147deg] bg-gradient-to-r from-[#A682FF] to-[#06AED5] h-[1px] z-20'></div>
              <div className=' absolute bottom-[88px] left-[109px] w-[340px] rotate-[180deg] bg-gradient-to-r from-[#5076D8] to-[#06AED5] h-[1px] z-20'></div>
              <Image
                src="/images/homepage/icon_analytics.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
              />
              <span className='t-heading-6-sm text-[#181819]'>Analytics</span>    
            </div>
            <div className='block block-9 w-[33.33%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative'>
              <div className=' absolute bottom-[88px] right-[100px] w-[350px] rotate-[0deg] bg-gradient-to-r from-[#289590] to-[#5BBA6F] h-[1px] z-20'></div>
              <div className=' absolute bottom-[183px] right-[73px] w-[310px] rotate-[31deg] bg-gradient-to-r from-[#ED254E] to-[#5BBA6F] h-[1px] z-20'></div>
              <div className=' absolute bottom-[184px] left-[47px] w-[180px] rotate-[116deg] bg-gradient-to-r from-[#A682FF] to-[#5BBA6F] h-[1px] z-20'></div>
              <div className=' absolute bottom-[182px] left-[88px] w-[290px] rotate-[147deg] bg-gradient-to-r from-[#F67227] to-[#5BBA6F] h-[1px] z-20'></div>
              <Image
                src="/images/homepage/icon_ecommerce.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
              />
              <span className='t-heading-6-sm text-[#181819]'>Ecommerce</span>    
            </div>
            <div className='block block-10 w-[33.33%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative'>
              <div className=' absolute bottom-[88px] right-[100px] w-[540px] rotate-[0deg] bg-gradient-to-r from-[#289590] to-[#5076D8] h-[1px] z-20'></div>
              <div className=' absolute bottom-[180px] right-[86px] w-[290px] rotate-[32deg] bg-gradient-to-r from-[#0280AF] to-[#5076D8] h-[1px] z-20'></div>
              <div className=' absolute bottom-[190px] left-[56px] w-[165px] rotate-[116deg] bg-gradient-to-r from-[#F67227] to-[#5076D8] h-[1px] z-20'></div>
              <Image
                src="/images/homepage/icon_in_store.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
              />
              <span className='t-heading-6-sm text-[#181819]'>In-Store Screens</span>    
            </div>
            <div className='block block-11 w-[33.33%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative'>
              <div className=' absolute bottom-[176px] left-[50px] w-[170px] rotate-[116deg] bg-gradient-to-r from-[#816BC0] to-[#B84FD7] h-[1px] z-20'></div>
              <Image
                src="/images/homepage/icon_distribution.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
              />
              <span className='t-heading-6-sm text-[#181819]'>Distribution<br/>& Logistics</span>    
            </div>
          </div>
        </div>
      </div>
    )
  }