import { CustomProTable } from "@/components/CustomProTable";
import { PageContainer } from "@ant-design/pro-components";
import { FC } from "react";
import { useTable } from "./useTable";

const UserManageList: FC = () => {
  const { EditModal, AddModal, ...listTableProps } = useTable();

  return (
    <PageContainer
      header={{
        title: false,
      }}
    >
      <CustomProTable {...(listTableProps as Record<string, unknown>)} />
      {EditModal}
      {AddModal}
    </PageContainer>
  );
};

export default UserManageList;
