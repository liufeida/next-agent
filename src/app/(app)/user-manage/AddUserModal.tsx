import { FileUpload } from "@/components/FileUpload";
import { api } from "@/services";
import type { UsersCreate } from "@/services/fastapi";
import { App, Col, Form, Input, Modal, Row, Switch } from "antd";
import { useEffect, useState } from "react";

interface AddUserModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

interface AddUserFormValues extends UsersCreate {
  avatarUrl?: string;
}

export const AddUserModal = ({ open, onClose, onSuccess }: AddUserModalProps) => {
  const { message } = App.useApp();
  const [form] = Form.useForm<AddUserFormValues>();
  const [loading, setLoading] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState<string | undefined>(undefined);
  const [avatarId, setAvatarId] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (open) {
      // 延迟设置确保 Form 已挂载
      setTimeout(() => {
        form.setFieldsValue({
          disabled: false,
        });
      }, 0);
      setAvatarUrl(undefined);
      setAvatarId(undefined);
    } else {
      form.resetFields();
      setAvatarUrl(undefined);
      setAvatarId(undefined);
    }
  }, [open]);

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      if (!avatarId) {
        message.warning("请上传图片");
        return;
      }

      const body: UsersCreate = {
        username: values.username,
        email: values.email,
        password: values.password,
        full_name: values.full_name || null,
        phone: values.phone || null,
        disabled: values.disabled ?? false,
        avatar_id: avatarId,
      };

      setLoading(true);
      await api.postCreateUser({ body });
      message.success("创建成功");
      onSuccess();
      onClose();
    } catch {
      // 验证失败或请求失败
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Modal
      title='新增用户'
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
      confirmLoading={loading}
      width={680}
      destroyOnHidden
      forceRender
    >
      <Form form={form} layout='vertical'>
        {/* 图片上传 */}
        <Form.Item name='avatarUrl' label='图片上传' rules={[{ required: true, message: "请上传图片" }]}>
          <FileUpload
            single
            maxCount={1}
            accept='image/*'
            maxSizeMB={2}
            value={avatarUrl}
            onUploadSuccess={(fileInfo) => {
              if (!Array.isArray(fileInfo)) {
                setAvatarUrl(fileInfo.url);
                setAvatarId(fileInfo.id);
              }
            }}
            listType='picture-card'
          />
        </Form.Item>

        <Row gutter={24} style={{ marginTop: 12 }}>
          <Col span={12}>
            <Form.Item name='username' label='账号' rules={[{ required: true, message: "请输入账号" }]}>
              <Input placeholder='请输入账号' />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name='full_name' label='用户姓名'>
              <Input placeholder='请输入用户姓名' />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={24} style={{ marginTop: 12 }}>
          <Col span={12}>
            <Form.Item
              name='email'
              label='邮箱'
              rules={[
                { required: true, message: "请输入邮箱" },
                { type: "email", message: "请输入有效的邮箱" },
              ]}
            >
              <Input placeholder='请输入邮箱' />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name='phone' label='手机号'>
              <Input placeholder='请输入手机号' />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item name='disabled' label='状态' valuePropName='checked' style={{ marginTop: 12 }}>
          <Switch checkedChildren='禁用' unCheckedChildren='启用' />
        </Form.Item>

        <Form.Item name='password' label='账号密码' rules={[{ required: true, message: "请输入账号密码" }]}>
          <Input.Password placeholder='请输入账号密码' autoComplete='new-password' />
        </Form.Item>
      </Form>
    </Modal>
  );
};
