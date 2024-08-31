'use client'
import WebIcon from '@mui/icons-material/Web';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SolutionLayout from './SolutionLayout';
const cardData = [
    {
      title: "Server and Storage Systems",
      text: "To provide great advantage by adding efficiency to business processes by solving problems with our Technology Services.",
      icon: <WebIcon style={{ fontSize: 48, color: '#f1f5f9' }} />
    },
    {
      title: "IT Support Services",
      text: "Our customers have the right to unlimited calls and on-site support within the scope of the agreement.",
      icon: <AdsClickIcon style={{ fontSize: 48, color: '#f1f5f9' }} />
    },
    {
      title: "Desktop and Server Virtualization",
      text: "Our server virtualization, workforce mobility platform enables end users to access their data and applications from any device.",
      icon: <ScreenSearchDesktopIcon style={{ fontSize: 48, color: '#f1f5f9' }} />
    },
    {
      title: "Network and Security Solutions",
      text: "The security of IT infrastructures of institutions is an important subject of expertise and professional protection of data security.",
      icon: <LocalGroceryStoreIcon style={{ fontSize: 48, color: '#f1f5f9' }} />
    },
    {
      title: "Cloud Services",
      text: "A copy of our customers' Business Critical Systems is the provision of service in IT Cloud Cloud technologies.",
      icon: <LocalGroceryStoreIcon style={{ fontSize: 48, color: '#f1f5f9' }} />
    },
    {
      title: "Tracing Solutions",
      text: "With our IT Cloud Monitoring service, we monitor the entire infrastructure of our customers by setting alarms.",
      icon: <LocalGroceryStoreIcon style={{ fontSize: 48, color: '#f1f5f9' }} />
    }
  ];
export default function Solutions_SM() {
  const urlPath = window.location.pathname;
    return(
        <SolutionLayout>
        <div className="grid grid-cols-1 place-items-center place-content-center gap-4 p-6 mb-5">
        {cardData.map((card, idx) => (
        <div key={idx} className="d-flex align-items-stretch " data-aos="fade-up">
<table className='table-auto hvr-rotate '>
    <tbody>
        <tr className='border-2 border-white '>
            <td>
            <div className='p-2 shadow-md text-white bg-transparent flex flex-col align-middle justify-center text-center  w-80 h-64 shadow-slate-500/40'>
        <div className='mb-3'>{card.icon}</div>
        <h1 className='font-bold mb-3'>{card.title}</h1>
        <p>{card.text}</p>
         </div>
            </td>
        </tr>
        <tr className='border-2 border-white'>
            <td>
         
            {urlPath === '/services' ? (
                                <div className="bg-slate-900 flex items-center text-center justify-center w-80 h-64 p-10">
                                <h1>{card.text}</h1>
                              </div>

              ) : (
            <div className="relative p-2 shadow-md text-white bg-cover flex flex-col w-80 h-64 shadow-slate-500/40 align-middle justify-center text-center">
  <div className="absolute inset-0 bg-[url('/images/customer_service.jpg')] bg-cover opacity-50 z-0"></div>
  <div className="relative z-10">
    <h1>{card.text}</h1>
  </div>
</div>
              )}
            </td>
        </tr>
    </tbody>
</table>
        </div>
        ))}
        </div>
        </SolutionLayout>
    )
}