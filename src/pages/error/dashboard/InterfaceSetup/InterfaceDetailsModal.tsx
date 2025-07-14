import { Modal } from 'antd';
import { GoArrowRight } from 'react-icons/go';

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  data: any;
};

const InterfaceDetailsModal = ({ open, setOpen, data }: Props) => {

  return (
    <Modal
      title={<p className="text-xl font-semibold text-[#009A54]">Interface Details</p>}
      open={open}
      onCancel={() => setOpen(false)}
      footer={false}
      centered
      width={1000}
    >
      {data && (
        <div
          style={{
            backgroundImage: `url(${data?.image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
          }}
          className="space-y-4 px-12 py-10">
          {/* <div className="w-full flex justify-center">
            <img
              src={data.image1 ?? "/interfaceBg.png"}
              alt="Interface"
              className="rounded-lg"
              style={{ width: "100%", height: 200, objectFit: "cover" }}
            />
          </div> */}
          <h1 className="text-3xl font-semibold text-[#FDFDFD]">
            {data?.title}
          </h1>
          <p className="text-[#EEEEEE] max-w-[472px] leading-[200%]">
           {data?.description}
          </p>
          <button className="flex justify-center items-center gap-1.5 bg-[#FBC02D] mt-2 py-[14px] px-5 text-[#414141] rounded-lg cursor-pointer">
            <span className="leading-[20px]">Share now</span>{" "}
            <GoArrowRight className="text-2xl" />
          </button>
        </div>
      )}
    </Modal>
  );
};

export default InterfaceDetailsModal;
