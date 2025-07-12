import { Modal } from 'antd';

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  data: any;
};

const DetailsBlogs = ({ open, setOpen, data }: Props) => {
  return (
    <Modal
      title={<p className="text-xl font-semibold text-[#009A54]">Interface Details</p>}
      open={open}
      onCancel={() => setOpen(false)}
      footer={false}
      centered
    >
      {data && (
        <div className="space-y-4">
          <div className="w-full flex justify-center">
            <img
              src={data.image}
              alt="Interface"
              className="rounded-lg"
              style={{ width: "100%", height: 200, objectFit: "cover" }}
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#009A54]">Title</h3>
            <p>{data.title}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#009A54]">Description</h3>
            <div
              className="text-gray-700"
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
          </div>
        </div>
      )}
    </Modal>
  );
};

export default DetailsBlogs;
