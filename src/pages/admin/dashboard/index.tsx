import DashboardLayout from "@/components/layouts/DashboardLayout";
import Dashboard from "@/components/views/Admin/Dashboard";

const DashboardMemberPage = () => {
    return(
        <DashboardLayout title="Dashboard" type="admin" description="Dashboard member">
            <Dashboard/>
        </DashboardLayout>
    )
}

export default DashboardMemberPage;