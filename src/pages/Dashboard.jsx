import { Link } from 'react-router-dom'
import { LogOut } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { categoriesData } from '../data/categories'

export const Dashboard = () => {
  const { signOut, user } = useAuth()

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">StudiVault Dashboard</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-500 hidden sm:block">{user?.email}</span>
              <button
                onClick={signOut}
                className="inline-flex items-center gap-2 p-2 text-slate-500 hover:text-slate-900 transition-colors rounded-lg hover:bg-slate-100"
                title="Sign out"
              >
                <LogOut className="w-5 h-5" />
                <span className="hidden sm:block text-sm font-medium">Sign out</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Welcome back!</h2>
          <p className="text-slate-500 mt-1">Select a category to continue learning.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoriesData.map((category) => {
            const Icon = category.icon
            return (
              <Link
                key={category.id}
                to={`/categories/${category.id}`}
                className="group relative bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 transition-all duration-300 transform hover:-translate-y-1 block"
              >
                <div className="p-6">
                  <div className={`inline-flex p-4 rounded-xl ${category.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{category.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>
                {/* Decorative accent */}
                <div className="h-1.5 w-full bg-slate-100 absolute bottom-0 left-0">
                  <div className={`h-full w-0 ${category.color} group-hover:w-full transition-all duration-500`} />
                </div>
              </Link>
            )
          })}
        </div>
      </main>
    </div>
  )
}
