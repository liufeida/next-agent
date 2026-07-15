import { api } from "@/services";
import type { FileOut } from "@/services/fastapi";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { App, Button, Upload, UploadProps } from "antd";
import { FC, ReactNode, useEffect, useState } from "react";
import "./index.css";

type FileInfo = { id: string; url: string; filename: string };

type Props = {
  value?: string | string[];
  onChange?: (url: string | string[]) => void;
  onUploadSuccess?: (fileInfo: FileInfo | FileInfo[]) => void;
  multiple?: boolean;
  maxCount?: number;
  disabled?: boolean;
  accept?: string;
  beforeUpload?: (file: File) => boolean | Promise<boolean>;
  children?: ReactNode;
  listType?: UploadProps["listType"];
  maxSizeMB?: number;
  single?: boolean;
};

export const FileUpload: FC<Props> = ({
  value,
  onChange,
  onUploadSuccess,
  multiple = true,
  maxCount,
  disabled = false,
  accept,
  beforeUpload,
  children,
  listType = "text",
  maxSizeMB = 2,
  single = false,
}) => {
  const initFileList = (): UploadProps["fileList"] => {
    if (!value) return [];
    const values = Array.isArray(value) ? value : [value];
    return values.map((v, index) => ({
      uid: `file-${index}`,
      name: v.split("/").pop() || v,
      status: "done",
      url: v,
      thumbUrl: v,
    }));
  };

  const { message } = App.useApp();
  const [fileList, setFileList] = useState<UploadProps["fileList"]>([]);
  const [uploading, setUploading] = useState(false);

  // 同步 value 变化 - 只在 value 变化时重新初始化（非上传中）
  useEffect(() => {
    if (!uploading) {
      setFileList(initFileList());
    }
  }, [value]);

  const handleBeforeUpload: UploadProps["beforeUpload"] = async (file) => {
    if (file.size === 0) {
      message.error("不能上传空文件");
      return Upload.LIST_IGNORE;
    }
    if (file.size > maxSizeMB * 1024 * 1024) {
      message.error(`文件大小不能超过 ${maxSizeMB}MB`);
      return Upload.LIST_IGNORE;
    }
    return beforeUpload?.(file) ?? true;
  };

  const handleUpload = async (file: File): Promise<FileOut> => {
    try {
      const res = await api.uploadFile({
        body: { file },
      });

      if (res?.success && res.data) {
        return res.data;
      }
      throw new Error(res?.message || "上传失败");
    } catch (error: any) {
      message.error(error.message || "上传失败");
      throw error;
    }
  };

  const handleChange: UploadProps["onChange"] = async ({ file, fileList: newFileList }) => {
    setFileList(newFileList);

    if (file.status === "uploading") {
      setUploading(true);
    }

    if (file.status === "done") {
      setUploading(false);
      // 上传成功，response 是 FileOut 对象
      const updatedFileList = newFileList.map((f) => {
        if (f.status === "done" && f.response && typeof f.response === "object" && "url" in f.response) {
          const fileOut = f.response as FileOut;
          return {
            ...f,
            url: fileOut.url,
            thumbUrl: fileOut.url,
          };
        }
        return f;
      });
      setFileList(updatedFileList);

      // 提取所有上传成功的文件信息
      const uploadedFiles = updatedFileList
        .filter((f) => f.status === "done" && f.response && typeof f.response === "object" && "url" in f.response)
        .map((f) => ({
          url: (f.response as FileOut).url,
          id: (f.response as FileOut).id,
          filename: (f.response as FileOut).filename,
        }));

      // 通知父组件
      if (onUploadSuccess) {
        onUploadSuccess(single ? uploadedFiles[0] : uploadedFiles);
      }
      // 兼容旧版 onChange，传递 URL
      onChange?.(single ? uploadedFiles[0]?.url : uploadedFiles.map((f) => f.url));
      message.success(`${file.name} 上传成功`);
    }

    if (file.status === "error") {
      setUploading(false);
      setFileList(newFileList.filter((f) => f.uid !== file.uid));
      message.error(`${file.name} 上传失败`);
    }

    if (file.status === "removed") {
      const remainingFiles = newFileList
        .filter((f) => f.status === "done" && f.response && typeof f.response === "object" && "url" in f.response)
        .map((f) => ({
          url: (f.response as FileOut).url,
          id: (f.response as FileOut).id,
        }));
      onChange?.(single ? remainingFiles[0]?.url : remainingFiles.map((f) => f.url));
    }
  };

  const renderUploadButton = () => {
    if (children) return children;
    if (listType === "picture-card") {
      return <PlusOutlined />;
    }
    return (
      <Button icon={<UploadOutlined />} loading={uploading} disabled={disabled}>
        上传文件
      </Button>
    );
  };

  return (
    <Upload
      listType={listType}
      fileList={fileList}
      beforeUpload={handleBeforeUpload}
      customRequest={({ file, onSuccess, onError }) => {
        handleUpload(file as File)
          .then((id) => onSuccess?.(id))
          .catch(onError);
      }}
      onChange={handleChange}
      multiple={multiple}
      maxCount={maxCount}
      disabled={disabled}
      accept={accept}
    >
      {!disabled && renderUploadButton()}
    </Upload>
  );
};
