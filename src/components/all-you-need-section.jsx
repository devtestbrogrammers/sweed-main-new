import Image from 'next/image'

export default function AllYouNeed() {
    return (
      <div className="all-you-need-section lg:py-20 bg-white">
        <div className="container py-20">
          <div className="pb-[30px] md:pb-[60px]">
            <h2 className="t-heading-1-md text-[#181819]">All You Need <br/>In One Place</h2>
          </div>
          <div className="hidden xl:flex blocks-row text-center justify-center max-w-[1140px] m-auto xl:gap-[10px] flex-wrap">
            <div className='block block-1 w-[33.33%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative' data-connect='block-3, block-7, block-8'>
              <div className='block-inner'>  
                <div className='absolute top-[40px] left-[105px] w-[340px] rotate-[0deg] bg-gradient-to-r from-[#5BBA6F] to-[#289590] h-[1px] z-20'></div>
                <div className='absolute top-[135px] left-[82px] w-[294px] rotate-[33deg] bg-gradient-to-r from-[#5BBA6F] to-[#FFBF00] h-[1px] z-20'></div>
                <div className='absolute top-[132px] left-[50px] w-[169px] rotate-[62deg] bg-gradient-to-r from-[#5BBA6F] to-[#06AED5] h-[1px] z-20'></div>
                <Image
                  src="/images/homepage/icon_point_of_sale.svg"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
                />
                <span className='t-heading-6-sm text-[#181819]'>Point of Sale</span>  
              </div>  
            </div>
            <div className='block block-2 w-[33.33%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative' data-connect='block-1, block-7, block-8, block-9, block-10'>
              <div className='block-inner'>    
                <div className='absolute top-[40px] right-[113px] w-[151px] rotate-[180deg] bg-gradient-to-r from-[#ED254E] to-[#5BBA6F] h-[1px] z-20'></div>
                <div className='absolute top-[130px] right-[55px] w-[170px] rotate-[118deg] bg-gradient-to-r from-[#ED254E] to-[#06AED5] h-[1px] z-20'></div>
                <div className='absolute top-[130px] left-[54px] w-[168px] rotate-[63deg] bg-gradient-to-r from-[#ED254E] to-[#FFBF00] h-[1px] z-20'></div>
                <div className='absolute top-[130px] left-[84px] w-[310px] rotate-[31deg] bg-gradient-to-r from-[#ED254E] to-[#43C798] h-[1px] z-20'></div>
                <div className='absolute top-[132px] left-[90px] w-[467px] rotate-[22deg] bg-gradient-to-r from-[#ED254E] to-[#5076D8] h-[1px] z-20'></div>
                <Image
                  src="/images/homepage/icon_marketing.svg"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
                />
                <span className='t-heading-6-sm text-[#181819]'>Marketing<br/>& Loyalty</span>    
              </div>
            </div>
            <div className='block block-3 w-[33.33%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative' data-connect='block-1, block-9, block-10'>
              <div className='block-inner'>    
                <div className='absolute top-[40px] right-[116px] w-[338px] rotate-[180deg] bg-gradient-to-r from-[#289590] to-[#5BBA6F] h-[1px] z-20'></div>
                <div className='absolute top-[134px] left-[55px] w-[176px] rotate-[59deg] bg-gradient-to-r from-[#289590] to-[#43C798] h-[1px] z-20'></div>
                <div className='absolute top-[134px] left-[91px] w-[286px] rotate-[33deg] bg-gradient-to-r from-[#289590] to-[#5076D8] h-[1px] z-20'></div>
                <Image
                  src="/images/homepage/icon_payments.svg"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
                />
                <span className='t-heading-6-sm text-[#181819]'>Integrated<br/>Payments</span> 
              </div>   
            </div>
            <div className='block block-4 w-[33.33%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative' data-connect='block-7, block-8, block-9'>
              <div className='block-inner'>     
                <div className='absolute top-[128px] right-[90px] w-[470px] rotate-[158deg] bg-gradient-to-r from-[#A682FF] to-[#06AED5] h-[1px] z-20'></div>
                <div className='absolute top-[127px] right-[80px] w-[300px] rotate-[145deg] bg-gradient-to-r from-[#A682FF] to-[#FFBF00] h-[1px] z-20'></div>
                <div className='absolute top-[131px] right-[49px] w-[175px] rotate-[116deg] bg-gradient-to-r from-[#A682FF] to-[#43C798] h-[1px] z-20'></div>
                <Image
                  src="/images/homepage/icon_delivery.svg"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
                />
                <span className='t-heading-6-sm text-[#181819]'>Delivery</span>    
              </div>
            </div>
            <div className='block block-5 w-[33.33%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative' data-connect='block-1, block-6, block-8, block-9, block-10, block-11'>
              <div className='block-inner'>      
                <div className='absolute top-[44px] right-[112px] w-[722px] rotate-[180deg] bg-gradient-to-r from-[#F67227] to-[#5BBA6F] h-[1px] z-20'></div>
                <div className='absolute top-[135px] right-[96px] w-[466px] rotate-[158deg] bg-gradient-to-r from-[#F67227] to-[#FFBF00] h-[1px] z-20'></div>
                <div className='absolute top-[130px] right-[88px] w-[285px] rotate-[147deg] bg-gradient-to-r from-[#F67227] to-[#43C798] h-[1px] z-20'></div>
                <div className='absolute top-[134px] right-[56px] w-[165px] rotate-[117deg] bg-gradient-to-r from-[#F67227] to-[#5076D8] h-[1px] z-20'></div>
                <div className='absolute top-[135px] left-[50px] w-[160px] rotate-[70deg] bg-gradient-to-r from-[#F67227] to-[#D74FA9] h-[1px] z-20'></div>
                <div className='absolute top-[44px] left-[110px] w-[149px] rotate-[0deg] bg-gradient-to-r from-[#F67227] to-[#B84FD7] h-[1px] z-20'></div>
                <Image
                  src="/images/homepage/icon_inventory.svg"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
                />
                <span className='t-heading-6-sm text-[#181819]'>Inventory<br/>Management</span>  
              </div>  
            </div>
            <div className='block block-6 w-[33.33%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative' data-connect='block-5, block-11'>
              <div className='block-inner'>        
                <div className='absolute top-[44px] right-[112px] w-[150px] rotate-[180deg] bg-gradient-to-r from-[#B84FD7] to-[#F67227] h-[1px] z-20'></div>
                <div className='absolute top-[132px] right-[52px] w-[170px] rotate-[117deg] bg-gradient-to-r from-[#B84FD7] to-[#D74FA9] h-[1px] z-20'></div>
                <Image
                  src="/images/homepage/icon_integrations.svg"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
                />
                <span className='t-heading-6-sm text-[#181819]'>Integrations</span>   
              </div> 
            </div>
            <div className='block block-7 w-[33.33%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative' data-connect='block-1, block-2, block-4, block-10'>
              <div className='block-inner'>         
                <div className='absolute bottom-[182px] right-[56px] w-[168px] rotate-[62deg] bg-gradient-to-r from-[#5BBA6F] to-[#06AED5] h-[1px] z-20'></div>
                <div className='absolute bottom-[184px] left-[55px] w-[168px] rotate-[116deg] bg-gradient-to-r from-[#ED254E] to-[#06AED5] h-[1px] z-20'></div>
                <div className='absolute bottom-[187px] left-[95px] w-[471px] rotate-[158deg] bg-gradient-to-r from-[#A682FF] to-[#06AED5] h-[1px] z-20'></div>
                <div className='absolute bottom-[88px] left-[112px] w-[525px] rotate-[180deg] bg-gradient-to-r from-[#5076D8] to-[#06AED5] h-[1px] z-20'></div>
                <Image
                  src="/images/homepage/icon_customers.svg"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
                />
                <span className='t-heading-6-sm text-[#181819]'>Customers</span>  
              </div>  
            </div>
            <div className='block block-8 w-[33.33%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative' data-connect='block-1, block-2, block-4, block-7, block-10'>
              <div className='block-inner'>  
                <div className='absolute bottom-[88px] right-[112px] w-[147px] rotate-[0deg] bg-gradient-to-r from-[#06AED5] to-[#FFBF00] h-[1px] z-20'></div>
                <div className='absolute bottom-[182px] right-[88px] w-[295px] rotate-[33deg] bg-gradient-to-r from-[#5BBA6F] to-[#FFBF00] h-[1px] z-20'></div>
                <div className='absolute bottom-[185px] right-[57px] w-[168px] rotate-[63deg] bg-gradient-to-r from-[#ED254E] to-[#FFBF00] h-[1px] z-20'></div>
                <div className='absolute bottom-[186px] left-[76px] w-[310px] rotate-[147deg] bg-gradient-to-r from-[#A682FF] to-[#FFBF00] h-[1px] z-20'></div>
                <div className='absolute bottom-[88px] left-[109px] w-[340px] rotate-[180deg] bg-gradient-to-r from-[#5076D8] to-[#FFBF00] h-[1px] z-20'></div>
                <Image
                  src="/images/homepage/icon_analytics.svg"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
                />
                <span className='t-heading-6-sm text-[#181819]'>Analytics</span>
              </div>      
            </div>
            <div className='block block-9 w-[33.33%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative' data-connect='block-2, block-4, block-5, block-7, block-10'>
              <div className='block-inner'>   
                <div className='absolute bottom-[88px] right-[103px] w-[345px] rotate-[0deg] bg-gradient-to-r from-[#06AED5] to-[#43C798] h-[1px] z-20'></div>
                <div className='absolute bottom-[183px] right-[78px] w-[305px] rotate-[31deg] bg-gradient-to-r from-[#ED254E] to-[#43C798] h-[1px] z-20'></div>
                <div className='absolute bottom-[184px] left-[48px] w-[178px] rotate-[116deg] bg-gradient-to-r from-[#A682FF] to-[#43C798] h-[1px] z-20'></div>
                <div className='absolute bottom-[182px] left-[88px] w-[290px] rotate-[147deg] bg-gradient-to-r from-[#F67227] to-[#43C798] h-[1px] z-20'></div>
                <div className='absolute bottom-[100px] left-[110px] w-[147px] rotate-[180deg] bg-gradient-to-r from-[#5076D8] to-[#43C798] h-[1px] z-20'></div>
                <Image
                  src="/images/homepage/icon_ecommerce.svg"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
                />
                <span className='t-heading-6-sm text-[#181819]'>Ecommerce</span>   
              </div>  
            </div>
            <div className='block block-10 w-[33.33%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative' data-connect='block-3, block-5, block-7, block-9'>
              <div className='block-inner'>     
                <div className='absolute bottom-[88px] right-[113px] w-[525px] rotate-[0deg] bg-gradient-to-r from-[#06AED5] to-[#5076D8] h-[1px] z-20'></div>
                <div className='absolute bottom-[100px] right-[115px] w-[147px] rotate-[0deg] bg-gradient-to-r from-[#43C798] to-[#5076D8] h-[1px] z-20'></div>
                <div className='absolute bottom-[181px] right-[89px] w-[290px] rotate-[32deg] bg-gradient-to-r from-[#289590] to-[#5076D8] h-[1px] z-20'></div>
                <div className='absolute bottom-[186px] left-[60px] w-[155px] rotate-[116deg] bg-gradient-to-r from-[#F67227] to-[#5076D8] h-[1px] z-20'></div>
                <Image
                  src="/images/homepage/icon_in_store.svg"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
                />
                <span className='t-heading-6-sm text-[#181819]'>In-Store Screens</span>   
              </div> 
            </div>
            <div className='block block-11 w-[33.33%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative' data-connect='block-5, block-6'>
              <div className='block-inner'>       
                <div className='absolute bottom-[181px] left-[-45px] w-[160px] rotate-[70deg] bg-gradient-to-r from-[#F67227] to-[#D74FA9] h-[1px] z-20'></div>
                <div className='absolute bottom-[179px] left-[45px] w-[175px] rotate-[116deg] bg-gradient-to-r from-[#B84FD7] to-[#D74FA9] h-[1px] z-20'></div>
                <Image
                  src="/images/homepage/icon_distribution.svg"
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
          <div className="flex xl:hidden blocks-row text-center justify-center max-w-[1140px] m-auto xl:gap-[10px] flex-wrap">
            <div className='block block-1 w-[33.33%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative' data-connect='block-3, block-7, block-8'>
              <div className='block-inner'>  
                <Image
                  src="/images/homepage/icon_point_of_sale.svg"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
                />
                <span className='t-heading-6-sm text-[#181819]'>Point of Sale</span>  
              </div>  
            </div>
            <div className='block block-4 w-[33.33%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative' data-connect='block-7, block-8, block-9'>
              <div className='block-inner'>     
                <Image
                  src="/images/homepage/icon_delivery.svg"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
                />
                <span className='t-heading-6-sm text-[#181819]'>Delivery</span>    
              </div>
            </div>
            <div className='block block-6 w-[33.33%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative' data-connect='block-5, block-11'>
              <div className='block-inner'>        
                <Image
                  src="/images/homepage/icon_integrations.svg"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
                />
                <span className='t-heading-6-sm text-[#181819]'>Integrations</span>   
              </div> 
            </div>
            <div className='block block-2 w-[33.33%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative' data-connect='block-1, block-7, block-8, block-9, block-10'>
              <div className='block-inner'>    
                <Image
                  src="/images/homepage/icon_marketing.svg"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
                />
                <span className='t-heading-6-sm text-[#181819]'>Marketing<br/>& Loyalty</span>    
              </div>
            </div>
            <div className='block block-3 w-[33.33%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative' data-connect='block-1, block-9, block-10'>
              <div className='block-inner'>    
                <Image
                  src="/images/homepage/icon_payments.svg"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
                />
                <span className='t-heading-6-sm text-[#181819]'>Integrated<br/>Payments</span> 
              </div>   
            </div>
            <div className='block block-5 w-[33.33%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative' data-connect='block-1, block-6, block-8, block-9, block-10'>
              <div className='block-inner'>      
                <Image
                  src="/images/homepage/icon_inventory.svg"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
                />
                <span className='t-heading-6-sm text-[#181819]'>Inventory<br/>Management</span>  
              </div>  
            </div>
            <div className='block block-7 w-[33.33%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative' data-connect='block-1, block-2, block-4, block-10'>
              <div className='block-inner'>         
                <Image
                  src="/images/homepage/icon_customers.svg"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
                />
                <span className='t-heading-6-sm text-[#181819]'>Customers</span>  
              </div>  
            </div>
            <div className='block block-9 w-[33.33%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative' data-connect='block-2, block-4, block-5, block-7'>
              <div className='block-inner'>   
                <Image
                  src="/images/homepage/icon_ecommerce.svg"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
                />
                <span className='t-heading-6-sm text-[#181819]'>Ecommerce</span>   
              </div>  
            </div>
            <div className='block block-8 w-[33.33%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative' data-connect='block-1, block-2, block-4, block-7, block-10'>
              <div className='block-inner'>  
                <Image
                  src="/images/homepage/icon_analytics.svg"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
                />
                <span className='t-heading-6-sm text-[#181819]'>Analytics</span>
              </div>      
            </div>
            <div className='block block-10 w-[33.33%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative' data-connect='block-3, block-5, block-7'>
              <div className='block-inner'>     
                <Image
                  src="/images/homepage/icon_in_store.svg"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[60px] md:w-[74px] h-[60px] md:h-[74px] m-auto relative z-30"
                />
                <span className='t-heading-6-sm text-[#181819]'>In-Store Screens</span>   
              </div> 
            </div>
            <div className='block block-11 w-[33.33%] xl:w-[180px] mb-[30px] xl:mb-[50px] relative' data-connect='block-6'>
              <div className='block-inner'>       
                <Image
                  src="/images/homepage/icon_distribution.svg"
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
      </div>
    )
  }