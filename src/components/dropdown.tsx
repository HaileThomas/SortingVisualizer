import { UploadOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown as ReactDropdown, Upload, message } from "antd";

const uploadProps: any = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info: { file: any; fileList: any }) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const childrenStyles: React.CSSProperties = {
  display: "inline-flex",
  margin: "20px 15px",
  width: "auto",
};

export const Dropdown = (props: { items: any }) => {
  let items = props.items;
  let sortingType = items?.map((x: any) => x["label"]);

  const onClick: MenuProps["onClick"] = ({ key }) => {
    let index = parseInt(key);
    if (items) message.info(`Click on item ${sortingType[index - 1]}`);
  };

  return (
    <ReactDropdown.Button
      menu={{ items, selectable: true, defaultSelectedKeys: ["1"], onClick }}
      style={{ ...childrenStyles, float: "right" }}
    >
      <Upload {...uploadProps}>
        <UploadOutlined /> Upload Data
      </Upload>
    </ReactDropdown.Button>
  );
};
