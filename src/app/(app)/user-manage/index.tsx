import dynamic from "next/dynamic";
import { FC } from "react";
import { useTable } from "./useTable";

const PageContainer = dynamic(() => import("@ant-design/pro-components").then(mod => mod.PageContainer), {
  ssr: false,
});

const CustomProTable = dynamic(() => import("@/components/CustomProTable").then(mod => mod.CustomProTable), {
  ssr: false,
});

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
