import { Modal, Button } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import React from "react";

export type DeleteProductModalProps = {
  title: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  onConfirm: () => void;
  productName?: string;
};

const CustomDeleteModal = ({
  open,
  setOpen,
  onConfirm,
  title,
  productName,
}: DeleteProductModalProps) => {
  const handleCancel = () => setOpen(false);

  return (
    <Modal
      open={open}
      onCancel={handleCancel}
      footer={null}
      centered
      width={460}
      closeIcon={false}
      className="rounded-xl"
    >
      <div className="text-center p-6">
        <ExclamationCircleOutlined className="text-red-500 text-4xl mb-3" />
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        {productName && (
          <p className="text-sm text-gray-600 mt-2">
            Are you sure you want to delete <span className="font-medium text-red-500">"{productName}"</span>? This action cannot be undone.
          </p>
        )}

        <div className="flex justify-end gap-4 mt-4">
          <Button
            onClick={handleCancel}
            className="rounded-md px-5"
          >
            Cancel
          </Button>
          <Button
            danger
            type="primary"
            onClick={() => {
              onConfirm();
              setOpen(false);
            }}
            className="rounded-md px-5"
          >
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CustomDeleteModal;
