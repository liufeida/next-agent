import { FileUpload } from "@/components/FileUpload";
import { api } from "@/services";
import type { UsersUpdate } from "@/services/fastapi";
import { App, Col, Form, Input, Modal, Row, Spin, Switch } from "antd";
import { useEffect, useState } from "react";

interface EditUserModalProps {
  open: boolean;
  userId: string | null;
  onClose: () => void;
  onSuccess: () => void;
}

interface EditUserFormValues extends UsersUpdate {
  avatarUrl?: string;
}

export const EditUserModal = ({ open, userId, onClose, onSuccess }: EditUserModalProps) => {
  const { message } = App.useApp();
  const [form] = Form.useForm<EditUserFormValues>();
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState<string | undefined>(undefined);
  const [avatarId, setAvatarId] = useState<string | undefined>(undefined);

  // 打开时通过 API 获取用户数据
  useEffect(() => {
    if (open && userId) {
      setFetching(true);
      api
        .getUserById({ query: { user_id: userId } })
        .then((res) => {
          const userData = res?.data;
          if (userData) {
            setAvatarUrl(userData.avatar_url || undefined);
            setAvatarId(userData.avatar_id || undefined);
            form.setFieldsValue({
              avatarUrl: userData.avatar_url || undefined,
              username: userData.username,
              full_name: userData.full_name,
              email: userData.email,
              phone: userData.phone,
              disabled: userData.disabled,
            });
          }
        })
        .catch(() => {
          message.error("获取用户信息失败");
        })
        .finally(() => {
          setFetching(false);
        });
    } else if (!open) {
      form.resetFields();
      setAvatarUrl(undefined);
      setAvatarId(undefined);
    }
  }, [open, userId]);

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      if (!userId) return;

      const filteredValues: UsersUpdate = {
        ...Object.fromEntries(
          Object.entries(values).filter(([key, v]) => v !== undefined && v !== "" && key !== "avatarUrl"),
        ),
      };

      if (avatarId) {
        filteredValues.avatar_id = avatarId;
      }

      setLoading(true);
      await api.updateUserInfos({
        query: { user_id: userId },
        body: filteredValues,
      });
      message.success("更新成功");
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
      title='编辑用户'
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
      confirmLoading={loading}
      width={680}
      destroyOnHidden
    >
      <Spin spinning={fetching}>
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
              <Form.Item name='username' label='用户名' rules={[{ required: true, message: "请输入用户名" }]}>
                <Input placeholder='请输入用户名' />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name='full_name' label='姓名'>
                <Input placeholder='请输入姓名' />
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

          {/* 密码修改 - 留空则不修改 */}
          <Form.Item name='password' label='新密码（留空则不修改）' style={{ marginTop: 12 }}>
            <Input.Password placeholder='请输入新密码' autoComplete='new-password' />
          </Form.Item>
        </Form>
      </Spin>
    </Modal>
  );
};
