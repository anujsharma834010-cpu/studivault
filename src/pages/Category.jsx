import { Link, useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, LogOut } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { categoriesData } from '../data/categories'

export const Category = () => {
  const { signOut, user } = useAuth()
  const { categoryId } = useParams()
  const navigate = useNavigate()

  const category = categoriesData.find(c => c.id === categoryId)

  if (!category) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Category not found</h2>
        <button onClick={() => navigate('/dashboard')} className="text-primary-600 hover:text-primary-500 font-medium">
          Return to Dashboard
        </button>
      </div>
    )
  }

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
        <Link to="/dashboard" className="inline-flex items-center text-slate-500 hover:text-slate-900 mb-6 transition-colors text-sm font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Link>
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">{category.name}</h2>
          <p className="text-slate-500 mt-1">Select a subject to continue learning.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.subjects.map((subject) => {
            const Icon = subject.icon
            return (
              <Link
                key={subject.id}
                to={`/subjects/${subject.id}`}
                className="group relative bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 transition-all duration-300 transform hover:-translate-y-1 block"
              >
                <div className="p-6">
                  <div className={`inline-flex p-4 rounded-xl ${subject.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{subject.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {subject.description}
                  </p>
                </div>
                {/* Decorative accent */}
                <div className="h-1.5 w-full bg-slate-100 absolute bottom-0 left-0">
                  <div className={`h-full w-0 ${subject.color} group-hover:w-full transition-all duration-500`} />
                </div>
              </Link>
            )
          })}
        </div>
      </main>
    </div>
  )
}
