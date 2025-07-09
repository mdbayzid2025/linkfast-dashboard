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
      width={800}
      footer={false}
      centered
    >
      <div className="flex flex-col md:flex-row gap-6 p-4">
        <div className="w-full md:w-[300px] h-[200px]">
          <img
            src={product.image || "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg"}
            alt={product.name}
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="flex-1 space-y-2">
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p><strong>Country:</strong> {product.country}</p>
          <p><strong>Data:</strong> {product.data}</p>
          <p><strong>Validity:</strong> {product.validity}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Network:</strong> {product.network}</p>
          <p><strong>Activation Type:</strong> {product.activationType}</p>
          <p><strong>Delivery:</strong> {product.delivery}</p>
        </div>
      </div>
    </Modal>
  );
};

export default ProductDetails;