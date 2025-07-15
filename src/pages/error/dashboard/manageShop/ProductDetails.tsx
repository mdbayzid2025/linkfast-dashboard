import { Modal } from 'antd';



export type CustomModalProps = {
  title?: string;
  open: boolean;
  product: any;
  setOpen: (open: boolean) => void;
};

const ProductDetails = ({ open, setOpen, product, title }: CustomModalProps) => {
  const handleClose = () => {
    setOpen(false);
  };

  if (!product) return null;
  
  return (
    <Modal
      open={open}
      onCancel={handleClose}
      title={<p className="font-medium text-xl">{title || "Product Details"}</p>}
      width={1000}
      footer={false}
      centered
      styles={{
        content: {
          background: "#F4F4F4"
        },
        header: {
          background: "#F4F4F4"
        },


      }}
    >
      <div className="flex flex-col md:flex-row gap-10 mt-5">
        <div className="w-full md:w-1/2 h-[250px] mb-12 bg-transparent">
          <img
            src={product.image || "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg"}
            alt={product.name}
            className="w-full h-full object-contant rounded-sm"
          />
        </div>
        <div className="flex-1 space-y-2">
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className='text-[#009A54] text-lg'> {product.country}</p>
          <div className="flex items-center justify-between text-[#353131] text-lg border-[#d8d6d6]  border-b-1 pb-1.5 ">
            <p>Data</p>
            <p>{product?.data}</p>
          </div>
          <div className="flex items-center justify-between text-[#5C5C5C] text-lg border-[#d8d6d6]  border-b-1 pb-1.5 ">
            <p>Validity</p>
            <p>{product?.validity}</p>
          </div>
          <div className="flex items-center justify-between text-[#5C5C5C] text-lg border-[#d8d6d6]  border-b-1 pb-1.5 ">
            <p>Price</p>
            <p className='text-[#333333] font-medium'>${Number(product?.price).toFixed(2)} USD</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-5">
        <div className="w-full bg-white p-4 overflow-y-scroll max-h-[300px]">
          <h4 className='text-xl mb-5 font-medium'>Additional Information</h4>
          <div className=" mb-3">
            <p className='text-[#C0C0C0]'>Plan Type</p>
            <p className='text-[#767676]'>{product?.planType}</p>
          </div>
          <div className=" mb-3">
            <p className='text-[#C0C0C0]'>IP Routine</p>
            <p className='text-[#767676]'>{product?.ipRoutine}</p>
          </div>
          <div className=" mb-3">
            <p className='text-[#C0C0C0]'>TOP-UP-OPTION</p>
            <p className='text-[#767676]'>{product?.topUpOption}</p>
          </div>
          <div className=" mb-3">
            <p className='text-[#C0C0C0]'>VALIDITY POLICY</p>
            <p className='text-[#767676]'>{product?.validityPolicy}</p>
          </div>
          <div className=" mb-3">
            <p className='text-[#C0C0C0]'>OTHER INFO</p>
            <p className='text-[#767676]'>{product?.otherInfo}</p>
          </div>

        </div>
        <div className="w-full bg-white p-4 max-h-[300px] overflow-y-scroll">
          <h4 className='text-xl mb-5 font-medium'>Suppored Country</h4>
          {
            countries && countries.map(country =>
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={country.flag}
                  alt={country.value}
                  className="w-8 h-5 object-cover"
                />
                <span className='text-md'>{country.value}</span>
              </div>
            )
          }
        </div>
      </div>
    </Modal>
  );
};

export default ProductDetails;



const countries = [
  {
    "value": "Guyana",
    "flag": "https://flagcdn.com/w320/gy.png"
  },
  {
    "value": "Norway",
    "flag": "https://flagcdn.com/w320/no.png"
  },
  {
    "value": "United Arab Emirates",
    "flag": "https://flagcdn.com/w320/ae.png"
  },
  {
    "value": "Azerbaijan",
    "flag": "https://flagcdn.com/w320/az.png"
  },
  {
    "value": "Estonia",
    "flag": "https://flagcdn.com/w320/ee.png"
  },
  {
    "value": "Guinea-Bissau",
    "flag": "https://flagcdn.com/w320/gw.png"
  },
  {
    "value": "Angola",
    "flag": "https://flagcdn.com/w320/ao.png"
  },
  {
    "value": "Brunei",
    "flag": "https://flagcdn.com/w320/bn.png"
  },
  {
    "value": "Italy",
    "flag": "https://flagcdn.com/w320/it.png"
  },
  {
    "value": "British Virgin Islands",
    "flag": "https://flagcdn.com/w320/vg.png"
  },
  {
    "value": "Czechia",
    "flag": "https://flagcdn.com/w320/cz.png"
  },
  {
    "value": "Mayotte",
    "flag": "https://flagcdn.com/w320/yt.png"
  },
  {

    "value": "Nicaragua",
    "flag": "https://flagcdn.com/w320/ni.png"
  },
  {

    "value": "North Korea",
    "flag": "https://flagcdn.com/w320/kp.png"
  },
  {

    "value": "Syria",
    "flag": "https://flagcdn.com/w320/sy.png"
  },
  {

    "value": "Bahrain",
    "flag": "https://flagcdn.com/w320/bh.png"
  },
  {

    "value": "Martinique",
    "flag": "https://flagcdn.com/w320/mq.png"
  },
  {

    "value": "Albania",
    "flag": "https://flagcdn.com/w320/al.png"
  },
  {

    "value": "Kiribati",
    "flag": "https://flagcdn.com/w320/ki.png"
  }
]