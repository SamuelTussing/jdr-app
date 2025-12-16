import AdminLayout from "../../components/admin/AdminLayout"
import AdminHeader from "../../components/admin/AdminHeader"
import DashboardContent from "../../components/admin/DashboardContent"
import "./admin.css"

export default function AdminPage() {
  return (
    <AdminLayout>
      <AdminHeader />
      <DashboardContent />
    </AdminLayout>
  )
}
