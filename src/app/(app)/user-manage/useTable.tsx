import { api } from "@/services";
import type { UsersReo } from "@/services/fastapi";
import { CopyOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons";
import { ActionType, ProColumns } from "@ant-design/pro-components";
import { App, Avatar, Button } from "antd";
import dayjs from "dayjs";
import { useRef, useState } from "react";
import { AddUserModal } from "./AddUserModal";
import { EditUserModal } from "./EditUserModal";

export const useTable = () => {
  const { message, modal } = App.useApp();
  const actionRef = useRef<ActionType>(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingUserId, setEditingUserId] = useState<string | null>(null);
  const [addModalOpen, setAddModalOpen] = useState(false);

  const handleDelete = (record: UsersReo) => {
    modal.confirm({
      title: "确认删除",
      content: `确定要删除用户「${record.username}」吗？`,
      okText: "确定",
      cancelText: "取消",
      centered: true,
      okButtonProps: { danger: true },
      onOk: async () => {
        if (!record.id) {
          message.error("用户ID不存在");
          return;
        }
        try {
          await api.deleteUserById({ query: { user_id: record.id } });
          message.success("删除成功");
          actionRef.current?.reload();
        } catch {
          message.error("删除失败");
        }
      },
    });
  };

  const handleEdit = (record: UsersReo) => {
    setEditingUserId(record.id || null);
    setEditModalOpen(true);
  };

  const columns: ProColumns<UsersReo>[] = [
    {
      title: "编号",
      key: "index",
      dataIndex: "index",
      valueType: "index",
      width: 70,
      fixed: "left",
    },
    {
      title: "头像",
      dataIndex: "avatar_url",
      width: 100,
      search: false,
      render: (_, record) =>
        record.avatar_url ? <Avatar size={64} src={record.avatar_url} /> : <Avatar size={64} icon={<UserOutlined />} />,
    },
    {
      title: "账号",
      dataIndex: "username",
      width: 140,
      ellipsis: true,
    },
    {
      title: "用户姓名",
      dataIndex: "full_name",
      width: 120,
      ellipsis: true,
    },
    {
      title: "邮箱",
      dataIndex: "email",
      width: 200,
      ellipsis: true,
      render: (_, record) => (
        <span className='flex items-center gap-2'>
          <span className='truncate'>{record.email}</span>
          <CopyOutlined
            style={{ color: "var(--color-primary, #7cb305)" }}
            className='cursor-pointer'
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(record.email);
                message.success("已复制");
              } catch {
                message.error("复制失败");
              }
            }}
          />
        </span>
      ),
    },
    {
      title: "手机号",
      dataIndex: "phone",
      width: 140,
      ellipsis: true,
      render: (_, record) => record.phone ?? "-",
    },
    {
      title: "状态",
      dataIndex: "disabled",
      width: 80,
      valueEnum: {
        false: { text: "启用", status: "Success" },
        true: { text: "禁用", status: "Error" },
      },
    },
    {
      title: "更新时间",
      dataIndex: "updated_at",
      width: 180,
      search: false,
      render: (_, record) => (record.updated_at ? dayjs(record.updated_at).format("YYYY-MM-DD HH:mm:ss") : "-"),
    },
    {
      title: "操作",
      valueType: "option",
      key: "option",
      fixed: "right",
      width: 120,
      render: (_, record) => [
        <a key='delete' style={{ color: "var(--color-error, #ff4d4f)" }} onClick={() => handleDelete(record)}>
          删除
        </a>,
        <a key='edit' onClick={() => handleEdit(record)}>
          编辑
        </a>,
      ],
    },
  ];

  const requestAction = async (params: any, sort: any, filter: any) => {
    const { current: page, pageSize, ...rest } = params;

    // 将字符串类型的布尔值转为真正的布尔值
    const bodyParams: Record<string, any> = {
      page: page ?? 1,
      pageSize: pageSize ?? 10,
      ...rest,
    };

    if (bodyParams.disabled !== undefined) {
      bodyParams.disabled = bodyParams.disabled === "true" || bodyParams.disabled === true;
    }

    const res = await api.postUsersList({ body: bodyParams });

    const records = res?.data?.records ?? [];
    const total = res?.data?.total ?? 0;

    return {
      data: records,
      success: res?.success ?? false,
      total,
    };
  };

  const search = {
    defaultCollapsed: true,
    labelWidth: "auto",
    searchText: "筛选",
  };

  const pagination = {
    showQuickJumper: false,
    showSizeChanger: false,
    showTotal: false,
    simple: true,
    pageSize: 6,
  };

  const EditModal = (
    <EditUserModal
      open={editModalOpen}
      userId={editingUserId}
      onClose={() => setEditModalOpen(false)}
      onSuccess={() => actionRef.current?.reload()}
    />
  );

  const AddModal = (
    <AddUserModal
      open={addModalOpen}
      onClose={() => setAddModalOpen(false)}
      onSuccess={() => actionRef.current?.reload()}
    />
  );

  return {
    rowKey: "id",
    headerTitle: <span>用户管理</span>,
    defaultSize: "large" as const,
    cardBordered: true,
    actionRef,
    columns,
    request: requestAction,
    pagination,
    scroll: { x: "max-content", y: 650 },
    options: false,
    search,
    toolBarRender: () => [
      <Button key='add' type='primary' icon={<PlusOutlined />} onClick={() => setAddModalOpen(true)}>
        新增用户
      </Button>,
    ],
    tableExtraRender: () => null,
    EditModal,
    AddModal,
  };
};
