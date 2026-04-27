import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin");
  }

  const userStatus = (session.user as any)?.status;

  if (userStatus !== "staff" && userStatus !== "admin") {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-slate-900">Access Denied</h1>
          <p className="text-slate-600">You do not have permission to view this page.</p>
          <Link href="/">
            <button className="bg-primary text-white px-8 py-3 rounded-full font-bold cursor-pointer">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-20">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl font-extrabold text-slate-900">Admin Dashboard</h1>
          <p className="text-slate-500 mt-2">Welcome back, {session.user?.name}</p>
        </div>
        <div className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
          {userStatus}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
          <h3 className="text-lg font-bold">Total Projects</h3>
          <p className="text-4xl font-black text-primary">12</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
          <h3 className="text-lg font-bold">Active Clients</h3>
          <p className="text-4xl font-black text-primary">48</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
          <h3 className="text-lg font-bold">Support Tickets</h3>
          <p className="text-4xl font-black text-primary">5</p>
        </div>
      </div>

      <div className="mt-12 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-8 border-b border-slate-100">
          <h3 className="text-xl font-bold">Recent Activities</h3>
        </div>
        <div className="p-8">
          <p className="text-slate-500 italic text-center py-12">No recent activities to show.</p>
        </div>
      </div>
    </div>
  );
}
